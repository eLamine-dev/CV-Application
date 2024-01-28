import { useState } from 'react';
import Header from './components/Header';
import ResumeManager from './components/ResumeManager';
import ResumeEditor from './components/ResumeEditor';
import ResumeView from './components/ResumeView';
import sampleResume from './components/sampleResume';
import './styles/App.css';

function App() {
   const [resumes, setResumes] = useState([]);
   const [selectedResume, setSelectedResume] = useState(sampleResume);

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

   const handleEditEntry = (category, entryId, NewData) => {};
   const handleAddNewEntry = (category, entry) => {};
   const handleDeleteEntry = (category, entryId) => {};

   const openResumeManager = () => {};

   return (
      <div>
         <Header />

         <ResumeManager
            resumes={resumes}
            selectedResume={selectedResume}
            onNewResume={handleCreateNewResume}
            onSelectResume={handleSelectResume}
            onDeleteResume={handleDeleteResume}
         />

         <ResumeEditor
            selectedResume={selectedResume}
            onEditResumeEntry={handleEditEntry}
            onAddNewResumeEntry={handleAddNewEntry}
            onDeleteResumeEntry={handleDeleteEntry}
         />

         {/* <ResumeView selectedResume={selectedResume} /> */}
      </div>
   );
}

export default App;
