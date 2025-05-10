import React, { useState } from 'react';
import NPSModal from './components/NPSModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {isModalOpen && (
        <NPSModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
