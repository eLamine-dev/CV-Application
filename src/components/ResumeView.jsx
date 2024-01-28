// import GeneralInfo from './resumeView/GeneralInfo';
// import Education from './resumeView/Education';
// import Experience from './resumeView/Experience';
// import Projects from './resumeView/Projects';
// import Skills from './resumeView/Skills.jsx';
// import Languages from './resumeView/Languages';

function ResumeView({ selectedResume }) {
   if (!selectedResume) {
      return <div>Select a resume to view</div>;
   }

   return (
      <div>
         <GeneralInfo generalInfo={selectedResume.generalInfo} />
         <Education educationData={selectedResume.education || []} />
         <Experience experienceData={selectedResume.experience || []} />
         <Projects projectsData={selectedResume.projects || []} />
         <Skills skillsData={selectedResume.skills || []} />
         <Languages languagesData={selectedResume.languages || []} />
      </div>
   );
}

export default ResumeView;
