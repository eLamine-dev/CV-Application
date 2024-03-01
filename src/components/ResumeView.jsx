import GeneralInfo from './resumeView/GeneralInfo';
import Education from './resumeView/Education';
import Experience from './resumeView/Experience';
import Projects from './resumeView/Projects';
import Skills from './resumeView/Skills.jsx';
import Languages from './resumeView/Languages';
import sampleResume from './sampleResume.jsx';
import {
   Text,
   View,
   Page,
   StyleSheet,
   Image,
   Document,
   Font,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
   page: {
      padding: 30,
   },
   container: {
      display: 'flex',
      width: '900px',
      backgroundColor: 'white',
      flexGrow: '1',
      flexDirection: 'row',
      '@media max-width: 400': {
         flexDirection: 'column',
      },
   },
   image: {
      marginBottom: 10,
   },
   leftColumn: {
      flexDirection: 'column',
      width: 170,
      paddingTop: 30,
      paddingRight: 15,
      '@media max-width: 400': {
         width: '100%',
         paddingRight: 0,
      },
      '@media orientation: landscape': {
         width: 200,
      },
   },
   footer: {
      fontSize: 12,
      fontFamily: 'Lato Bold',
      textAlign: 'center',
      marginTop: 15,
      paddingTop: 5,
      borderWidth: 3,
      borderColor: 'gray',
      borderStyle: 'dashed',
      '@media orientation: landscape': {
         marginTop: 10,
      },
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
      <Document
         author="Your Name"
         keywords="resume"
         subject="Resume"
         title="Resume"
      >
         <Page size="A4" style={styles.page}>
            <View style={styles.container}>
               <View style={styles.leftColumn}>
                  <Image
                     src="https://react-pdf.org/static/images/luke.jpg"
                     style={styles.image}
                  />
                  <GeneralInfo generalInfo={resume['general info']} />
                  <Education educationData={resume.education || []} />
                  <Skills skillsData={resume.skills || []} />
               </View>
               <Experience experienceData={resume.experience || []} />
               <Projects projectsData={resume.projects || []} />
               <Languages languagesData={resume.languages || []} />
            </View>
         </Page>
      </Document>
   );
};

export default ResumeView;
