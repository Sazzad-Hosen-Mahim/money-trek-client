import React from "react";
import Layout from "../../layout/Layout";
import "./ServiceNew.css";
import { BsCheckCircleFill } from "react-icons/bs";
import img1 from "../../../assets/our-service/our-service.svg";

const ServiceNew = () => {
  return (
    <Layout title={"About Us - Money trek"}>
      <>
        <div className="service-container grid grid-cols-2 gap-52 pt-32 pb-32">
          <div className="ms-20">
            <img src={img1} alt="service" />
          </div>
          <div>
            <p
              style={{ maxWidth: 400 }}
              className="text-6xl font-semibold leading-tight"
            >
              Our Featured Service that We Provide
            </p>
            <p className="service-text font-medium mt-5 p-5">
              {" "}
              We always concern about your progress
            </p>
            <div className="flex">
              <BsCheckCircleFill className="text-green-600 mt-2"></BsCheckCircleFill>
              <p className="ms-3 text-2xl font-medium">
                Safe and secure money transfer.
              </p>
            </div>
            <div className="flex">
              <BsCheckCircleFill className="text-green-600 mt-7"></BsCheckCircleFill>
              <p className="ms-3 text-2xl font-medium mt-5">
                Maintaining each other's privacy with privately and securely.
              </p>
            </div>
            <div className="flex">
              <BsCheckCircleFill className="text-green-600 mt-7"></BsCheckCircleFill>
              <p className="ms-3 text-2xl font-medium mt-5">
                Instant money transfer within a second.
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default ServiceNew;
