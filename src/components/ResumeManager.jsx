import { useState } from 'react';

function ResumeManager({
   resumes,
   selectedResume,
   onNewResume,
   onSelectResume,
   onDeleteResume,
}) {
   const [newResumeName, setNewResumeName] = useState('');
   const [isCreatingNewResume, setIsCreatingNewResume] = useState(false);

   const handleCreateNewResume = () => {
      if (newResumeName.trim() !== '') {
         onNewResume(newResumeName);
         setNewResumeName('');
         setIsCreatingNewResume(false);
      }
   };

   return (
      <div>
         <h2>Resumes Management</h2>

         <ul>
            {resumes.map((resume) => (
               <li key={resume.id}>
                  <button onClick={() => onSelectResume(resume.id)}>
                     {resume.name}
                  </button>
                  <button onClick={() => onDeleteResume(resume.id)}>
                     Delete
                  </button>
               </li>
            ))}
         </ul>

         {resumes.length === 0 && (
            <p>No resumes available. Create a new one!</p>
         )}
         {selectedResume && (
            <p>
               Currently editing: <strong>{selectedResume.name}</strong>
            </p>
         )}

         {isCreatingNewResume ? (
            <div>
               <label htmlFor="newResumeName">Enter new resume name:</label>
               <input
                  type="text"
                  id="newResumeName"
                  value={newResumeName}
                  onChange={(e) => setNewResumeName(e.target.value)}
               />
               <button onClick={handleCreateNewResume}>
                  Create new resume
               </button>
            </div>
         ) : (
            <button onClick={() => setIsCreatingNewResume(true)}>
               Create New Resume
            </button>
         )}

         <button>Close</button>
      </div>
   );
}

export default ResumeManager;
