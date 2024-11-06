import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

export default function Join() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7rxxlyu', 'template_fp2i9nf', form.current, '5kdcZ7N3x1l3aXxm1')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        {/* Attach form ref here */}
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="text" name="user-email" placeholder="Enter your email" />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}
