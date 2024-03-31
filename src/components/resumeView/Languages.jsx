import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

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
      <View style={styles.entries}>
         {languagesData.map((language, index) => (
            <View key={index}>
               {language.language && (
                  <Text style={styles.language}>
                     {language.language} - {language.proficiency}
                  </Text>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Languages;
