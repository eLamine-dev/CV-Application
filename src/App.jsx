import { useEffect, useState } from 'react';
import Header from './components/Header';
import ResumeManager from './components/ResumeManager';
import ResumeEditor from './components/ResumeEditor';
import ResumeView from './components/ResumeView';
import sampleResume from './components/sampleResume';

function App() {
   const [resumes, setResumes] = useState({ [sampleResume.id]: sampleResume });
   const [selectedResume, setSelectedResume] = useState(null);

   useEffect(() => {
      console.log(resumes);
   });

   const handleCreateNewResume = (newResumeName) => {
      if (newResumeName.trim() !== '') {
         const newResume = {
            id: Date.now().toString(),

            'general info': [
               {
                  name: newResumeName,
               },
            ],
         };

         setResumes({ ...resumes, [newResume.id]: newResume });
         // setSelectedResume(newResume);
      }
   };

   const handleOpenResume = (resumeId) => {
      setSelectedResume(resumes[resumeId]);
   };

   const handleUpdateResume = (updatedResume) => {
      setResumes((prevResumes) => ({
         ...prevResumes,
         [updatedResume.id]: updatedResume,
      }));
   };

   const handleMakeCopy = (copiedResume) => {
      const updatedResumes = { ...resumes, [copiedResume.id]: copiedResume };
      setResumes(updatedResumes);
   };

   const handleDeleteResume = (resumeId) => {
      const updatedResumes = { ...resumes };

      delete updatedResumes[resumeId];

      if (selectedResume && selectedResume.id === resumeId) {
         setSelectedResume(null);
      }

      setResumes(updatedResumes);
   };

   const handleDownloadPdf = (resumeId) => {};

   const showResumeManager = () => {
      setSelectedResume(null);
   };

   return (
      <div className="App">
         <Header showResumeManager={showResumeManager} />
         {selectedResume ? (
            <>
               <ResumeEditor
                  selectedResume={selectedResume}
                  setSelectedResume={setSelectedResume}
                  onSaveEntry={handleUpdateResume}
               />

               <ResumeView selectedResume={selectedResume} />
            </>
         ) : (
            <ResumeManager
               resumes={resumes}
               onNewResume={handleCreateNewResume}
               onOpenInEditor={handleOpenResume}
               onDeleteResume={handleDeleteResume}
               onMakeCopy={handleMakeCopy}
               onDownloadPdf={handleDownloadPdf}
            />
         )}
      </div>
   );
}

export default App;
