import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   title: {
      fontFamily: 'Lato Bold',
      fontSize: 14,
      marginBottom: 10,
      textTransform: 'uppercase',
      borderBottom: '3px solid black',
      paddingBottom: 7,
      // alignSelf: 'flex-start',
   },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
