function Education({ educationData }) {
   return (
      <div>
         <h2>Education</h2>
         {educationData && educationData.length > 0 ? (
            educationData.map((education, index) => (
               <div key={index}>
                  <p>Degree: {education.degree}</p>
                  <p>School: {education.school}</p>
                  <p>Graduation Year: {education.graduationYear}</p>
               </div>
            ))
         ) : (
            <p>No education information available.</p>
         )}
      </div>
   );
}

export default Education;
