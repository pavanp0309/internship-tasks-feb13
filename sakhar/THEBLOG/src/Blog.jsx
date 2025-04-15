import React from 'react';
import './blog.css';

class Blog extends React.Component {
  render() {
    return (
      <div className="blog-container">
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Getting Started with React" className="blog-thumbnail" />
          <h2 className="blog-title">Getting Started with React</h2>
          <p className="blog-description">Learn the basics of React and how to create your first component</p>
          <p className="blog-author">By: Jane Developer</p>
          <div className="blog-tags">
            <span className="tag">#React</span>
            <span className="tag">#WebDev</span>
            <span className="tag">#Frontend</span>
          </div>
        </div>
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="State Management in 2023" className="blog-thumbnail" />
          <h2 className="blog-title">State Management in 2023</h2>
          <p className="blog-description">Comparing different state management solutions for React applications</p>
          <p className="blog-author">By: John Coder</p>
          <div className="blog-tags">
            <span className="tag">#React</span>
            <span className="tag">#State</span>
            <span className="tag">#Redux</span>
          </div>
        </div>
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="CSS Best Practices" className="blog-thumbnail" />
          <h2 className="blog-title">CSS Best Practices</h2>
          <p className="blog-description">Modern CSS techniques for better maintainability and performance</p>
          <p className="blog-author">By: Sarah Styles</p>
          <div className="blog-tags">
            <span className="tag">#CSS</span>
            <span className="tag">#WebDev</span>
            <span className="tag">#Frontend</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
