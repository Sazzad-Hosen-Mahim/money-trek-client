import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import Carousel component
import "./Header.css";
import img1 from "../../assets/image/1.jpg";
import img2 from "../../assets/image/2.jpeg";
import img3 from "../../assets/image/3.jpg";

const Header = () => {
  return (
    <div className="w-4/5 m-auto head-section">
      <style>
        {`
          .carousel-root .carousel.carousel-slider {
            height: 630px !important;
          }
        `}
      </style>
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status indicators
        autoPlay={true} // Enable auto play
        infiniteLoop={true} // Enable infinite loop
        interval={3200} // Set interval between slides (in milliseconds)
        transitionTime={1200} // Set transition time (in milliseconds)
        stopOnHover={false} // Disable auto play on hover
        emulateTouch={true} // Enable touch swipe
        swipeable={true} // Enable swipe navigation
      >
        <div className="relative">
          <img src={img1} alt="Slide 1" className="img" />
          <p className="absolute top-48 left-24 p-10 text-white bg-black bg-opacity-70 w-2/5 rounded-md">
            <p className="text-4xl mb-7 ">
              Welcome To{" "}
              <span className="text-blue-500 font-medium">
                Money <strong>Trek</strong>
              </span>
            </p>
            <p className="text-left">
              Make your money transfer safe and secure with our online money
              transfer system. It's convenient and more efficient with a cost
              effective way. Our company ensures the highest privacy of a
              customer. Trust our policy.
            </p>
            <button className="btn btn-primary mt-6 ">Create an account</button>
          </p>
        </div>
        <div className="relative">
          <img src={img2} alt="Slide 2" />
          <p className="absolute  top-48 left-1/3  p-10 text-white bg-black bg-opacity-70 w-2/5 rounded-md">
            <p className="text-4xl mb-7">
              Welcome To{" "}
              <span className="text-blue-500 font-medium">
                Money <strong>Trek</strong>
              </span>
            </p>
            <p className="text-left">
              Make your money transfer safe and secure with our online money
              transfer system. It's convenient and more efficient with a cost
              effective way. Our company ensures the highest privacy of a
              customer. Trust our policy.
            </p>
            <button className="btn btn-primary mt-6">Create an account</button>
          </p>
        </div>
        <div className="relative ">
          <img src={img3} alt="Slide 3" />
          <p className="absolute top-48 left-1/3  p-10 text-white bg-black bg-opacity-70 w-2/5 rounded-md">
            <p className="text-4xl mb-7">
              Welcome To{" "}
              <span className="text-blue-500 font-medium">
                Money <strong>Trek</strong>
              </span>
            </p>
            <p className="text-left">
              Make your money transfer safe and secure with our online money
              transfer system. It's convenient and more efficient with a cost
              effective way. Our company ensures the highest privacy of a
              customer. Trust our policy.
            </p>
            <button className="btn btn-primary mt-6">Create an account</button>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
