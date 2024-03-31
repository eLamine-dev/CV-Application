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
   degree: {
      fontFamily: 'Lato Bold',
      fontSize: 12,
      marginBottom: 5,
   },
   school: {
      fontFamily: 'Lato',
      fontSize: 10,
      marginBottom: 3,
   },
   duration: {
      fontFamily: 'Lato',
      fontSize: 8,
      fontStyle: 'italic',
   },
});

const Education = ({ educationData }) => (
   <View style={styles.container}>
      <Title>Education</Title>
      <View style={styles.entries}>
         {educationData.map((education, index) => (
            <View style={styles.entry} key={index}>
               {education.degree && (
                  <Text style={styles.degree}>{education.degree}</Text>
               )}
               {education.school && (
                  <Text style={styles.school}>{education.school}</Text>
               )}
               {education.startDate && education.endDate && (
                  <Text style={styles.duration}>
                     {dayjs(education.startDate).format('MMM YYYY')} -{' '}
                     {dayjs(education.endDate).format('MMM YYYY')} |{' '}
                     {education.location}
                  </Text>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Education;
