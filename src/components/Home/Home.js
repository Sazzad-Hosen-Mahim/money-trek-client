import React from "react";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Account from "../Account/Account";
import Grow from "../Grow/Grow";
import EmergencyService from "../EmergencyService/EmergencyService";
import CreditCard from "../CreditCard/CreditCard";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import Layout from "../layout/Layout";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Header></Header>

      <Service></Service>
      <Account></Account>
      <Grow></Grow>
      <EmergencyService></EmergencyService>
      <CreditCard></CreditCard>
      <Faq></Faq>
      <Contact></Contact>
    </Layout>
  );
};

export default Home;
