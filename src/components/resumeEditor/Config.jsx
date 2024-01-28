const config = {
   'general Info': [
      { id: 'fullName', type: 'input', label: 'Full Name' },
      { id: 'email', type: 'input', label: 'Email' },
      { id: 'phone', type: 'input', label: 'Phone' },
      { id: 'address', type: 'textarea', label: 'Address' },
   ],
   education: [
      { id: 'degree', type: 'input', label: 'Degree' },
      { id: 'school', type: 'input', label: 'School' },
      { id: 'graduationYear', type: 'input', label: 'Graduation Year' },
   ],
   experience: [
      { id: 'position', type: 'input', label: 'Position' },
      { id: 'company', type: 'input', label: 'Company' },
      { id: 'workDescription', type: 'textarea', label: 'Work Description' },
   ],
   projects: [
      { id: 'projectName', type: 'input', label: 'Project Name' },
      { id: 'description', type: 'textarea', label: 'Project Description' },
      { id: 'projectLink', type: 'input', label: 'Project Link' },
   ],
   skills: [
      { id: 'skillName', type: 'input', label: 'Skill Name' },
      {
         id: 'proficiency',
         type: 'select',
         label: 'Proficiency',
         options: ['Beginner', 'Intermediate', 'Advanced'],
      },
   ],
   languages: [
      { id: 'language', type: 'input', label: 'Language' },
      {
         id: 'proficiency',
         type: 'select',
         label: 'Proficiency',
         options: ['Elementary', 'Intermediate', 'Fluent'],
      },
   ],
};

export default config;
