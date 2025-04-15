// App.js
import React from 'react';
import BlogList from './components/BlogList';

const posts = [
  {
    thumbnail: '/src/assets/b1.jpeg',
    title: 'Understanding React',
    snippet: 'A quick dive into the world of React and its component-based architecture...',
    author: 'John Doe',
    tags: ['#React', '#JavaScript'],
  },
  {
    thumbnail: '/src/assets/b2.jpeg',
    title: 'CSS Grid vs Flexbox',
    snippet: 'A comparison of two popular layout techniques in modern web development...',
    author: 'Jane Smith',
    tags: ['#CSS', '#WebDev'],
  },
  {
    thumbnail: '/src/assets/b3.jpeg',
    title: 'Introduction to Node.js',
    snippet: 'Learn the basics of Node.js and how to build scalable server-side applications...',
    author: 'Alice Brown',
    tags: ['#NodeJS', '#Backend'],
  },
];

const App = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Blog Posts</h1>
      <BlogList posts={posts} />
    </>
  );
};

export default App;
