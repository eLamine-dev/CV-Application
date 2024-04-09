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
   document: {
      display: 'flex',
      justifyContent: 'center',
   },
   page: {
      padding: 30,
      fontFamily: 'Lato',
   },
   container: {
      display: 'grid',
      width: 600,
      height: 846,
      gridTemplateColumns: '2fr 1fr',
      gridTemplateRows: 'auto 1fr',
      border: '1px solid black',
      padding: 40,
   },
   header: {
      gridColumn: '1 / 3',
      flexShrink: 0,
      marginBottom: 30,
   },
   leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      gap: 10,
      marginRight: '5%',
   },
   rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      gap: 10,
   },
});

const ResumeView = ({ selectedResume }) => {
   const resume = selectedResume;

   return (
      <Document style={styles.document}>
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
