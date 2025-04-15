import free1 from './assets/free1.jpg';
import free2 from './assets/free2.jpg';
import free3 from './assets/free3.jpg';
import free4 from './assets/free4.jpg';

const courses = [
  {
    id: 1,
    thumbnail: free1,
    title: "React for Beginners",
    instructor: "Pavan P",
    duration: "5h 30m",
    level: "Beginner",
    rating: 4.5,
    price: 100,
    discountPrice: 50,
    tags: ["React", "JavaScript", "Frontend"],
    isEnrolled: true
  },
  {
    id: 2,
    thumbnail: free2,
    title: "Advanced Node.js",
    instructor: "Pavan P",
    duration: "8h 15m",
    level: "Advanced",
    rating: 4.8,
    price: 120,
    discountPrice: null,
    tags: ["Node.js", "Backend", "JavaScript"],
    isEnrolled: false
  },
  {
    id: 3,
    thumbnail: free3,
    title: "Python Data Science",
    instructor: "Pavan P",
    duration: "10h 0m",
    level: "Intermediate",
    rating: 4.7,
    price: 150,
    discountPrice: 120,
    tags: ["Python", "Data Science", "Machine Learning"],
    isEnrolled: false
  },
  {
    id: 4,
    thumbnail: free4,
    title: "UI/UX Design Fundamentals",
    instructor: "Pavan P",
    duration: "6h 45m",
    level: "Beginner",
    rating: 4.3,
    price: 90,
    discountPrice: 70,
    tags: ["UI", "UX", "Design"],
    isEnrolled: true
  }
];

export default courses;
