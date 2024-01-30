import { createElement, useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function CategoryForm({ activeTab, selectedResume, config, saveData }) {
   const [formData, setFormData] = useState([]);

   const handleSubmit = (e) => {};

   return (
      <div>
         <ul>
            {selectedResume[activeTab].map((entry, index) => {
               return (
                  <li key={index}>
                     {`${Object.values(entry)[1]} - ${Object.values(entry)[2]}`}
                     <button>delete</button>
                     <button>edit</button>
                  </li>
               );
            })}
         </ul>
         <form action="">
            {config[activeTab].map((field, index) => {
               return (
                  <div key={index}>
                     {/* <label htmlFor="field">{field.label}</label> */}
                     {field.component === TextField &&
                        createElement(field.component, {
                           key: index,
                           label: field.label,
                           placeholder: field.label,
                           multiline: field.multiline || false,
                        })}
                     {field.component === Select && (
                        <FormControl>
                           <InputLabel>{field.label}</InputLabel>

                           {createElement(
                              field.component,
                              { width: 250 },
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
                  </div>
               );
            })}

            <button type="submit">Save</button>
         </form>
      </div>
   );
}

export default CategoryForm;
