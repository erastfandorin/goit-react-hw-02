import React from 'react';
import Reader from './Reader/Reader';
import publications from './Reader/publications.json';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <Reader publications={publications} />
      <Dashboard />
    </>
  );
};

export default App;
