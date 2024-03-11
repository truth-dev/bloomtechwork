import React from 'react';
import '../style.css';

export default function Contact() {

  const emailAddress = 'snowypeaksfab@yahoo.com';
  const subject = 'Question about your services';
  const body ='Hello, I have a question about your services.';

  const mailToUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <a href={mailToUrl} className="cta-button">Email Us</a>
    </section>
  );
}

