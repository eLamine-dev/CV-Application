import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
   container: {
      marginBottom: 10,
   },
   skillName: {
      fontFamily: 'Lato Bold',
      fontSize: 10,
   },
   proficiency: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
});

const Skills = ({ skillsData }) => (
   <View style={styles.container}>
      <Title>Skills</Title>
      {skillsData.map((skill, index) => (
         <View key={index}>
            {skill.skillName && (
               <Text style={styles.skillName}>
                  Skill Name: {skill.skillName}
               </Text>
            )}
            {skill.proficiency && (
               <Text style={styles.proficiency}>
                  Proficiency: {skill.proficiency}
               </Text>
            )}
         </View>
      ))}
   </View>
);

export default Skills;
