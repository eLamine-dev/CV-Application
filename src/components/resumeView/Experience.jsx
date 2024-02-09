import dayjs from 'dayjs';

function Experience({ experienceData }) {
   return (
      <div>
         <h2>Experience</h2>
         {experienceData &&
            experienceData.length > 0 &&
            experienceData.map((experience, index) => (
               <div key={index}>
                  {experience.position && (
                     <p>Position: {experience.position}</p>
                  )}
                  {experience.company && <p>Company: {experience.company}</p>}
                  {experience.workDescription && (
                     <p>Description: {experience.workDescription}</p>
                  )}
                  {experience.startDate && experience.endDate && (
                     <p>
                        Duration:{' '}
                        {dayjs(experience.startDate).format('DD/MM/YYYY')} -{' '}
                        {dayjs(experience.endDate).format('DD/MM/YYYY')}
                     </p>
                  )}
               </div>
            ))}
      </div>
   );
}

export default Experience;
