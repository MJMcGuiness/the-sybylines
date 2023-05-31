import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span>SimpleRecipes</span> Build with{" "}
        <a href="https://www.gasbyjs.com/">Gatsby</a>
      </p>
    </footer>
  );
};

export default Footer;
