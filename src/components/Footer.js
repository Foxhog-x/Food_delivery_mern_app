import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="mb-4 mb-md-0 text-sali">
            © {year} 🍱Food & Food, Inc
          </span>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
