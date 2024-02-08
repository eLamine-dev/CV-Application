const Experience = ({ experienceData }) => {
   return (
      <div>
         <h2>Experience</h2>
         {experienceData.map((experience) => (
            <div key={experience.id}>
               <p>Position: {experience.position}</p>
               <p>Company: {experience.company}</p>
               <p>Work Description: {experience.workDescription}</p>
            </div>
         ))}
      </div>
   );
};

export default Experience;
