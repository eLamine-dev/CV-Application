import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
   container: {
      marginBottom: 10,
   },
   position: {
      fontFamily: 'Lato Bold',
      fontSize: 10,
   },
   company: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
   description: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
   duration: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
});

const Experience = ({ experienceData }) => (
   <View style={styles.container}>
      <Title>Experience</Title>
      {experienceData.map((experience, index) => (
         <View key={index}>
            {experience.position && (
               <Text style={styles.position}>
                  Position: {experience.position}
               </Text>
            )}
            {experience.company && (
               <Text style={styles.company}>Company: {experience.company}</Text>
            )}
            {experience.workDescription && (
               <Text style={styles.description}>
                  Description: {experience.workDescription}
               </Text>
            )}
            {experience.startDate && experience.endDate && (
               <Text style={styles.duration}>
                  Duration: {dayjs(experience.startDate).format('DD/MM/YYYY')} -{' '}
                  {dayjs(experience.endDate).format('DD/MM/YYYY')}
               </Text>
            )}
         </View>
      ))}
   </View>
);

export default Experience;
