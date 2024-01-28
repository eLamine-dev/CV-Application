function CategoryForm({ activeTab, selectedResume }) {
   return (
      <div>
         {selectedResume[activeTab].map((entry, index) => {
            return (
               <div key={index}>
                  {`${Object.values(entry)[1]} - ${Object.values(entry)[2]}`}
                  <button>delete</button>
                  <button>edit</button>
               </div>
            );
         })}
      </div>
   );
}

export default CategoryForm;
