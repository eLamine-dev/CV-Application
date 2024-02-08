function Skills({ skillsData }) {
   return (
      <div>
         <h2>Skills</h2>
         {skillsData && skillsData.length > 0 ? (
            skillsData.map((skill, index) => (
               <div key={index}>
                  <p>Skill Name: {skill.skillName}</p>
                  <p>Proficiency: {skill.proficiency}</p>
               </div>
            ))
         ) : (
            <p>No skills information available.</p>
         )}
      </div>
   );
}

export default Skills;
