import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <NavigationBar></NavigationBar>
      <main>
        <Toaster />
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
