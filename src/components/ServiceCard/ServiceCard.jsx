import React from "react";

const ServiceCard = ({service}) => {
    const {title, descOne, img, price} = service;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-80"
            src={img}
            alt="event"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm text-gray-500">{descOne.slice(0, 70)}....</p>
         <div className=" pt-6">
         <div className=" flex items-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              - See Details
            </button>
            <p className="text-2xl pl-28">$ <span className="font-semibold">{price}</span></p>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
