import React from 'react';
import Home from './Home.jsx';
import Launch from './Launch.jsx';
import Technology from './Technology.jsx';
import Destinations from './Destinations.jsx';

const MainPage = () => {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="launch"><Launch /></div>
      <div id="technology"><Technology /></div>
      <div id="destinations"><Destinations /></div>
    </>
  );
};

export default MainPage;
