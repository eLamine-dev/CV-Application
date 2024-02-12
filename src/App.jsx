import { useEffect, useState } from 'react';
import Header from './components/Header';
import ResumeManager from './components/ResumeManager';
import ResumeEditor from './components/ResumeEditor';
import ResumeView from './components/ResumeView';
import sampleResume from './components/sampleResume';
import './styles/App.css';

function App() {
   const [resumes, setResumes] = useState({ [sampleResume.id]: sampleResume });
   const [selectedResume, setSelectedResume] = useState(sampleResume);

   useEffect(() => {
      console.log(resumes);
   });

   const handleCreateNewResume = (newResumeName) => {
      if (newResumeName.trim() !== '') {
         const newResume = {
            id: Date.now().toString(),
            name: newResumeName,
            'general info': [],
         };

         setResumes({ ...resumes, [newResume.id]: newResume });
      }
   };

   const handleSelectResume = (resumeId) => {
      setSelectedResume(resumes[resumeId]);
   };

   const handleUpdateResume = (updatedResume) => {
      setResumes((prevResumes) => ({
         ...prevResumes,
         [updatedResume.id]: updatedResume,
      }));
   };

   const handleDeleteResume = (resumeId) => {
      const updatedResumes = { ...resumes };

      delete updatedResumes[resumeId];

      if (selectedResume && selectedResume.id === resumeId) {
         setSelectedResume(null);
      }

      setResumes(updatedResumes);
   };

   return (
      <div>
         {/* <Header /> */}
         <ResumeManager
            resumes={resumes}
            onNewResume={handleCreateNewResume}
            onSelectResume={handleSelectResume}
            onDeleteResume={handleDeleteResume}
         />

         <ResumeEditor
            selectedResume={selectedResume}
            setSelectedResume={setSelectedResume}
            onSaveEntry={handleUpdateResume}
         />
         <ResumeView selectedResume={selectedResume} />
      </div>
   );
}

export default App;
