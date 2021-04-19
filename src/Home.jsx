
// Packages --------------------------
import React from "react";
import web from "./images/img5.jpg";
// -----------------------------------

// Components ------------------
import Common from "./Common";
// -----------------------------

const Home = () => {
  return (
    < >

      <Common
        name="Grow Your Business with"
        title="We are the team of talented developers making websites"
        imgsrc={web}
        visit="/service"
        btnName="Get Started"
      />

    </>
  );
};

export default Home;
