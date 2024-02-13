import { useState } from 'react';
import { Stack, Button, Chip, Box, TextField } from '@mui/material';

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

   const deleteResume = (resumeId) => {
      onDeleteResume(resumeId);
   };

   return (
      <Box className="ResumeManager">
         <Stack>
            {Object.keys(resumes).map((resumeId) => (
               <Chip
                  variant={
                     resumeId === selectedResume.id ? 'filled' : 'outlined'
                  }
                  sx={{
                     maxWidth: 220,
                     justifyContent: 'space-between',
                     // '& > .MuiChip-label': {
                     //    textAlign: 'left',
                     // },
                  }}
                  onDelete={() => deleteResume(resumeId)}
                  onClick={() => onSelectResume(resumeId)}
                  key={resumeId}
                  label={resumes[resumeId].name}
               />
            ))}
         </Stack>

         {Object.keys(resumes).length === 0 && (
            <p>No resumes available. Create a new one!</p>
         )}
         {/* {selectedResume && (
            <p>
               Currently editing: <strong>{selectedResume.name}</strong>
            </p>
         )} */}

         {isCreatingNewResume ? (
            <div>
               <TextField
                  placeholder="New Resume"
                  label="Resume name"
                  size="small"
                  type="text"
                  id="newResumeName"
                  value={newResumeName}
                  onChange={(e) => setNewResumeName(e.target.value)}
               />
               <Button
                  variant="contained"
                  size="small"
                  onClick={handleCreateNewResume}
               >
                  Save
               </Button>
               <Button
                  variant="contained"
                  size="small"
                  onClick={() => setIsCreatingNewResume(false)}
               >
                  Close
               </Button>
            </div>
         ) : (
            <div>
               <Button
                  variant="contained"
                  size="small"
                  onClick={() => setIsCreatingNewResume(true)}
               >
                  New Resume
               </Button>
            </div>
         )}
      </Box>
   );
}

export default ResumeManager;
