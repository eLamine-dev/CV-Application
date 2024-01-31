import { createElement, useState } from 'react';

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

function ElementForm({ activeTab, selectedResume, config, saveData }) {
   const [formData, setFormData] = useState({});
   const [selectedEntry, setSelectedEntry] = useState(null);

   const handleInputChange = (fieldId, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldId]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
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
                           onChange: (e) =>
                              handleInputChange(field.id, e.target.value),
                        })}
                     {field.component === Select && (
                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                           <InputLabel>{field.label}</InputLabel>
                           {createElement(
                              field.component,
                              {
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
                     {field.component === 'date' && <input type="date" />}
                  </div>
               );
            })}

            <button type="submit">Save</button>
         </form>
      </div>
   );
}

export default ElementForm;