import { createElement, useEffect, useReducer, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

import dayjs from 'dayjs';

import {
   TextField,
   Select,
   MenuItem,
   InputLabel,
   FormControl,
   Stack,
   Button,
   Chip,
   Box,
} from '@mui/material';

function DynamicForm({
   activeTab,
   selectedResume,
   config,
   onSaveEntry,
   onDeleteEntry,
}) {
   const [formData, setFormData] = useState({});

   useEffect(() => {
      resetFormData();
   }, [selectedResume, activeTab]);

   const resetFormData = () => {
      const newFormData = {};
      config[activeTab].forEach((field) => {
         newFormData[field.id] = null;
      });
      setFormData(newFormData);

      if (
         activeTab === 'general info' &&
         selectedResume['general info'] &&
         selectedResume['general info'][0]
      ) {
         setFormData((prevData) => ({
            ...prevData,
            ...selectedResume['general info'][0],
         }));
      }
   };

   const handleInputChange = (fieldId, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldId]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSaveEntry(formData);
      resetFormData();
   };

   const deleteEntry = (entryId) => {
      onDeleteEntry(entryId);
      if (formData.id === entryId) {
         resetFormData();
      }
   };

   return (
      <Box
         // className="dynamicForm"
         sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
         }}
      >
         <form
            id="editing-form"
            className="inputsContainer"
            onSubmit={handleSubmit}
         >
            {config[activeTab].map((field, index) => {
               return (
                  <div key={index}>
                     {field.component === TextField &&
                        createElement(field.component, {
                           id: field.id,
                           key: index,
                           label: field.label,
                           placeholder: field.label,
                           required: field.required || false,
                           multiline: field.multiline || false,
                           size: 'small',
                           value: formData[field.id] || '',
                           onChange: (e) => {
                              handleInputChange(field.id, e.target.value);
                           },
                           fullWidth: true,
                        })}
                     {field.component === Select && (
                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                           <InputLabel>{field.label}</InputLabel>
                           {createElement(
                              field.component,
                              {
                                 id: field.id,
                                 size: 'small',
                                 label: field.label,
                                 value: formData[field.id] || '',
                                 onChange: (e) =>
                                    handleInputChange(field.id, e.target.value),
                              },
                              field.options.map((option, index) => {
                                 return (
                                    <MenuItem key={index} value={option}>
                                       {option}
                                    </MenuItem>
                                 );
                              })
                           )}
                        </FormControl>
                     )}
                     {field.component === DateField && (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DateField
                              id={field.id}
                              size="small"
                              label={field.label}
                              value={
                                 formData[field.id] ? formData[field.id] : null
                              }
                              onChange={(date) => {
                                 handleInputChange(field.id, dayjs(date));
                              }}
                           />
                        </LocalizationProvider>
                     )}
                  </div>
               );
            })}
            <div>
               <button type="submit">Save</button>
               <button type="button" onClick={() => resetFormData()}>
                  Reset
               </button>
            </div>
         </form>

         {activeTab !== 'general info' && selectedResume[activeTab] && (
            <Stack>
               {selectedResume[activeTab].map((entry, index) => {
                  return (
                     <Chip
                        variant={
                           entry.id === formData.id ? 'filled' : 'outlined'
                        }
                        onClick={() => {
                           setFormData(entry);
                        }}
                        sx={{
                           maxWidth: 220,
                           justifyContent: 'space-between',
                           // '& > .MuiChip-label': {
                           //    textAlign: 'left',
                           // },
                        }}
                        onDelete={() => {
                           deleteEntry(entry.id);
                        }}
                        key={index}
                        label={`${Object.values(entry)[1]} - ${
                           Object.values(entry)[2]
                        }`}
                     ></Chip>
                  );
               })}
            </Stack>
         )}
      </Box>
   );
}

export default DynamicForm;
