import { useState } from 'react';
import ResumeCard from './resumeManager/ResumeCard';
import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   Stack,
   TextField,
} from '@mui/material';

function ResumeManager({
   resumes,
   onNewResume,
   onOpenInEditor,
   onDeleteResume,
   onMakeCopy,
   // onDownloadPdf,
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

   const handleMakeCopy = (resumeId) => {
      const originalResume = resumes[resumeId];
      const copiedResume = {
         ...originalResume,
         id: Date.now().toString(),
         name: `${originalResume.name}-copy`,
      };

      onMakeCopy(copiedResume);
   };

   return (
      <Box className="ResumeManager">
         {/* Welcome message and new resume creation section */}
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               mb: 2,
               flexBasis: '100%',
            }}
         >
            <Box>
               <h2>Resumes</h2>
               <p>Create, edit and manage your resumes.</p>
            </Box>
            {!isCreatingNewResume ? (
               <Button
                  variant="contained"
                  size="small"
                  onClick={() => setIsCreatingNewResume(true)}
               >
                  New Resume
               </Button>
            ) : (
               <Stack direction="row" spacing={2}>
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
               </Stack>
            )}
         </Box>

         {/* Resume cards */}

         <Stack spacing={2} direction="row" flexWrap="wrap">
            {Object.keys(resumes).map((resumeId) => (
               <ResumeCard
                  key={resumeId}
                  resume={resumes[resumeId]}
                  onOpenInEditor={onOpenInEditor}
                  onMakeCopy={handleMakeCopy}
                  onDeleteResume={onDeleteResume}
               />
            ))}
         </Stack>
      </Box>
   );
}

export default ResumeManager;
