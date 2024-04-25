// FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Key Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Real-time Monitoring</h3>
              <p>Get instant updates on your pond's water quality and temperature.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Alert Notifications</h3>
              <p>Receive alerts on your mobile device for any changes in water parameters.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Data Analysis</h3>
              <p>Track trends and analyze historical data to optimize pond management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
