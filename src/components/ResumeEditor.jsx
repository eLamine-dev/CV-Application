import { useState } from 'react';
import config from './resumeEditor/Config';
import ElementsTabs from './resumeEditor/ElementsTabs';
import ElementForm from './resumeEditor/ElementForm';

function ResumeEditor({ selectedResume, onSaveEntry }) {
   const [activeTab, setActiveTab] = useState('general info');

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };

   const handleSaveDada = (formData) => {
      onSaveEntry(activeTab, formData);
   };

   return (
      <div className="ResumeEditor">
         <ElementsTabs
            config={config}
            setActiveTab={handleTabChange}
            activeTab={activeTab}
         />

         <ElementForm
            selectedResume={selectedResume}
            activeTab={activeTab}
            config={config}
            onSaveData={handleSaveDada}
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
