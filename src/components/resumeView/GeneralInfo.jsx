function GeneralInfo({ generalInfo }) {
   const info = generalInfo[0]; // Assuming there's only one entry for general info
   return (
      <div>
         <h2>General Information</h2>
         {info && (
            <div>
               {info.fullName && <p>Name: {info.fullName}</p>}
               {info.jobTitle && <p>Job Title: {info.jobTitle}</p>}
               {info.email && <p>Email: {info.email}</p>}
               {info.phone && <p>Phone: {info.phone}</p>}
               {info.address && <p>Address: {info.address}</p>}
            </div>
         )}
      </div>
   );
}

export default GeneralInfo;
