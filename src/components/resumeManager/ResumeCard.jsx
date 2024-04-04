import {
   Card,
   CardContent,
   CardActions,
   Button,
   Grid,
   Typography,
   CardMedia,
} from '@mui/material';
import thumbnail from '../../assets/images/thumbnail.png';

const styles = {
   container: {
      width: '400px',
      spacing: '10px',
   },
   buttons: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      width: '100%',
   },

   img: {
      width: '150px',
      boxShadow:
         '0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px 1px rgba(9, 30, 66, 0.13)',
      borderRadius: 1,
   },
   resumeName: {
      fontSize: '1rem',
      fontWeight: 'bold',
      mb: 1,
      mt: 1,
   },
};

const ResumeCard = ({ resume, onOpenInEditor, onMakeCopy, onDeleteResume }) => {
   return (
      <Card sx={{ boxShadow: 0 }}>
         <CardContent>
            <Grid sx={{ ...styles.container }} container alignItems="start">
               <Grid item xs={5}>
                  <CardMedia
                     sx={styles.img}
                     component="img"
                     image={resume.thumbnail || thumbnail}
                     alt="Resume Thumbnail"
                  />
               </Grid>

               <Grid item>
                  <CardActions sx={styles.buttons}>
                     <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={styles.resumeName}
                     >
                        {resume.name}
                     </Typography>
                     <button
                        size="small"
                        onClick={() => onOpenInEditor(resume.id)}
                     >
                        Open in Editor
                     </button>
                     <button size="small" onClick={() => onMakeCopy(resume.id)}>
                        Make a Copy
                     </button>
                     <button
                        size="small"
                        onClick={() => onDeleteResume(resume.id)}
                     >
                        Delete
                     </button>
                  </CardActions>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
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
