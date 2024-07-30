import React from 'react';
import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
        <p className="mt-4 text-lg">This is the homepage content.</p>
      </div>
    </>
  );
};

export default HomePage;
