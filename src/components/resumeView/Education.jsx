import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import dayjs from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
      gap: 6,
      flexDirection: 'column',
   },
   degree: {
      fontSize: 16,
      marginBottom: 2,
   },
   school: {
      fontSize: 12,
      fontWeight: 'bold',

      color: '#1e8fff',
   },
   duration: {
      fontSize: 10,
      marginRight: 20,
   },
   location: {
      fontSize: 10,
   },
   icon: {
      marginRight: 5,
      fontSize: 12,
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
               <View
                  style={{
                     color: '#384347',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  {education.startDate && (
                     <>
                        <CalendarMonthIcon style={styles.icon} />
                        <Text style={styles.duration}>
                           {dayjs(education.startDate).format('MM/YYYY')} -{' '}
                           {education.endDate
                              ? dayjs(education.endDate).format('MM/YYYY')
                              : 'Ongoing'}
                        </Text>
                     </>
                  )}
                  {education.location && (
                     <>
                        <LocationOnIcon style={styles.icon} />
                        <Text style={styles.location}>
                           {education.location}
                        </Text>
                     </>
                  )}
               </View>
            </View>
         ))}
      </View>
   </View>
);

export default Education;
