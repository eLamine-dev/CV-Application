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
         const newResumeId = Date.now().toString();
         const newResume = {
            name: newResumeName,
            id: newResumeId,
            'general info': [],
         };

         setResumes({ ...resumes, [newResumeId]: newResume });
      }
   };

   const handleDeleteResume = (resumeId) => {
      const updatedResumes = resumes.filter((resume) => resume.id !== resumeId);
      setResumes(updatedResumes);
      setSelectedResume(null);
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
