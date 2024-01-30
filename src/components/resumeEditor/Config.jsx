import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

const config = {
   'general Info': [
      {
         id: 'fullName',
         component: TextField,
         type: 'text',
         label: 'Full Name',
      },
      { id: 'email', component: TextField, type: 'email', label: 'Email' },
      { id: 'phone', component: TextField, type: 'tel', label: 'Phone' },
      {
         id: 'address',
         component: TextField,
         label: 'Address',
      },
   ],
   education: [
      { id: 'degree', component: TextField, type: 'text', label: 'Degree' },
      { id: 'school', component: TextField, type: 'text', label: 'School' },
      {
         id: 'graduationYear',
         component: TextField,
         type: 'text',
         label: 'Graduation Year',
      },
   ],
   experience: [
      { id: 'position', component: TextField, type: 'text', label: 'Position' },
      { id: 'company', component: TextField, type: 'text', label: 'Company' },
      {
         id: 'workDescription',
         component: TextField,
         label: 'Work Description',
         multiline: true,
      },
   ],
   projects: [
      {
         id: 'projectName',
         component: TextField,
         type: 'text',
         label: 'Project Name',
      },
      {
         id: 'description',
         component: TextField,
         label: 'Project Description',
      },
      {
         id: 'projectLink',
         component: TextField,
         type: 'text',
         label: 'Project Link',
      },
   ],
   skills: [
      {
         id: 'skillName',
         component: TextField,
         type: 'text',
         label: 'Skill Name',
      },
      {
         id: 'proficiency',
         component: Select,
         label: 'Proficiency',
         options: ['Beginner', 'Intermediate', 'Advanced'],
      },
   ],
   languages: [
      { id: 'language', component: TextField, type: 'text', label: 'Language' },
      {
         id: 'proficiency',
         component: Select,
         label: 'Proficiency',
         options: ['Elementary', 'Intermediate', 'Fluent'],
      },
   ],
};

// const config = {
//    'general Info': [
//       { id: 'fullName', type: 'input', label: 'Full Name' },
//       { id: 'email', type: 'input', label: 'Email' },
//       { id: 'phone', type: 'input', label: 'Phone' },
//       { id: 'address', type: 'textarea', label: 'Address' },
//    ],
//    education: [
//       { id: 'degree', type: 'input', label: 'Degree' },
//       { id: 'school', type: 'input', label: 'School' },
//       { id: 'graduationYear', type: 'input', label: 'Graduation Year' },
//    ],
//    experience: [
//       { id: 'position', type: 'input', label: 'Position' },
//       { id: 'company', type: 'input', label: 'Company' },
//       { id: 'workDescription', type: 'textarea', label: 'Work Description' },
//    ],
//    projects: [
//       { id: 'projectName', type: 'input', label: 'Project Name' },
//       { id: 'description', type: 'textarea', label: 'Project Description' },
//       { id: 'projectLink', type: 'input', label: 'Project Link' },
//    ],
//    skills: [
//       { id: 'skillName', type: 'input', label: 'Skill Name' },
//       {
//          id: 'proficiency',
//          type: 'select',
//          label: 'Proficiency',
//          options: ['Beginner', 'Intermediate', 'Advanced'],
//       },
//    ],
//    languages: [
//       { id: 'language', type: 'input', label: 'Language' },
//       {
//          id: 'proficiency',
//          type: 'select',
//          label: 'Proficiency',
//          options: ['Elementary', 'Intermediate', 'Fluent'],
//       },
//    ],
// };

export default config;
