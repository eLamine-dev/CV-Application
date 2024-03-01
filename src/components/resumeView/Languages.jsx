import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
   container: {
      marginBottom: 10,
   },
   language: {
      fontFamily: 'Lato Bold',
      fontSize: 10,
   },
   proficiency: {
      fontFamily: 'Lato',
      fontSize: 10,
   },
});

const Languages = ({ languagesData }) => (
   <View style={styles.container}>
      <Title>Languages</Title>
      {languagesData.map((language, index) => (
         <View key={index}>
            {language.language && (
               <Text style={styles.language}>
                  Language: {language.language}
               </Text>
            )}
            {language.proficiency && (
               <Text style={styles.proficiency}>
                  Proficiency: {language.proficiency}
               </Text>
            )}
         </View>
      ))}
   </View>
);

export default Languages;
