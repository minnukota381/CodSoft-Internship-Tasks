// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Smart Pond Monitoring</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-end">
              <li className="mx-2"><a href="#" className="text-white">Facebook</a></li>
              <li className="mx-2"><a href="#" className="text-white">Twitter</a></li>
              <li className="mx-2"><a href="#" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
