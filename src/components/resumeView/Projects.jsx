import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import dayjs from 'dayjs';
import Link from '@mui/material/Link';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 10,
   },
   entries: {
      display: 'flex',
      flexDirection: 'column',
   },
   entry: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 10,
      gap: 6,
   },
   projectName: {
      fontSize: 16,
      marginBottom: 2,
   },
   description: {
      fontSize: 12,
   },
   projectLink: {
      fontSize: 10,
      color: '#384347',
      textDecoration: 'none',
   },
   duration: {
      fontSize: 10,
      marginRight: 20,
   },
   icon: {
      marginRight: 5,
      fontSize: 12,
   },
   infoWithIcon: {
      color: '#384347',
      display: 'flex',
      alignItems: 'center',
   },
});

const Projects = ({ projectsData }) => (
   <View style={styles.container}>
      <Title>Projects</Title>
      <View style={styles.entries}>
         {projectsData.map((project, index) => (
            <View style={styles.entry} key={index}>
               {project.projectName && (
                  <Text style={styles.projectName}>{project.projectName}</Text>
               )}
               {project.startDate && (
                  <View style={styles.infoWithIcon}>
                     <CalendarMonthIcon style={styles.icon} />
                     <Text style={styles.duration}>
                        {dayjs(project.startDate).format('MM/YYYY')} -{' '}
                        {project.endDate
                           ? dayjs(project.endDate).format('MM/YYYY')
                           : 'Ongoing'}
                     </Text>
                  </View>
               )}
               {project.projectLink && (
                  <View style={styles.infoWithIcon}>
                     <LinkIcon style={styles.icon} />
                     <Link
                        href={project.projectLink}
                        style={styles.projectLink}
                     >
                        {project.projectLink}
                     </Link>
                  </View>
               )}
               {project.description && (
                  <Text style={styles.description}>{project.description}</Text>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Projects;
