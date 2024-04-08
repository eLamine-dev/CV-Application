import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 10,
   },
   entries: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
   },
   entry: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 4,
      border: '1px solid grey',
   },
   skillName: {
      fontWeight: 'bold',
      fontSize: 12,
   },
});

const Skills = ({ skillsData }) => (
   <View style={styles.container}>
      <Title>Skills</Title>
      <View style={styles.entries}>
         {skillsData.map((skill, index) => (
            <View style={styles.entry} key={index}>
               {skill.skillName && (
                  <Text style={styles.skillName}>{skill.skillName}</Text>
               )}
               {/* {skill.proficiency && (
                  <Text style={styles.proficiency}>
                     Proficiency: {skill.proficiency}
                  </Text>
               )} */}
            </View>
         ))}
      </View>
   </View>
);

export default Skills;
