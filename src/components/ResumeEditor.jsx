import config from './resumeEditor/Config';
import { useState } from 'react';

function ResumeEditor({
   selectedResume,
   onEditEntry,
   onAddNewEntry,
   onDeleteEntry,
}) {
   const [activeTab, setActiveTab] = useState('generalInfo');
   const [formData, setFormData] = useState({});

   const handleInputChange = (fieldId, value) => {};

   const renderFormInputs = () => {};

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };

   const handleSave = () => {};

   const handleDeleteEntry = (entryId) => {
      onDeleteEntry(activeTab, entryId);
      setFormData({});
   };

   const handleEditEntry = (entry) => {
      setSelectedEntry(entry);
      setFormData(entry);
   };

   return (
      <div>
         <h2>Edit {activeTab}:</h2>
         <div>
            {config[activeTab].map((field) => (
               <div key={field.id}></div>
            ))}
            {selectedResume && selectedResume[activeTab] && (
               <div>
                  <button
                     onClick={() =>
                        handleEditEntry(selectedResume[activeTab][0])
                     }
                  >
                     Edit
                  </button>
                  <button
                     onClick={() =>
                        handleDeleteEntry(selectedResume[activeTab][0].id)
                     }
                  >
                     Delete
                  </button>
               </div>
            )}
         </div>
         {renderFormInputs()}
         <button onClick={handleSave}>Save</button>
      </div>
   );
}

export default ResumeEditor;
