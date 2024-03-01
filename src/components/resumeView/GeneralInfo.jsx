import { Text, View, Link } from '@react-pdf/renderer';

const GeneralInfo = ({ generalInfo }) => {
   const info = generalInfo[0];

   const styles = {
      container: {
         flexDirection: 'row',
         borderBottomWidth: 2,
         borderBottomColor: '#112131',
         borderBottomStyle: 'solid',
         alignItems: 'stretch',
      },
      detailColumn: {
         flexDirection: 'column',
         flexGrow: 9,
         textTransform: 'uppercase',
      },
      linkColumn: {
         flexDirection: 'column',
         flexGrow: 2,
         alignSelf: 'flex-end',
         justifySelf: 'flex-end',
      },
      name: {
         fontSize: 24,
         fontFamily: 'Lato Bold',
      },
      subtitle: {
         fontSize: 10,
         justifySelf: 'flex-end',
         fontFamily: 'Lato',
      },
      link: {
         fontFamily: 'Lato',
         fontSize: 10,
         color: 'black',
         textDecoration: 'none',
         alignSelf: 'flex-end',
         justifySelf: 'flex-end',
      },
   };

   return (
      <View style={styles.container}>
         <View style={styles.detailColumn}>
            {info && (
               <>
                  {info.fullName && (
                     <Text style={styles.name}>Name: {info.fullName}</Text>
                  )}
                  {info.jobTitle && (
                     <Text style={styles.subtitle}>
                        Job Title: {info.jobTitle}
                     </Text>
                  )}
                  {info.email && (
                     <Text style={styles.subtitle}>Email: {info.email}</Text>
                  )}
                  {info.phone && (
                     <Text style={styles.subtitle}>Phone: {info.phone}</Text>
                  )}
                  {info.address && (
                     <Text style={styles.subtitle}>
                        Address: {info.address}
                     </Text>
                  )}
               </>
            )}
         </View>
         <View style={styles.linkColumn}>
            {info && info.email && (
               <Link href={`mailto:${info.email}`} style={styles.link}>
                  {info.email}
               </Link>
            )}
         </View>
      </View>
   );
};

export default GeneralInfo;
