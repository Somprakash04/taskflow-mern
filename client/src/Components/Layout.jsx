import React from 'react';
import Navbar from './Navbar';
import './Layout.css'; // Make sure to import the stylesheet

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      {/* A footer could easily be added here later */}
    </div>
  );
};

export default Layout;