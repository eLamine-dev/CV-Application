import dayjs from 'dayjs';

const sampleResume = {
   id: 'id01',

   'general info': [
      {
         id: 'gi01',
         name: 'Sample resume',
         fullName: 'John Doe',
         jobTitle: 'Software Developer',
         email: 'john.doe@example.com',
         phone: '123-456-7890',
         location: 'City ville, USA',
         link: 'https://www.linkedin.com/John-Doe',
      },
   ],

   education: [
      {
         id: 'ed01',
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
         position: 'Senior Software Developer',
         company: 'Tech Solutions B',
         location: 'Example ville, USA',
         workDescription:
            'Led the frontend development team *With my team, developed and maintained 3 high-traffic websites, > 5 mln. monthly unique users on each of them. *Was responsible for mentoring, day-to-day supervision of 3 front-end developers *Collaborated with UX designers to implement user-friendly interfaces that improved user engagement & conversion rates and drove millions of additional revenue.',
         startDate: dayjs('2011-11-11'),
         endDate: dayjs('2015-05-05'),
      },
      {
         id: 'ex01',
         position: 'Software Developer',
         company: 'Tech Solutions B',
         location: 'Example ville, USA',
         workDescription:
            'Worked on various web development projects *Contributed to the development of 20+ websites *Reduced page load time on 10 client websites by 30% through a number of optimization techniques. Became the company expert on load time, web vitals. *Implemented responsive design for improved mobile experience in client project that won an UX awards by the Lion Foundation.',
         startDate: dayjs('2011-11-11'),
         endDate: dayjs('2015-05-05'),
      },
      {
         id: 'ex01',
         position: 'Junior Software Developer',
         company: 'Tech Solutions A.',
         location: 'Example ville, USA',
         workDescription:
            'Assisted in the development of web applications *Worked on 22 web development projects *Improved website accessibility following WCAG guidelines *Received Rising Star award for outstanding performance',
         startDate: dayjs('2011-11-11'),
         endDate: dayjs('2015-05-05'),
      },
   ],

   projects: [
      {
         id: 'pr01',
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
         skillName: 'JavaScript',
      },
   ],
   languages: [
      {
         id: 'lg01',
         language: 'English',
         proficiency: 'Native',
      },
   ],
};

export default sampleResume;
