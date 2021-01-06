import { IApiCourse } from '../../app/pages/courses-page/courses/interfaces/ApiCourseInterface';

export const apiCourseStub: IApiCourse = {
    id: 1,
    name: 'Video Course 1. Name tag',
    description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
    date: '2020-08-28T02:02:36+00:00',
    authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa'
        }
    ],
    length: 88
};
