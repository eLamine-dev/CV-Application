import dayjs from 'dayjs';

function Education({ educationData }) {
   return (
      <div>
         <h2>Education</h2>
         {educationData &&
            educationData.length > 0 &&
            educationData.map((education, index) => (
               <div key={index}>
                  {education.degree && <p>Degree: {education.degree}</p>}
                  {education.school && <p>School: {education.school}</p>}
                  {education.startDate && education.endDate && (
                     <p>
                        Duration:{' '}
                        {dayjs(education.startDate).format('DD/MM/YYYY')} -{' '}
                        {dayjs(education.endDate).format('DD/MM/YYYY')}
                     </p>
                  )}
               </div>
            ))}
      </div>
   );
}

export default Education;
