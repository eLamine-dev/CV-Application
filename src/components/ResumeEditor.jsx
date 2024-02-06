import { useState, useEffect } from 'react';
import config from './resumeEditor/Config';
import ElementsTabs from './resumeEditor/ElementsTabs';
import ElementForm from './resumeEditor/ElementForm';
import { DatePicker } from '@mui/x-date-pickers';

function ResumeEditor({ selectedResumeId, selectedResume, onSaveEntry }) {
   const [activeTab, setActiveTab] = useState('general info');
   const [formData, setFormData] = useState({});

   useEffect(() => {
      resetFormData();
   }, [selectedResumeId, activeTab]);

   const resetFormData = () => {
      setFormData({});
      let dateFields = config[activeTab].filter(
         (field) => field.component === DatePicker
      );
      dateFields.forEach((field) => {
         setFormData((prevData) => ({ ...prevData, [field.id]: null }));
      });
      if (activeTab === 'general info') {
         setFormData((prevData) => ({
            ...prevData,
            ...selectedResume['general info'][0],
         }));
      }
   };

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };

   const handleSaveDada = (formData) => {
      onSaveEntry(activeTab, formData);
      resetFormData();
   };

   return (
      <div className="ResumeEditor">
         <ElementsTabs
            config={config}
            setActiveTab={handleTabChange}
            activeTab={activeTab}
         />

         <ElementForm
            formData={formData}
            setFormData={setFormData}
            activeTab={activeTab}
            selectedResume={selectedResume}
            selectedResumeId={selectedResumeId}
            config={config}
            onSaveData={handleSaveDada}
            resetFormData={resetFormData}
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
