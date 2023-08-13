import React from "react";
import { useAuth } from "../Context/Auth";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const About = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <NavigationBar></NavigationBar>
      <div>
        this is about company
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
