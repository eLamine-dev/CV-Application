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

const styles = {};

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
      let copyNumber = 1;
      let baseName = originalResume['general info'][0].name;

      while (
         Object.values(resumes).some((resume) => {
            return resume['general info'][0].name === baseName;
         })
      ) {
         copyNumber++;
         baseName =
            originalResume['general info'][0].name.replace(/ copy \d+$/, '') +
            ` copy ${copyNumber}`;
      }

      const copiedResume = {
         ...originalResume,
         id: Date.now().toString(),
         'general info': [
            {
               ...originalResume['general info'][0],
               name: baseName,
            },
         ],
      };

      onMakeCopy(copiedResume);
   };

   return (
      <Box className="ResumeManager">
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
            <Box sx={{ display: 'flex', alignItems: 'center', height: '3rem' }}>
               {!isCreatingNewResume ? (
                  <Button
                     disableElevation
                     sx={{ textTransform: 'none' }}
                     variant="contained"
                     size="medium"
                     onClick={() => setIsCreatingNewResume(true)}
                  >
                     New Resume
                  </Button>
               ) : (
                  <Stack direction="row" spacing={2} alignItems="center">
                     <TextField
                        inputProps={{ maxLength: 20 }}
                        placeholder="New Resume"
                        label="Resume name"
                        size="small"
                        type="text"
                        id="newResumeName"
                        value={newResumeName}
                        onChange={(e) => setNewResumeName(e.target.value)}
                     />
                     <Button
                        disableElevation
                        variant="contained"
                        size="medium"
                        onClick={handleCreateNewResume}
                     >
                        Save
                     </Button>
                     <Button
                        disableElevation
                        variant="contained"
                        size="medium"
                        onClick={() => setIsCreatingNewResume(false)}
                     >
                        Close
                     </Button>
                  </Stack>
               )}
            </Box>
         </Box>

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
