const Languages = ({ languagesData }) => {
   return (
      <div>
         <h2>Languages</h2>
         {languagesData.map((language) => (
            <div key={language.id}>
               <p>Language: {language.language}</p>
               <p>Proficiency: {language.proficiency}</p>
            </div>
         ))}
      </div>
   );
};
