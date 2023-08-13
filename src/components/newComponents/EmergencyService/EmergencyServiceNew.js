import React from "react";
import "./EmergencyServiceNew.css";
import { AiFillCreditCard } from "react-icons/ai";
import { PiBankFill } from "react-icons/pi";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiBanknote } from "react-icons/gi";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

const EmergencyServiceNew = () => {
  return (
    <Layout title={"Services - Money trek"}>
      <div className="emergency-service pb-20 ">
        <section class="text-gray-600 body-font ">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Master Cleanse Reliac Heirloom
              </h1>
              <p class="bg-black lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div class="flex flex-wrap">
              <div class="bg-sky-500/75 xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <AiFillCreditCard className="text-4xl text-center m-auto text-black mb-5"></AiFillCreditCard>
                <h2 class="text-xl sm:text-xl text-black font-medium title-font mb-2">
                  Credit/Debit Card Related
                </h2>
                <p class="leading-relaxed text-base mb-4 text-white">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <Link to="/service">
                  <Link class="text-black inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Link>
              </div>
              <div class="bg-sky-500/75 xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <PiBankFill className="text-4xl text-center m-auto text-black mb-5"></PiBankFill>
                <h2 class="text-xl sm:text-xl text-black font-medium title-font mb-2">
                  Mobile / Internet Banking
                </h2>
                <p class="leading-relaxed text-base mb-4 text-white">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <Link to="/service">
                  <Link class="text-black inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Link>
              </div>
              <div class="bg-sky-500/75 xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <BiSolidUserAccount className="text-4xl text-center m-auto text-black mb-5"></BiSolidUserAccount>
                <h2 class="text-xl sm:text-xl text-black font-medium title-font mb-2">
                  Account Details and Changing
                </h2>
                <p class="leading-relaxed text-base mb-4 text-white">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <Link to="/service">
                  <Link class="text-black inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Link>
              </div>
              <div class="bg-sky-500/75 xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <GiBanknote className="text-4xl text-center m-auto text-black mb-5"></GiBanknote>
                <h2 class="text-xl sm:text-xl text-black font-medium title-font mb-2">
                  Cheque Book Related
                </h2>
                <p class="leading-relaxed text-base mb-4 text-white">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <Link to="/service">
                  <Link class="text-black inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EmergencyServiceNew;
