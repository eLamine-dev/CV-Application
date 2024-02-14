import { useState } from 'react';
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

         {/* List of saved resumes */}
         <Stack spacing={2}>
            {Object.keys(resumes).map((resumeId) => (
               <Card key={resumeId} sx={{ maxWidth: 300 }}>
                  <CardContent>
                     <h3>{resumes[resumeId].name}</h3>
                     {/* Add preview image of the resume here */}
                  </CardContent>
                  <CardActions>
                     <Button
                        size="small"
                        onClick={() => onOpenInEditor(resumeId)}
                     >
                        Open in Editor
                     </Button>
                     <Button
                        size="small"
                        onClick={() => handleMakeCopy(resumeId)}
                     >
                        Make a Copy
                     </Button>
                     <Button
                        size="small"
                        onClick={() => onDeleteResume(resumeId)}
                     >
                        Delete
                     </Button>
                  </CardActions>
               </Card>
            ))}
         </Stack>
      </Box>
   );
}

export default ResumeManager;
