const Projects = ({ projectsData }) => {
   return (
      <div>
         <h2>Projects</h2>
         {projectsData.map((project) => (
            <div key={project.id}>
               <p>Project Name: {project.projectName}</p>
               <p>Description: {project.description}</p>
               <p>
                  Project Link:{' '}
                  <a href={project.projectLink}>{project.projectLink}</a>
               </p>
            </div>
         ))}
      </div>
   );
};

export default Projects;
