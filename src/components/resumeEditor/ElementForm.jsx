import { createElement, useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
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

function ElementForm({ activeTab, selectedResume, config, onSaveData }) {
   const [formData, setFormData] = useState({});
   const [selectedEntry, setSelectedEntry] = useState(null);

   const handleInputChange = (fieldId, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldId]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSaveData(activeTab, formData);
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
                     onClick={() => {
                        setSelectedEntry(entry);
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
         <form onSubmit={handleSubmit}>
            {config[activeTab].map((field, index) => {
               return (
                  <div key={index}>
                     {field.component === TextField &&
                        createElement(field.component, {
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
                           <DateField size="small" label={field.label} />
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
