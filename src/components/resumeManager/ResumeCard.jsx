import {
   Card,
   CardContent,
   CardActions,
   Button,
   Grid,
   Typography,
} from '@mui/material';

const styles = {
   container: {
      display: 'flex',
      width: '400px',
   },
   buttons: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      paddingTop: '7px',
   },
};

const ResumeCard = ({ resume, onOpenInEditor, onMakeCopy, onDeleteResume }) => {
   return (
      // <Card sx={{ ...styles.container }}>
      <CardContent>
         <Grid container spacing={2} alignItems="center">
            {/* Thumbnail */}
            <Grid item xs={3}>
               <img
                  src={resume.thumbnail}
                  alt="Resume Thumbnail"
                  style={{ width: '100%' }}
               />
            </Grid>
            {/* Resume Info and Buttons */}
            <Grid item xs={9}>
               <Typography variant="h5" component="h3" gutterBottom>
                  {resume.name}
               </Typography>
               <CardActions sx={styles.buttons}>
                  <Button
                     size="small"
                     onClick={() => onOpenInEditor(resume.id)}
                  >
                     Open in Editor
                  </Button>
                  <Button size="small" onClick={() => onMakeCopy(resume.id)}>
                     Make a Copy
                  </Button>
                  <Button
                     size="small"
                     onClick={() => onDeleteResume(resume.id)}
                  >
                     Delete
                  </Button>
               </CardActions>
            </Grid>
         </Grid>
      </CardContent>
      // </Card>
   );
};

// const ResumeCard = ({ resume, onOpenInEditor, onMakeCopy, onDeleteResume }) => {
//    return (
//       <div style={styles.container}>
//          <img
//             style={styles.image}
//             src={resume.thumbnail}
//             alt="Resume Thumbnail"
//          />

//          <div style={styles.buttons}>
//             <h3 style={styles.resumeTitle}>{resume.name}</h3>

//             <Button size="small" onClick={() => onOpenInEditor(resume.id)}>
//                Open in Editor
//             </Button>
//             <Button size="small" onClick={() => onMakeCopy(resume.id)}>
//                Make a Copy
//             </Button>
//             <Button size="small" onClick={() => onDeleteResume(resume.id)}>
//                Delete
//             </Button>
//          </div>
//       </div>
//    );
// };
// export default ResumeCard;
export default ResumeCard;
