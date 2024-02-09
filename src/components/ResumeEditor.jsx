import { useState, useEffect } from 'react';
import config from './resumeEditor/Config';
import NavigationTabs from './resumeEditor/NavigationTabs';
import DynamicForm from './resumeEditor/DynamicForm';

function ResumeEditor({ selectedResume, setSelectedResume, onSaveEntry }) {
   const [activeTab, setActiveTab] = useState('general info');

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };

   const handleSaveEntry = (data) => {
      const updatedResume = {
         ...selectedResume,
         [activeTab]: data.id
            ? selectedResume[activeTab].map((entry) =>
                 entry.id === data.id ? { ...entry, ...data } : entry
              )
            : selectedResume[activeTab]?.length > 0
            ? [
                 ...selectedResume[activeTab],
                 { ...data, id: Date.now().toString() },
              ]
            : [{ ...data, id: Date.now().toString() }],
      };

      setSelectedResume(updatedResume);
      onSaveEntry(updatedResume);
   };

   return (
      <div className="ResumeEditor">
         <NavigationTabs
            config={config}
            setActiveTab={handleTabChange}
            activeTab={activeTab}
         />

         <DynamicForm
            activeTab={activeTab}
            selectedResume={selectedResume}
            config={config}
            onSaveData={handleSaveEntry}
         />
      </div>
   );
}

export default ResumeEditor;
