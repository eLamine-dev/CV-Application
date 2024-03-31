import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import dayjs from 'dayjs';

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
   },
   projectName: {
      fontFamily: 'Lato Bold',
      fontSize: 10,
   },
   description: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
   projectLink: {
      fontFamily: 'Lato',
      fontSize: 10,
      color: 'blue',
      textDecoration: 'underline',
   },
   duration: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
});

const Projects = ({ projectsData }) => (
   <View style={styles.container}>
      <Title>Projects</Title>
      <View style={styles.entries}>
         {projectsData.map((project, index) => (
            <View style={styles.entry} key={index}>
               {project.projectName && (
                  <Text style={styles.projectName}>
                     Project Name: {project.projectName}
                  </Text>
               )}
               {project.description && (
                  <Text style={styles.description}>
                     Description: {project.description}
                  </Text>
               )}
               {project.projectLink && (
                  <Text style={styles.projectLink}>
                     Project Link: {project.projectLink}
                  </Text>
               )}
               {project.startDate && project.endDate && (
                  <Text style={styles.duration}>
                     Duration: {dayjs(project.startDate).format('DD/MM/YYYY')} -{' '}
                     {dayjs(project.endDate).format('DD/MM/YYYY')}
                  </Text>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Projects;
