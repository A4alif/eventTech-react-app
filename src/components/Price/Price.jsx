import React from "react";

const Price = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6">
          <h2 className="text-lg text-blue-400 font-bold mb-4 mt-9">
            Pricing Package
          </h2>
          <h3 className="text-4xl text-slate-800 font-bold mb-16">
            Get The Best Deal For Your Event{" "}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0 lg:px-4">
            <div className="card border border-blue-500  shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-medium text-[#0361D4] mb-6 pt-6">
                  Regular
                </h2>
                <p className="text-5xl font-bold">$ 750</p>
                <div className="divider p-0 "></div>
                <p className="text-lg pt- pb-2">
                  {" "}
                  <span className="font-semibold">Free</span> Lunch{" "}
                </p>
                <p className="text-lg pb-2">
                  {" "}
                  <span className="font-semibold">Free</span> Ebook{" "}
                </p>
                <p className="text-lg pb-2 text-gray-300 ">
                  {" "}
                  <span className="font-semibold">10</span> Tech Lesson{" "}
                </p>
                <p className="text-lg pb-2 text-gray-300 ">
                  {" "}
                  <span className="font-semibold">100</span> Booth Access{" "}
                </p>
                <p className="text-lg pb-6 text-gray-300 ">
                  {" "}
                  <span className="font-semibold">Free</span> Sharing Session{" "}
                </p>
                <div className="card-actions justify-start ">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Buy Package
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-gradient shadow-xl">
              <div className="card-body text-white">
                <h2 className="card-title text-2xl font-medium text-white mb-6 pt-6">
                  Premium
                </h2>
                <p className="text-5xl font-bold">$ 1500</p>
                <div className="divider p-0 "></div>
                <p className="text-lg pt- pb-2">
                  {" "}
                  <span className="font-semibold">Free</span> Lunch{" "}
                </p>
                <p className="text-lg pb-2">
                  {" "}
                  <span className="font-semibold">Free</span> Ebook{" "}
                </p>
                <p className="text-lg pb-2  ">
                  {" "}
                  <span className="font-semibold">10</span> Tech Lesson{" "}
                </p>
                <p className="text-lg pb-2  ">
                  {" "}
                  <span className="font-semibold">100</span> Booth Access{" "}
                </p>
                <p className="text-lg pb-6 text-gray-400 ">
                  {" "}
                  <span className="font-semibold">Free</span> Sharing Session{" "}
                </p>
                <div className="card-actions justify-start ">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Buy Package
                  </button>
                </div>
              </div>
            </div>
            <div className="card border border-blue-500  shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-medium text-[#0361D4] mb-6 pt-6">
                  Enterprise
                </h2>
                <p className="text-5xl font-bold">$ 1850</p>
                <div className="divider p-0 "></div>
                <p className="text-lg pt- pb-2">
                  {" "}
                  <span className="font-semibold">Free</span> Lunch{" "}
                </p>
                <p className="text-lg pb-2">
                  {" "}
                  <span className="font-semibold">Free</span> Ebook{" "}
                </p>
                <p className="text-lg pb-2  ">
                  {" "}
                  <span className="font-semibold">10</span> Tech Lesson{" "}
                </p>
                <p className="text-lg pb-2  ">
                  {" "}
                  <span className="font-semibold">100</span> Booth Access{" "}
                </p>
                <p className="text-lg pb-6  ">
                  {" "}
                  <span className="font-semibold">Free</span> Sharing Session{" "}
                </p>
                <div className="card-actions justify-start ">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Buy Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
