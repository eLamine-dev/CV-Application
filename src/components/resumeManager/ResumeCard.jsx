import React, { useState } from 'react';
import {
   Card,
   CardContent,
   CardActions,
   Button,
   Grid,
   Typography,
   CardMedia,
   TextField,
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import thumbnail from '../../assets/images/thumbnail.png';
import EditIcon from '@mui/icons-material/Edit';
import { Edit } from '@mui/icons-material';

const styles = {
   container: {
      width: '420px',
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
      WrapText: 'break-word',
      mb: 1,
      mt: 1,
      ml: 1,
   },

   button: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '0.8rem',
   },
   textField: {
      fontSize: '1rem',
      fontWeight: 'bold',
      width: '100%',
   },
};

const ResumeCard = ({ resume, onOpenInEditor, onMakeCopy, onDeleteResume }) => {
   return (
      <Card sx={{ boxShadow: 0 }}>
         <CardContent>
            <Grid
               spacing={4}
               sx={{ ...styles.container }}
               container
               alignItems="start"
            >
               <Grid item xs={5}>
                  <CardMedia
                     sx={styles.img}
                     component="img"
                     image={resume.thumbnail || thumbnail}
                     alt="Resume Thumbnail"
                  />
               </Grid>

               <Grid item xs={7}>
                  <CardActions sx={styles.buttons}>
                     <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={styles.resumeName}
                     >
                        {resume['general info'][0].name}
                     </Typography>

                     <Button
                        sx={styles.button}
                        size="small"
                        onClick={() => onOpenInEditor(resume.id)}
                        startIcon={<EditNoteOutlinedIcon />}
                     >
                        Open in Editor
                     </Button>
                     <Button
                        sx={styles.button}
                        size="small"
                        onClick={() => onMakeCopy(resume.id)}
                        startIcon={<ContentCopyOutlinedIcon />}
                     >
                        Make a Copy
                     </Button>
                     <Button
                        sx={styles.button}
                        startIcon={<DeleteOutlineOutlinedIcon />}
                        size="small"
                        onClick={() => onDeleteResume(resume.id)}
                     >
                        Delete
                     </Button>
                  </CardActions>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   );
};

export default ResumeCard;
