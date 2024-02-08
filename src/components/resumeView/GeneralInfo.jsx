function GeneralInfo({ generalInfo }) {
   const info = generalInfo[0]; // Assuming there's only one entry for general info
   return (
      <div>
         <h2>General Information</h2>
         <p>Name: {info.fullName}</p>
         <p>Job Title: {info.jobTitle}</p>
         <p>Email: {info.email}</p>
         <p>Phone: {info.phone}</p>
         <p>Address: {info.address}</p>
      </div>
   );
}

export default GeneralInfo;
