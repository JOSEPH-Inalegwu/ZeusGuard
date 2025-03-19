import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './src/Components/TopBar/TopBar';
import Header from './src/Components/Header/Header';
import mobileWarningImage from './crying_face-removebg-preview.png'; 

const Layout = () => {
  return (
    <div className="app-container">
      {/* Mobile message for small screens */}
      <div className="mobile-message hidden flex flex-col items-center justify-center">
        <img 
          src={mobileWarningImage} 
          alt="Warning" 
          className="mb-4 w-1/3 mx-auto"
        />
        <h1 className="text-center text-2xl font-semibold">
          Sorry, this website only works on PC and larger screens.
        </h1>
      </div>
      
      {/* Main content area */}
      <div className="main-content">
        <TopBar />
        <Outlet />
        <Header />
      </div>
    </div>
  );
};

export default Layout;