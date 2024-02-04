import { useState } from 'react';
import { Stack, Button, Chip, Box } from '@mui/material';

function ResumeManager({
   resumes,
   selectedResume,
   onNewResume,
   onSelectResume,
   onDeleteResume,
}) {
   const [newResumeName, setNewResumeName] = useState('');
   const [isCreatingNewResume, setIsCreatingNewResume] = useState(false);

   const handleCreateNewResume = () => {
      if (newResumeName.trim() !== '') {
         onNewResume(newResumeName);
         setNewResumeName('');
         setIsCreatingNewResume(false);
      }
   };

   const deleteResume = () => {};

   return (
      <Box className="ResumeManager">
         <h2>Resumes Management</h2>

         <Stack>
            {resumes.map((resume) => (
               <Chip
                  onDelete={deleteResume}
                  onClick={() => onSelectResume(resume.id)}
                  key={resume.id}
                  label={resume.name}
               >
                  {/* <Button onClick={() => onSelectResume(resume.id)}>
                     {resume.name}
                  </Button>
                  <Button onClick={() => onDeleteResume(resume.id)}>
                     Delete
                  </Button> */}
               </Chip>
            ))}
         </Stack>

         {resumes.length === 0 && (
            <p>No resumes available. Create a new one!</p>
         )}
         {selectedResume && (
            <p>
               Currently editing: <strong>{selectedResume.name}</strong>
            </p>
         )}

         {isCreatingNewResume ? (
            <div>
               <label htmlFor="newResumeName">Enter new resume name:</label>
               <input
                  type="text"
                  id="newResumeName"
                  value={newResumeName}
                  onChange={(e) => setNewResumeName(e.target.value)}
               />
               <button onClick={handleCreateNewResume}>
                  Create new resume
               </button>
            </div>
         ) : (
            <button onClick={() => setIsCreatingNewResume(true)}>
               Create New Resume
            </button>
         )}

         <button>Close</button>
      </Box>
   );
}

export default ResumeManager;
