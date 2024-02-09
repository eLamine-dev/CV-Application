function Skills({ skillsData }) {
   return (
      <div>
         <h2>Skills</h2>
         {skillsData &&
            skillsData.length > 0 &&
            skillsData.map((skill, index) => (
               <div key={index}>
                  {skill.skillName && <p>Skill Name: {skill.skillName}</p>}
                  {skill.proficiency && <p>Proficiency: {skill.proficiency}</p>}
               </div>
            ))}
      </div>
   );
}

export default Skills;
