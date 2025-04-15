import React from 'react';
import JobCard from './components/JobCard';

function App() {
  const job = {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechWorld Inc.',
    location: 'Remote',
    type: 'Full-Time',
    salaryRange: '8-12 LPA',
    postedDate: '2025-04-13',
    isBookmarked: false,
    skillsRequired: ['React', 'Tailwind CSS', 'Git'],
    isHotJob: true
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '1rem' }}>Job Portal</h1>
      <JobCard {...job} />
    </div>
  );
}

export default App;
