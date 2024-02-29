import GeneralInfo from './resumeView/GeneralInfo';
import Education from './resumeView/Education';
import Experience from './resumeView/Experience';
import Projects from './resumeView/Projects';
import Skills from './resumeView/Skills.jsx';
import Languages from './resumeView/Languages';
import sampleResume from './sampleResume.jsx';

function ResumeView({ selectedResume }) {
   const resume = selectedResume || sampleResume;

   return (
      <div className="ResumeView">
         <GeneralInfo generalInfo={resume['general info']} />
         <Education educationData={resume.education || []} />
         <Experience experienceData={resume.experience || []} />
         <Projects projectsData={resume.projects || []} />
         <Skills skillsData={resume.skills || []} />
         <Languages languagesData={resume.languages || []} />
      </div>
   );
}

export default ResumeView;
