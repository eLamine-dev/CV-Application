const Education = ({ educationData }) => {
   return (
      <div>
         <h2>Education</h2>
         {educationData.map((education) => (
            <div key={education.id}>
               <p>Degree: {education.degree}</p>
               <p>School: {education.school}</p>
               <p>
                  Graduation Year:{' '}
                  {education.graduationYear.toLocaleDateString()}
               </p>
            </div>
         ))}
      </div>
   );
};

export default Education;
