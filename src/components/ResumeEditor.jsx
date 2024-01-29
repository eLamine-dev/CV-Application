import config from './resumeEditor/Config';
import CategoryTabs from './resumeEditor/CategoryTabs';
import { useState } from 'react';
import CategoryForm from './resumeEditor/CategoryForm';

function ResumeEditor({
   selectedResume,
   onEditEntry,
   onAddNewEntry,
   onDeleteEntry,
}) {
   const [activeTab, setActiveTab] = useState('education');
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
         <CategoryTabs
            config={config}
            setActiveTab={handleTabChange}
            activeTab={activeTab}
         />
         <h2>Edit {activeTab}:</h2>
         <CategoryForm
            selectedResume={selectedResume}
            activeTab={activeTab}
            config={config}
         />

         {/* <div>
            {config[activeTab].map((field) => (
               <div key={field.id}></div>
            ))}
         </div>
         {renderFormInputs()}
         <button onClick={handleSave}>Save</button> */}
      </div>
   );
}

export default ResumeEditor;
