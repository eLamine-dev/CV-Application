import { useEffect, useState } from 'react';
import Header from './components/Header';
import ResumeManager from './components/ResumeManager';
import ResumeEditor from './components/ResumeEditor';
import ResumeView from './components/ResumeView';
import sampleResume from './components/sampleResume';
import './styles/App.css';

function App() {
   const [resumes, setResumes] = useState([sampleResume]);
   const [selectedResume, setSelectedResume] = useState(null);

   useEffect(() => console.log(resumes));

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

   const handleSaveEntry = (category, data) => {
      if (data.id) {
         const updatedEntries = selectedResume[category].map((entry) =>
            entry.id === data.id ? { ...entry, ...data } : entry
         );

         setSelectedResume((prevResume) => ({
            ...prevResume,
            [category]: updatedEntries,
         }));
      } else {
         const newEntry = { ...data, id: Date.now() };

         setSelectedResume((prevResume) => ({
            ...prevResume,
            [category]: [...prevResume[category], newEntry],
         }));
      }
   };

   const openResumeManager = () => {};

   return (
      <div>
         {/* <Header /> */}

         <ResumeManager
            resumes={resumes}
            selectedResume={selectedResume}
            onNewResume={handleCreateNewResume}
            onSelectResume={handleSelectResume}
            onDeleteResume={handleDeleteResume}
         />

         <ResumeEditor
            selectedResume={selectedResume}
            onSaveEntry={handleSaveEntry}
         />

         {/* <ResumeView selectedResume={selectedResume} /> */}
      </div>
   );
}

export default App;
