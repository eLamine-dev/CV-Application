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
      fontSize: 12,
      fontWeight: 'bold',
      marginRight: 30,
   },
   proficiency: {
      fontSize: 12,
   },
});

const Languages = ({ languagesData }) => (
   <View style={styles.container}>
      <Title>Languages</Title>
      <View style={styles.entries}>
         {languagesData.map((language, index) => (
            <View key={index}>
               {language.language && (
                  <>
                     <Text style={styles.language}>{language.language}</Text>
                     <Text style={styles.proficiency}>
                        {language.proficiency}
                     </Text>
                  </>
               )}
            </View>
         ))}
      </View>
   </View>
);

export default Languages;
