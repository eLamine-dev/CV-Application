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
      color: 'blue',
      flexDirection: 'column',
   },
   entry: {
      display: 'flex',
      flexDirection: 'column',
   },
   position: {
      fontFamily: 'Lato Bold',
      fontSize: 12,
      marginBottom: 5,
   },
   company: {
      fontFamily: 'Lato',
      fontSize: 10,
      marginBottom: 3,
   },
   description: {
      fontFamily: 'Lato',
      fontSize: 10,
      marginBottom: 3,
   },
   duration: {
      fontFamily: 'Lato',
      fontSize: 10,
      fontStyle: 'italic',
   },
});

const Experience = ({ experienceData }) => (
   <View style={styles.container}>
      <Title>Experience</Title>
      <View style={styles.entries}>
         {experienceData.map((experience, index) => (
            <View style={styles.entry} key={index}>
               {experience.position && (
                  <Text style={styles.position}>
                     Position: {experience.position}
                  </Text>
               )}
               {experience.company && (
                  <Text style={styles.company}>
                     Company: {experience.company}
                  </Text>
               )}
               {experience.workDescription && (
                  <Text style={styles.description}>
                     Description: {experience.workDescription}
                  </Text>
               )}
               {experience.startDate && experience.endDate && (
                  <Text style={styles.duration}>
                     Duration:{' '}
                     {dayjs(experience.startDate).format('DD/MM/YYYY')} -{' '}
                     {dayjs(experience.endDate).format('DD/MM/YYYY')}
                  </Text>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Experience;
