import React from 'react';
import Blog from './Blog';

const App = () => {
  const blogs = [
    {
      thumbnail: '/vite.svg',
      title: 'Getting Started with React',
      description: 'Learn the basics of React and how to create your first component',
      author: 'Social Developer',
      tags: ['React', 'WebDev', 'Frontend']
    },
    {
      thumbnail: '/vite.svg', 
      title: 'State Management in 2023',
      description: 'Comparing different state management solutions for React applications',
      author: 'Social Coder',
      tags: ['React', 'State', 'Redux']
    },
    {
      thumbnail: '/vite.svg',
      title: 'CSS Best Practices',
      description: 'Modern CSS techniques for better maintainability and performance',
      author: 'Social Styles',
      tags: ['CSS', 'WebDev', 'Frontend']
    }
  ];

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Welcome To My Blog Developers Insight</h1>
      <Blog blogs={blogs} />
    </div>
  );
}

export default App;
