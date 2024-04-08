import { Text, View, Link, Image } from '@react-pdf/renderer';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';

const GeneralInfo = ({ generalInfoData }) => {
   const info = generalInfoData[0];

   const styles = {
      container: {
         display: 'flex',
      },
      detailColumn: {
         display: 'flex',
         flexDirection: 'column',
         gap: 3,
         textTransform: 'uppercase',
         fontWeight: 'bold',
      },
      infoItem: {
         fontSize: 10,
         display: 'flex',
         alignItems: 'center',
         gap: 5,
      },
      name: {
         fontSize: 24,
         marginBottom: 5,
      },
      subtitle: {
         fontSize: 16,
         fontWeight: 'bold',

         color: '#1e8fff',
      },
      contactInfo: {
         display: 'grid',
         gap: 4,
         gridTemplateColumns: '1fr 1fr',
      },

      link: {
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
         width: 8,
         height: 8,
         borderRadius: 40,
      },
      icon: {
         fontSize: 10,
         color: '#1e8fff',
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
                  <View style={styles.contactInfo}>
                     {info.phone && (
                        <View style={styles.infoItem}>
                           <PhoneIcon style={styles.icon} />
                           <Text> {info.phone}</Text>
                        </View>
                     )}
                     {info.email && (
                        <View style={styles.infoItem}>
                           <AlternateEmailIcon style={styles.icon} />
                           <Text>{info.email}</Text>
                        </View>
                     )}

                     {info.linkedin && (
                        <View style={styles.infoItem}>
                           <LinkIcon style={styles.icon} />
                           <Text>{info.linkedin}</Text>
                        </View>
                     )}
                     {info.location && (
                        <View style={styles.infoItem}>
                           <LocationOnIcon style={styles.icon} />
                           <Text>{info.location}</Text>
                        </View>
                     )}
                  </View>
               </>
            )}
         </View>
         {/* {info && info.photo && (
            <View style={styles.imageColumn}>
               <Image src={info.photo} style={styles.image} />
            </View>
         )} */}
      </View>
   );
};

export default GeneralInfo;
