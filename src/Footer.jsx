
// Packages ----------------
import React from "react";
// -------------------------

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    < >

      <footer className="bg-light text-center">
        <p> © {year} SoumyoTech. All Rights Reserved | Terms and Conditions </p>
      </footer>

    </>
  );
};

export default Footer;
