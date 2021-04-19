
// Packages ----------------------------------------------------
import React from "react";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// -------------------------------------------------------------

// Components ----------------------
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";
// ---------------------------------

const App = () => {
  return (
    < >

      <NavBar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/service" component={Service} exact />
        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
      </Switch>
      <Footer/>

    </>
  );
};

export default App;
