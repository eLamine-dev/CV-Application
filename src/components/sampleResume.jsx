import dayjs from 'dayjs';

const sampleResume = {
   id: 'id01',
   name: 'Sample resume',
   'general info': [
      {
         id: 'gi01',
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
         location: 'Example ville, USA',
         startDate: dayjs('2011-11-11'),
         endDate: dayjs('2015-05-05'),
      },
   ],
   experience: [
      {
         id: 'ex01',
         label: 'experience',
         position: 'Software Developer',
         company: 'Tech Solutions Inc.',
         location: 'Example ville, USA',
         workDescription: 'Developed web applications using React and Node.js.',
         startDate: dayjs('2011-11-11'),
         endDate: dayjs('2015-05-05'),
      },
   ],
   projects: [
      {
         id: 'pr01',
         label: 'projects',
         projectName: 'Portfolio Website',
         description: 'Designed and developed a personal portfolio website.',
         projectLink: 'https://example.com/portfolio',
         startDate: dayjs('2011-11-11'),
         endDate: dayjs('2015-05-05'),
      },
   ],
   skills: [
      {
         id: 'sl01',
         label: 'skills',
         skillName: 'JavaScript',
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
