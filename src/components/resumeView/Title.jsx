import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
      textTransform: 'uppercase',
      borderBottom: '3px solid black',
      paddingBottom: 3,
   },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
