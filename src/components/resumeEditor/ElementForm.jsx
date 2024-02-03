import { createElement, useReducer, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

import {
   TextField,
   Select,
   MenuItem,
   InputLabel,
   FormControl,
   Stack,
   Button,
   Chip,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function ElementForm({ activeTab, selectedResume, config, onSaveData }) {
   const [formData, setFormData] = useState({});
   // const [selectedEntry, setSelectedEntry] = useState(null);

   const handleInputChange = (fieldId, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldId]: value }));
      console.log(formData);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSaveData(activeTab, formData);
      setFormData({});
      let dateFields = config[activeTab].filter(
         (field) => field.component === DatePicker
      );
      dateFields.forEach((field) => {
         setFormData((prevData) => ({ ...prevData, [field.id]: null }));
      });
   };

   const deleteEntry = (e) => {
      e.preventDefault();
   };

   return (
      <div className="ElementForm">
         <Stack>
            {selectedResume[activeTab].map((entry, index) => {
               return (
                  <Chip
                     variant="outlined"
                     onClick={() => {
                        setFormData(entry);
                     }}
                     onDelete={deleteEntry}
                     key={index}
                     label={`${Object.values(entry)[1]} - ${
                        Object.values(entry)[2]
                     }`}
                  ></Chip>
               );
            })}
         </Stack>
         <form id="editing-form" onSubmit={handleSubmit}>
            {config[activeTab].map((field, index) => {
               return (
                  <div key={index}>
                     {field.component === TextField &&
                        createElement(field.component, {
                           id: field.id,
                           key: index,
                           label: field.label,
                           placeholder: field.label,
                           multiline: field.multiline || false,
                           size: 'small',
                           value: formData[field.id] || '',
                           onChange: (e) => {
                              handleInputChange(field.id, e.target.value);
                           },
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
                                 value: formData[field.id] || null,
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
                              label="Date"
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
            <button type="submit">Save</button>
         </form>
      </div>
   );
}

export default ElementForm;
