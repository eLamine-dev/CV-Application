function Languages({ languagesData }) {
   return (
      <div>
         <h2>Languages</h2>
         {languagesData && languagesData.length > 0 ? (
            languagesData.map((language, index) => (
               <div key={index}>
                  <p>Language: {language.language}</p>
                  <p>Proficiency: {language.proficiency}</p>
               </div>
            ))
         ) : (
            <p>No languages information available.</p>
         )}
      </div>
   );
}

export default Languages;
