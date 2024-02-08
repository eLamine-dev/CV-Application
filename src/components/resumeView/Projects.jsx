function Projects({ projectsData }) {
   return (
      <div>
         <h2>Projects</h2>
         {projectsData && projectsData.length > 0 ? (
            projectsData.map((project, index) => (
               <div key={index}>
                  <p>Project Name: {project.projectName}</p>
                  <p>Description: {project.description}</p>
                  <p>Project Link: {project.projectLink}</p>
               </div>
            ))
         ) : (
            <p>No projects information available.</p>
         )}
      </div>
   );
}

export default Projects;
