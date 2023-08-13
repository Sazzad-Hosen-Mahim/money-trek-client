import React from "react";
import "./Faq.css";
import img1 from "../../assets/faq/1.jpg";

const Faq = () => {
  return (
    <>
      <div className="faq-container mb-24 pt-24">
        <h1 className="text-5xl text-center mb-11">
          Frequently Asked Question
        </h1>
        <div className="grid grid-cols-2 gap-0">
          <div className="px-20">
            <img src={img1} alt="" />
          </div>
          <div className="pe-10">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                What is the minimum balance?
              </div>
              <div className="collapse-content">
                <p>
                  We cater for your innermost needs by giving you an array of
                  banking options that suit your personality.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                When will I receive my account statement?
              </div>
              <div className="collapse-content">
                <p>
                  Our cards are issued to clients that perform one or more of a
                  number of services that relate to giving the client access to
                  numerous services.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What is the rate of interest?
              </div>
              <div className="collapse-content">
                <p>
                  With longer-tenure credit, flexible payment plan and lower
                  equity, banking with us is a rewarding relationship that
                  enables you to enjoy life
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I use any branch across Bangladesh?
              </div>
              <div className="collapse-content">
                <p>
                  With our digital banking services, we offer you the choice to
                  access your account anytime, anywhere from your laptop or
                  smartphone.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How safe/secure is our net banking a/c?
              </div>
              <div className="collapse-content">
                <p>
                  With these services, you can securely send and receive funds
                  quickly and conveniently to anyone across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
