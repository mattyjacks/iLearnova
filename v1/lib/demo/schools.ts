import { School } from './types';

export const schools: School[] = [
  {
    id: 'school-1',
    name: 'Lincoln High School',
    type: 'Public High School',
    studentsCount: 1247,
    teachersCount: 78,
    coursesOffered: ['math-101', 'science-101', 'english-101', 'art-101']
  },
  {
    id: 'school-2',
    name: 'Riverside Academy',
    type: 'Private School',
    studentsCount: 456,
    teachersCount: 34,
    coursesOffered: ['math-101', 'science-101', 'english-101', 'art-101', 'design-101']
  },
  {
    id: 'school-3',
    name: 'Metropolitan Arts & Design Institute',
    type: 'Specialized School',
    studentsCount: 312,
    teachersCount: 28,
    coursesOffered: ['art-101', 'design-101', 'english-101']
  }
];
