function Languages({ languagesData }) {
   return (
      <div>
         <h2>Languages</h2>
         {languagesData &&
            languagesData.length > 0 &&
            languagesData.map((language, index) => (
               <div key={index}>
                  {language.language && <p>Language: {language.language}</p>}
                  {language.proficiency && (
                     <p>Proficiency: {language.proficiency}</p>
                  )}
               </div>
            ))}
      </div>
   );
}

export default Languages;
