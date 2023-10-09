import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section >
        <div
          className="hero min-h-[600px]"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/R0403tYr/witness-canva-low-size.jpg)",
          }}
        >
          <div className="hero-content text-center   text-neutral-content">
            <div className="max-w-6xl">
              <div className="mb-14">
                <p className="">Lets Talk!!!</p>
                <h1 className=" mb-3 text-4xl md:text-6xl font-semibold pt-14">
                  Biggest Tech Event <br />{" "}
                </h1>
                <h2 className="text-4xl md:text-6xl font-semibold">
                  Management Company
                </h2>
              </div>

              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
              >
                Contact US
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
