import { IApiCourse } from '../app/commons/interfaces/ApiCourseInterface';
export const apiCoursesStub: IApiCourse[] = [
    {
        id: 1,
        name: 'Video Course 1. Name tag',
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        isTopRated: true,
        date: '2020-08-28T02:02:36+00:00',
        authors: [
            {
              id: 1370,
              name: 'Polly',
              lastName: 'Sosa'
            }
        ],
        length: 8
    },
    {
        id: 2,
        name: 'Video Course 2. Name tag',
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        isTopRated: false,
        date: '2020-10-30T02:02:24+00:00',
        authors: [
            {
              id: 1370,
              name: 'Polly',
              lastName: 'Sosa'
            }
        ],
        length: 88
    },
    {
        id: 3,
        name: 'Video Course 3. Name tag',
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        isTopRated: false,
        date: '2020-12-31T02:02:12+00:00',
        authors: [
            {
              id: 1370,
              name: 'Polly',
              lastName: 'Sosa'
            }
        ],
        length: 50
    },
];
