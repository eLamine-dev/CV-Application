import dayjs from 'dayjs';

function Projects({ projectsData }) {
   return (
      <div>
         <h2>Projects</h2>
         {projectsData &&
            projectsData.length > 0 &&
            projectsData.map((project, index) => (
               <div key={index}>
                  {project.projectName && (
                     <p>Project Name: {project.projectName}</p>
                  )}
                  {project.description && (
                     <p>Description: {project.description}</p>
                  )}
                  {project.projectLink && (
                     <p>Project Link: {project.projectLink}</p>
                  )}
                  {project.startDate && project.endDate && (
                     <p>
                        Duration:{' '}
                        {dayjs(project.startDate).format('DD/MM/YYYY')} -{' '}
                        {dayjs(project.endDate).format('DD/MM/YYYY')}
                     </p>
                  )}
               </div>
            ))}
      </div>
   );
}

export default Projects;
