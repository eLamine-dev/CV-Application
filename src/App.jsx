import { useState } from 'react';
import './App.css';
import Header from './Header';
import ResumeManager from './ResumeManager';
import ResumeEditor from './ResumeEditor';
import ResumeView from './ResumeView';

function App() {
   const [resumes, setResumes] = useState([]);
   const [selectedResume, setSelectedResume] = useState(null);

   const handleCreateNewResume = (newResumeName) => {
      if (newResumeName.trim() !== '') {
         const newResume = {
            name: newResumeName,
            id: Date.now(),
         };

         setResumes([...resumes, newResume]);
      }
   };

   const handleDeleteResume = (resumeId) => {
      const updatedResumes = resumes.filter((resume) => resume.id !== resumeId);
      setResumes(updatedResumes);
      setSelectedResume(null);
   };

   const handleSelectResume = (resumeId) => {
      const selected = resumes.find((resume) => resume.id === resumeId);
      setSelectedResume(selected);
   };

   return (
      <div>
         <Header onNewResume={handleCreateNewResume} />

         <ResumeManager
            resumes={resumes}
            selectedResume={selectedResume}
            onSelectResume={handleSelectResume}
            onDeleteResume={handleDeleteResume}
         />

         <ResumeEditor selectedResume={selectedResume} />

         <ResumeView selectedResume={selectedResume} />
      </div>
   );
}

export default App;
