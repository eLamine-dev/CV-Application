const Skills = ({ skillsData }) => {
   return (
      <div>
         <h2>Skills</h2>
         {skillsData.map((skill) => (
            <div key={skill.id}>
               <p>Skill Name: {skill.skillName}</p>
               <p>Proficiency: {skill.proficiency}</p>
            </div>
         ))}
      </div>
   );
};
