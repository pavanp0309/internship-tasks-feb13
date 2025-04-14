import React from 'react';
import CourseCard from './components/CourseCard';

function App() {
  const courses = [
    {
      id: 1,
      title: 'React Basics',
      instructor: 'Mounika',
      duration: '4h 30m',
      level: 'Beginner',
      isEnrolled: true,
      rating: 4.5,
      tags: ['React', 'JavaScript'],
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.pMagUM_70-9KKWi69skDRAHaEK&pid=Api&P=0&h=180',
      discountPrice: 499,
      originalPrice: 1499,
    },
    {
      id: 2,
      title: 'Advanced Java',
      instructor: 'Teja',
      duration: '6h',
      level: 'Advanced',
      isEnrolled: false,
      rating: 4.7,
      tags: ['Java', 'Spring Boot'],
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.je6FoDxt_pM5E_-ETlYIQgHaEK&pid=Api&P=0&h=180',
      discountPrice: null,
      originalPrice: 1999,
    },
    {
      id: 3,
      title: 'CSS Flexbox & Grid',
      instructor: 'Latha',
      duration: '2h 45m',
      level: 'Intermediate',
      isEnrolled: true,
      rating: 4.2,
      tags: ['CSS', 'Responsive Design'],
      thumbnailUrl: 'https://tse3.mm.bing.net/th?id=OIP.6vrUX7jeeSqOfZbBTCr_twHaEj&pid=Api&P=0&h=180',
      discountPrice: 299,
      originalPrice: 999,
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Pavan',
      duration: '7h 15m',
      level: 'Beginner',
      isEnrolled: false,
      rating: 4.8,
      tags: ['Python', 'Data Analysis'],
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.BFhOHcQU2rYiaM-lg9-ATgAAAA&pid=Api&P=0&h=180',
      discountPrice: 599,
      originalPrice: 1799,
    },
    {
      id: 5,
      title: 'Machine Learning A-Z',
      instructor: 'Madhan',
      duration: '10h',
      level: 'Advanced',
      isEnrolled: false,
      rating: 4.9,
      tags: ['ML', 'AI'],
      thumbnailUrl: 'https://tse4.mm.bing.net/th?id=OIP.1t6zNz6gnRfsF2VWXlNw7wHaD_&pid=Api&P=0&h=180',
      discountPrice: 799,
      originalPrice: 1999,
    },
    {
      id: 6,
      title: 'HTML & Web Basics',
      instructor: 'Madhu',
      duration: '3h',
      level: 'Beginner',
      isEnrolled: true,
      rating: 4.0,
      tags: ['HTML', 'Web Dev'],
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.yAK4JLiiybTSkx1qcfmfpQHaD4&pid=Api&P=0&h=180',
      discountPrice: 249,
      originalPrice: 499,
    },
    {
      id: 7,
      title: 'Git & GitHub Masterclass',
      instructor: 'Girija',
      duration: '2h 20m',
      level: 'Intermediate',
      isEnrolled: false,
      rating: 4.6,
      tags: ['Git', 'Version Control'],
      thumbnailUrl: 'https://tse2.mm.bing.net/th?id=OIP.t24-2746u6FKeUdBRBDZxQAAAA&pid=Api&P=0&h=180',
      discountPrice: 349,
      originalPrice: 799,
    },
    {
      id: 8,
      title: 'SQL with MySQL',
      instructor: 'Mahathi',
      duration: '5h',
      level: 'Intermediate',
      isEnrolled: true,
      rating: 4.4,
      tags: ['SQL', 'Database'],
      thumbnailUrl: 'https://tse3.mm.bing.net/th?id=OIP.-TwiKMrMIXBkR2dQ4C7DsgHaEK&pid=Api&P=0&h=180',
      discountPrice: 399,
      originalPrice: 999,
    },
    {
      id: 9,
      title: 'Node.js Essentials',
      instructor: 'Lakshman',
      duration: '4h',
      level: 'Intermediate',
      isEnrolled: false,
      rating: 4.3,
      tags: ['Node.js', 'Backend'],
      thumbnailUrl: 'https://tse4.mm.bing.net/th?id=OIP.26yZeCv-XbRVjeCKCeAidgHaEK&pid=Api&P=0&h=180',
      discountPrice: 599,
      originalPrice: 1299,
    },
    {
      id: 10,
      title: 'Django Web Dev',
      instructor: 'Raji',
      duration: '6h 40m',
      level: 'Advanced',
      isEnrolled: false,
      rating: 4.1,
      tags: ['Python', 'Django'],
      thumbnailUrl: 'https://tse2.mm.bing.net/th?id=OIP.6vHzucI0MGf5TNeq1L3VcAHaD4&pid=Api&P=0&h=180',
      discountPrice: 749,
      originalPrice: 1599,
    },
    {
      id: 11,
      title: 'JavaScript DOM Mastery',
      instructor: 'Chandra',
      duration: '3h 30m',
      level: 'Intermediate',
      isEnrolled: true,
      rating: 4.5,
      tags: ['JavaScript', 'DOM'],
      thumbnailUrl: 'https://tse3.mm.bing.net/th?id=OIP.5A2QlONG-bnvYCWf8O3HigHaEK&pid=Api&P=0&h=180',
      discountPrice: 299,
      originalPrice: 899,
    },
    {
      id: 12,
      title: 'AWS Cloud Fundamentals',
      instructor: 'Bala',
      duration: '5h 50m',
      level: 'Beginner',
      isEnrolled: false,
      rating: 4.6,
      tags: ['AWS', 'Cloud'],
      thumbnailUrl: 'https://tse4.mm.bing.net/th?id=OIP.Y7iM1G1bVpIowkzVlFPmkAHaEc&pid=Api&P=0&h=180',
      discountPrice: 699,
      originalPrice: 1499,
    },
  ];

  return (
    <div className="container mt-4">
      <h2>📚 Our Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
