import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
   container: {
      marginBottom: 10,
   },
   school: {
      fontFamily: 'Lato Bold',
      fontSize: 10,
   },
   degree: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
   duration: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
});

const Education = ({ educationData }) => (
   <View style={styles.container}>
      <Title>Education</Title>
      {educationData.map((education, index) => (
         <View key={index}>
            {education.degree && (
               <Text style={styles.degree}>Degree: {education.degree}</Text>
            )}
            {education.school && (
               <Text style={styles.school}>School: {education.school}</Text>
            )}
            {education.startDate && education.endDate && (
               <Text style={styles.duration}>
                  Duration: {dayjs(education.startDate).format('DD/MM/YYYY')} -{' '}
                  {dayjs(education.endDate).format('DD/MM/YYYY')}
               </Text>
            )}
         </View>
      ))}
   </View>
);

export default Education;
