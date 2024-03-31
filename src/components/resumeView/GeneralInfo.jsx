import { Text, View, Link, Image } from '@react-pdf/renderer';

const GeneralInfo = ({ generalInfoData }) => {
   const info = generalInfoData[0];

   const styles = {
      container: {
         flexDirection: 'row',
         borderBottomWidth: 2,
         borderBottomColor: '#112131',
         borderBottomStyle: 'solid',
         alignItems: 'stretch',
      },
      detailColumn: {
         display: 'flex',
         flexDirection: 'column',
         flexGrow: 9,
         textTransform: 'uppercase',
      },
      infoItem: {
         fontSize: 10,
         fontFamily: 'Lato',
      },
      name: {
         fontSize: 24,
         fontFamily: 'Lato Bold',
         marginBottom: 10,
      },
      subtitle: {
         fontSize: 14,
         fontFamily: 'Lato',
      },
      link: {
         fontFamily: 'Lato',
         fontSize: 10,
         color: 'black',
         textDecoration: 'none',
      },
      imageColumn: {
         flexDirection: 'column',
         flexGrow: 1,
         alignItems: 'center',
         justifyContent: 'center',
      },
      image: {
         width: 80,
         height: 80,
         borderRadius: 40,
      },
   };

   return (
      <View style={styles.container}>
         <View style={styles.detailColumn}>
            {info && (
               <>
                  {info.fullName && (
                     <Text style={styles.name}>{info.fullName}</Text>
                  )}
                  {info.jobTitle && (
                     <Text style={styles.subtitle}>{info.jobTitle}</Text>
                  )}
                  <View>
                     {info.phone && (
                        <Text style={styles.infoItem}>Phone: {info.phone}</Text>
                     )}
                     {info.email && (
                        <Text style={styles.infoItem}>Email: {info.email}</Text>
                     )}
                  </View>
                  <View>
                     {info.linkedin && (
                        <Text style={styles.infoItem}>
                           LinkedIn: {info.linkedin}
                        </Text>
                     )}
                     {info.location && (
                        <Text style={styles.infoItem}>
                           Location: {info.location}
                        </Text>
                     )}
                  </View>
               </>
            )}
         </View>
         {info && info.photo && (
            <View style={styles.imageColumn}>
               <Image src={info.photo} style={styles.image} />
            </View>
         )}
      </View>
   );
};

export default GeneralInfo;
