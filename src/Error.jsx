
// Packages --------------------------
import React from "react";
import web from "./images/error3.png";
// -----------------------------------

// Components ------------------
import Common from "./Common";
// -----------------------------

const Error = () => {
  return (
    < >

      <Common
        name="Error 404!"
        title="Page Not Found"
        imgsrc={web}
        visit="/"
        btnName="Go Back"
      />

    </>
  );
};

export default Error;
