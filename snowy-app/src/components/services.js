import React from 'react';
import '../style.css'

function Services() {
  const services = [
    { id: 1, name: 'Truck 3/4" lift', description: 'Lifting' },
    { id: 2, name: 'Custom Roll-Cages', description: 'bending and crafting roll cages, kit ship **Self installation required** **Welding required**' },
    { id: 3, name: 'Service 3', description: 'Description 3' },
  ]
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;