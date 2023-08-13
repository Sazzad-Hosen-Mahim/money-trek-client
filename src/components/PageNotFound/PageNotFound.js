import React from "react";
import Layout from "../layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className=" h-96">
        <div className="text-3xl">
          <h1 className="my-auto">404 Error</h1>
          <p className="my-auto">Page not found!!!</p>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
