import React from 'react';

function FooterCTA() {
  return (
    <footer className="text-center p-5 bg-dark text-white">
      <h4>Ready to Level Up Your Study Game?</h4>
      <p>Sign up for updates and stay ahead!</p>
      <form className="d-flex justify-content-center gap-2 mt-3">
        <input type="email" className="form-control w-25" placeholder="Enter your email" />
        <button className="btn btn-warning">Subscribe</button>
      </form>
      <div className="mt-4">
        <i className="bi bi-twitter mx-2"></i>
        <i className="bi bi-facebook mx-2"></i>
        <i className="bi bi-instagram mx-2"></i>
      </div>
    </footer>
  );
}

export default FooterCTA;
