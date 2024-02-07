import { useEffect, useState } from 'react';
import Header from './components/Header';
import ResumeManager from './components/ResumeManager';
import ResumeEditor from './components/ResumeEditor';
import ResumeView from './components/ResumeView';
import sampleResume from './components/sampleResume';
import './styles/App.css';

function App() {
   const [resumes, setResumes] = useState([sampleResume]);
   const [selectedResumeId, setSelectedResumeId] = useState('id01');

   useEffect(() => {
      console.log(resumes);
   });

   const handleCreateNewResume = (newResumeName) => {
      if (newResumeName.trim() !== '') {
         const newResume = {
            name: newResumeName,
            id: Date.now().toString(),
            'general info': [],
         };

         setResumes([...resumes, newResume]);
      }
   };

   const handleDeleteResume = (resumeId) => {
      const updatedResumes = resumes.filter((resume) => resume.id !== resumeId);
      setResumes(updatedResumes);
      setSelectedResumeId(null);
   };

   const handleSelectResume = (resumeId) => {
      setSelectedResumeId(resumeId);
   };

   const handleSaveEntry = (category, data) => {
      const updatedResumes = resumes.map((resume) => {
         if (resume.id === selectedResumeId) {
            return {
               ...resume,
               [category]: data.id
                  ? (resume[category] || []).map((entry) =>
                       entry.id === data.id ? { ...entry, ...data } : entry
                    )
                  : [
                       ...(resume[category] || []),
                       { ...data, id: Date.now().toString() },
                    ],
            };
         }
         return resume;
      });

      setResumes(updatedResumes);
   };

   return (
      <div>
         {/* <Header /> */}
         <ResumeManager
            resumes={resumes}
            selectedResumeId={selectedResumeId}
            onNewResume={handleCreateNewResume}
            onSelectResume={handleSelectResume}
            onDeleteResume={handleDeleteResume}
         />

         <ResumeEditor
            resumes={resumes}
            selectedResumeId={selectedResumeId}
            onSaveEntry={handleSaveEntry}
         />
         {/* <ResumeView selectedResume={selectedResume} /> */}
      </div>
   );
}

export default App;
