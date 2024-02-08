function Experience({ experienceData }) {
   return (
      <div>
         <h2>Experience</h2>
         {experienceData && experienceData.length > 0 ? (
            experienceData.map((experience, index) => (
               <div key={index}>
                  <p>Position: {experience.position}</p>
                  <p>Company: {experience.company}</p>
                  <p>Description: {experience.workDescription}</p>
               </div>
            ))
         ) : (
            <p>No experience information available.</p>
         )}
      </div>
   );
}

export default Experience;
