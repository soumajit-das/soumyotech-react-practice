
// Packages --------------------------
import React from "react";
import web from "./images/img2.png";
// -----------------------------------

// Components ------------------
import Common from "./Common";
// -----------------------------

const About = () => {
  return (
    < >

      <Common
        name="Welcome to About Page"
        title="We are the team of talented developers making websites"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now"
      />

    </>
  );
};

export default About;
