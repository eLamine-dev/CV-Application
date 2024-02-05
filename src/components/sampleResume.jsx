const sampleResume = {
   id: 'id01',
   name: 'Sample resume',
   'general info': [
      {
         label: 'general info',
         fullName: 'John Doe',
         jobTitle: 'Software Developer',
         email: 'john.doe@example.com',
         phone: '123-456-7890',
         address: '123 Main Street, City ville',
      },
   ],
   education: [
      {
         id: 'ed01',
         label: 'education',
         degree: 'Bch Sc. Computer science',
         school: 'University of Example',
         graduationYear: new Date('2011-11-11'),
      },
   ],
   experience: [
      {
         id: 'ex01',
         label: 'experience',
         position: 'Software Developer',
         company: 'Tech Solutions Inc.',
         workDescription: 'Developed web applications using React and Node.js.',
      },
   ],
   projects: [
      {
         id: 'pr01',
         label: 'projects',
         projectName: 'Portfolio Website',
         description: 'Designed and developed a personal portfolio website.',
         projectLink: 'https://example.com/portfolio',
      },
   ],
   skills: [
      {
         id: 'sl01',
         label: 'skills',
         skillName: 'JavaScript',
         proficiency: 'Intermediate',
      },
   ],
   languages: [
      {
         id: 'lg01',
         label: 'languages',
         language: 'English',
         proficiency: 'Fluent',
      },
   ],
};

export default sampleResume;
