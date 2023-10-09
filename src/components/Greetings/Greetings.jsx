import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
const Greetings = () => {
  return (
    <>
      <section className="pt-32 pb-24  bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl md:text-6xl mb-9 font-semibold">
            Welcome to <span className="single-text-gradient">EventTech</span>
          </h2>
          <p className="max-w-xl mx-auto mb-24 text-gray-400 text-md  text-center">
            From the Tech Event to Gaming Event we explore the latest
            innovations, trends, and collaborations shaping the tech industry
            worldwide.
          </p>
          {/* grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 px-6">
            <div className="card  bg-base-100 shadow-xl transition-all ease-in delay-150 border-t-2 border-blue-400 ">
              <figure className="px-10 pt-10">
                <img src={logo1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title mb-6">Great People</h2>
                <p className="text-sm leading-6 mb-4">
                  Our dedicated team works tirelessly to ensure every event is a
                  resounding success, driven by passion, expertise, and
                  commitment.
                </p>
                <div className="card-actions">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    - Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="card  bg-base-100 shadow-xl transition-all ease-in delay-150 border-t-2 border-blue-400 ">
              <figure className="px-10 pt-10">
                <img src={logo2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title mb-6">Great Services</h2>
                <p className="text-sm leading-6 mb-4">
                  At our company, we are driven by a dedicated team of
                  exceptional individuals who pour their hearts and minds into
                  crafting unforgettable, successful events.
                </p>
                <div className="card-actions">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    - Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="card  bg-base-100 shadow-xl transition-all ease-in delay-150 border-t-2 border-blue-400 ">
              <figure className="px-10 pt-10">
                <img src={logo3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title mb-6">Great Ideas</h2>
                <p className="text-sm leading-6 mb-4">
                  Our exceptional team brings creative and innovative ideas to
                  every event, making each one unique and unforgettable
                </p>
                <div className="card-actions">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    - Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Greetings;
