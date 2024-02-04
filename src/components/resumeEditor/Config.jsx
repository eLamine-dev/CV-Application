import { TextField, Select } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';

const config = {
   'general info': [
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
         component: DateField,
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
         multiline: true,
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

export default config;
