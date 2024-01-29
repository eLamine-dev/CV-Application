import { createElement } from 'react';

function CategoryForm({ activeTab, selectedResume, config, saveData }) {
   const [formData, setFormData] = useState([]);
   
   const handleSubmit = (e) => {

   }

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
            {config[activeTab].map((input, index) => {
               return (
                  <div key={index}>
                     <label htmlFor="input">{input.label}</label>
                     {createElement(input.type, { key: index, onChange:  })}
                  </div>
               );
            })}

            <button type='submit' onSubmit={}></button>
         </form>
      </div>
   );
}

export default CategoryForm;
