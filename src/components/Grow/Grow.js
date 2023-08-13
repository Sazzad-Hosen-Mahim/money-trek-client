import React from "react";
import "./Grow.css";
import img1 from "../../assets/grow/1.jpeg";
import img2 from "../../assets/grow/2.jpg";
import img3 from "../../assets/grow/3.jpeg";
import img4 from "../../assets/grow/4.jpeg";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const Grow = () => {
  return (
    <>
      <div className="grow-container pt-32 pb-32">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900">
                  Grow Your Wealth Secure and safe
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6 image"
                    src={img1}
                    alt="content"
                  />

                  <h2 class="text-lg text-indigo-500 font-medium title-font mb-4">
                    Pension Scheme
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6 image"
                    src={img2}
                    alt="content"
                  />

                  <h2 class="text-lg text-indigo-500 font-medium title-font mb-4">
                    Mutual Fund
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6 image"
                    src={img3}
                    alt="content"
                  />

                  <h2 class="text-lg text-indigo-500 font-medium title-font mb-4">
                    Multi Currency A/C
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6 image"
                    src={img4}
                    alt="content"
                  />

                  <h2 class="text-lg text-indigo-500 font-medium title-font mb-4">
                    Trades FX
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Grow;
