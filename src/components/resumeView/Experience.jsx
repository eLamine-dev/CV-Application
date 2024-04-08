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
   position: {
      fontSize: 16,
      marginBottom: 2,
   },
   company: {
      fontSize: 12,
      fontWeight: 'bold',

      color: '#1e8fff',
   },
   description: {
      fontSize: 12,
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

const Experience = ({ experienceData }) => (
   <View style={styles.container}>
      <Title>Experience</Title>
      <View style={styles.entries}>
         {experienceData.map((experience, index) => (
            <View style={styles.entry} key={index}>
               {experience.position && (
                  <Text style={styles.position}>{experience.position}</Text>
               )}
               {experience.company && (
                  <Text style={styles.company}>{experience.company}</Text>
               )}
               <View
                  style={{
                     color: '#384347',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  {experience.startDate && experience.endDate && (
                     <>
                        <CalendarMonthIcon style={styles.icon} />
                        <Text style={styles.duration}>
                           {' '}
                           {dayjs(experience.startDate).format(
                              'MM/YYYY'
                           )} - {dayjs(experience.endDate).format('MM/YYYY')}
                        </Text>
                     </>
                  )}
                  {experience.location && (
                     <>
                        <LocationOnIcon style={styles.icon} />
                        <Text style={styles.location}>
                           {experience.location}
                        </Text>
                     </>
                  )}
               </View>
               {experience.workDescription && (
                  <Text style={styles.description}>
                     {experience.workDescription}
                  </Text>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Experience;
