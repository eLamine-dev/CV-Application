import {
   Text,
   View,
   Page,
   StyleSheet,
   Image,
   Document,
   Font,
} from '@react-pdf/renderer';
import GeneralInfo from './resumeView/GeneralInfo';
import Education from './resumeView/Education';
import Experience from './resumeView/Experience';
import Projects from './resumeView/Projects';
import Skills from './resumeView/Skills';
import Languages from './resumeView/Languages';

const styles = StyleSheet.create({
   page: {
      padding: 30,
   },
   container: {
      display: 'flex',
      width: '900px',
      gridTemplateColumns: '2fr 1fr',
      backgroundColor: 'white',
      flexWrap: 'wrap',
   },
   header: {
      width: '100%',
      marginBottom: 20,
   },
   leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      marginRight: '5%',
   },
   rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '35%',
   },
   image: {
      marginBottom: 10,
      width: '100%',
   },
   generalInfoContainer: {
      fontSize: 12,
      fontFamily: 'Lato',
      marginBottom: 20,
   },
});

Font.register({
   family: 'Open Sans',
   src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
   family: 'Lato',
   src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
   family: 'Lato Italic',
   src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
   family: 'Lato Bold',
   src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const ResumeView = ({ selectedResume }) => {
   const resume = selectedResume || sampleResume;

   return (
      <Document>
         <Page size="A4" style={styles.page}>
            <View style={styles.container}>
               <View style={styles.header}>
                  <GeneralInfo generalInfoData={resume['general info'] || []} />
               </View>
               <View style={styles.leftColumn}>
                  <Experience experienceData={resume.experience || []} />
                  <Education educationData={resume.education || []} />
               </View>
               <View style={styles.rightColumn}>
                  <Projects projectsData={resume.projects || []} />
                  <Skills skillsData={resume.skills || []} />
                  <Languages languagesData={resume.languages || []} />
               </View>
            </View>
         </Page>
      </Document>
   );
};

export default ResumeView;
