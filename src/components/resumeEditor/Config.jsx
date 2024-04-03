import { TextField, Select } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';

const config = {
   'general info': [
      {
         id: 'fullName',
         component: TextField,
         type: 'text',
         label: 'Full Name',
         required: true,
      },
      {
         id: 'email',
         component: TextField,
         type: 'email',
         label: 'Email',
         required: true,
      },
      {
         id: 'phone',
         component: TextField,
         type: 'tel',
         label: 'Phone',
         required: true,
      },
      {
         id: 'address',
         component: TextField,
         label: 'Address',
      },
   ],
   education: [
      {
         id: 'degree',
         component: TextField,
         type: 'text',
         label: 'Degree',
         required: true,
      },
      {
         id: 'school',
         component: TextField,
         type: 'text',
         label: 'School',
         required: true,
      },
      {
         id: 'location',
         component: TextField,
         type: 'text',
         label: 'Location',
      },
      {
         id: 'startDate',
         component: DateField,
         label: 'Start Date',
      },
      {
         id: 'endDate',
         component: DateField,
         label: 'End Date',
      },
   ],
   experience: [
      {
         id: 'position',
         component: TextField,
         type: 'text',
         label: 'Position',
         required: true,
      },
      {
         id: 'company',
         component: TextField,
         type: 'text',
         label: 'Company',
         required: true,
      },
      {
         id: 'location',
         component: TextField,
         type: 'text',
         label: 'Location',
      },
      {
         id: 'workDescription',
         component: TextField,
         label: 'Work Description',
         multiline: true,
      },
      {
         id: 'startDate',
         component: DateField,
         label: 'Start Date',
      },
      {
         id: 'endDate',
         component: DateField,
         label: 'End Date',
      },
   ],
   projects: [
      {
         id: 'projectName',
         component: TextField,
         type: 'text',
         label: 'Project Name',
         required: true,
      },
      {
         id: 'description',
         component: TextField,
         multiline: true,
         label: 'Project Description',
         required: true,
      },
      {
         id: 'projectLink',
         component: TextField,
         type: 'text',
         label: 'Project Link',
      },
      {
         id: 'startDate',
         component: DateField,
         label: 'Start Date',
      },
      {
         id: 'endDate',
         component: DateField,
         label: 'End Date',
      },
   ],
   skills: [
      {
         id: 'skillName',
         component: TextField,
         type: 'text',
         label: 'Skill Name',
         required: true,
      },
   ],
   languages: [
      {
         id: 'language',
         component: TextField,
         type: 'text',
         label: 'Language',
         required: true,
      },
      {
         id: 'proficiency',
         component: Select,
         label: 'Proficiency',
         options: ['Elementary', 'Intermediate', 'Fluent'],
      },
   ],
};

export default config;
