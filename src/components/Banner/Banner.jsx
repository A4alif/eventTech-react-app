import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-[830px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/XJNNTthP/banner-image.jpg)",
        }}
      >
        <div className="hero-content text-center md:text-left  text-neutral-content">
          <div className="max-w-6xl">
            <div>
              <h1 className=" mb-3 text-4xl md:text-6xl font-semibold">
                Elevating the Global <br />{" "}
              </h1>
              <h2 className="text-4xl md:text-6xl font-semibold">
                Technology Ecosystem
              </h2>
            </div>
            <p className="mb-9 mt-9 text-sm md:text-lg leading-8 md:w-3/4">
              Discover opportunities to connect with industry leaders, nurture
              ideas, and contribute to the growth of the global technology
              landscape. Don't miss this exciting event where knowledge meets
              action!
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Book Your Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
