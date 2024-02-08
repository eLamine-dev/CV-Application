import { useState, useEffect } from 'react';
import config from './resumeEditor/Config';
import ElementsTabs from './resumeEditor/ElementsTabs';
import ElementForm from './resumeEditor/ElementForm';

function ResumeEditor({ selectedResume, setSelectedResume, onSaveEntry }) {
   const [activeTab, setActiveTab] = useState('general info');

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };

   const handleSaveEntry = (category, data) => {
      const updatedResume = {
         ...selectedResume,
         [category]: data.id
            ? (selectedResume[category] || []).map((entry) =>
                 entry.id === data.id ? { ...entry, ...data } : entry
              )
            : [
                 ...(selectedResume[category] || []),
                 { ...data, id: Date.now().toString() },
              ],
      };
      setSelectedResume(updatedResume);
      onSaveEntry(updatedResume);
   };

   return (
      <div className="ResumeEditor">
         <ElementsTabs
            config={config}
            setActiveTab={handleTabChange}
            activeTab={activeTab}
         />

         <ElementForm
            activeTab={activeTab}
            selectedResume={selectedResume}
            config={config}
            onSaveData={handleSaveEntry}
         />
      </div>
   );
}

export default ResumeEditor;
