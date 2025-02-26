import React from 'react';
import "../styles/Partner.css"

const PartnersSlider = () => {
  const partners = [
    '/partner-logo/cisco.png',
    '/partner-logo/hp.png',
    '/partner-logo/dell.png',
    '/partner-logo/lenovo.png',
    '/partner-logo/fortinet.png',
    '/partner-logo/hitachi.png',
    '/partner-logo/huawei.png',
    '/partner-logo/palo-alto.png',
    '/partner-logo/trellix.png',
    '/partner-logo/redhat.png',
    '/partner-logo/oracle.png',
    '/partner-logo/microsoft.png',
  ];

  return (
    <div className="partners-slider">
      <h3>Our Partners</h3>
      <div className="slider-track">
        {partners.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index}`} className="partner-logo" />
        ))}
        {partners.map((logo, index) => (
          // Repeat logos to create the infinite scroll effect
          <img key={`duplicate-${index}`} src={logo} alt={`Partner ${index}`} className="partner-logo" />
        ))}
      </div>
    </div>
  );
};

export default PartnersSlider;
