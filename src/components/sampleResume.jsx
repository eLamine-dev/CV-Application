const sampleResume = {
   id: 'id01',
   name: 'John Doe',
   generalInfo: [
      { id: 'fullName', value: 'John Doe' },
      { id: 'email', value: 'john.doe@example.com' },
      { id: 'phone', value: '123-456-7890' },
      { id: 'address', value: '123 Main Street, Cityville' },
   ],
   education: [
      {
         id: 1,
         degree: 'Bch Sc. Computer science',
         school: 'University of Example',
         graduationYear: '2022',
      },
   ],
   experience: [
      {
         id: 1,
         position: 'Software Developer',
         company: 'Tech Solutions Inc.',
         workDescription: 'Developed web applications using React and Node.js.',
      },
   ],
   projects: [
      {
         id: 1,
         projectName: 'Portfolio Website',
         description: 'Designed and developed a personal portfolio website.',
         projectLink: 'https://example.com/portfolio',
      },
   ],
   skills: [{ id: 1, skillName: 'JavaScript', proficiency: 'Intermediate' }],
   languages: [{ id: 1, language: 'English', proficiency: 'Fluent' }],
};

export default sampleResume;
