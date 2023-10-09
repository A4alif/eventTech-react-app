import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((ele) => ele.id == id);
  const {
    title,
    img,
    price,
    postedTime,
    descOne,
    descTwo,
    descThree,
    descFour,
    descFive,
  } = service;
  return (
    <>
      <section className="text-white">
        <div
          className="min-h-[300px]"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/Y23JPTrY/single-details-short.jpg)",
          }}
        >
          <div className="container mx-auto px-6 ">
            <div className="flex items-center pt-36 ">
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Service Details</a>
                  </li>
                  <li>
                    <a>{title}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 py-9">
          {/* grid container */}
          <div className="text-slate-950 grid grid-cols-1 md:grid-cols-4 gap-9">
            <div className="col-span-3">
              <div className="card  bg-base-100 shadow-xl">
                <h2 className="text-4xl font-bold px-6 pt-6 pb-4">{title}</h2>
                <div className="px-6 flex items-center space-x-9 pb-6">
                  <p className="flex items-center">
                    {" "}
                    <FaUserTie size={20} className="mr-4" />{" "}
                    <span className="text-gray-500">Admin</span>{" "}
                  </p>
                  <p className="flex items-center">
                    {" "}
                    <AiOutlineClockCircle size={20} className="mr-4" />{" "}
                    {postedTime}
                  </p>
                </div>
                <figure>
                  <img
                    className="px-9 w-full h-[600px] object-cover"
                    src={img}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <p className="px-4 text-md leading-9 text-gray-600 mb-6">
                    {descOne}
                  </p>
                  <p className="px-4 text-md leading-9 text-gray-600 mb-6">
                    {descTwo}
                  </p>
                  <p className="px-4 text-md leading-9 text-gray-600 mb-6">
                    {descThree}
                  </p>
                  <p className="px-4 text-md leading-9 text-gray-600 mb-6">
                    {descFour}
                  </p>
                  <p className="px-4 text-md leading-9 text-gray-600 mb-6">
                    {descFive}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title py-6">Our Services</h2>
                  <li className="list-none">- Tech Conference and Expos</li>
                  <div className="divider p-0 m-0"></div>
                  <li className="list-none">- EA Sports Competition</li>
                  <div className="divider p-0 m-0"></div>
                  <li className="list-none">- Programming Hackathons</li>
                  <div className="divider p-0 m-0"></div>
                  <li className="list-none">- CISCO Networking Conference</li>
                  <div className="divider p-0 m-0"></div>
                  <li className="list-none">- Consumer Electronics Show</li>
                  <div className="divider p-0 m-0"></div>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl mt-6">
                <div className="card-body">
                  <h2 className="card-title py-6">Follow Us</h2>
                  <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex justify-center ">
                    {" "}
                    <FaFacebook className="mr-4" size={20} />
                    Facebook
                  </button>
                  <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex justify-center ">
                    {" "}
                    <FaInstagramSquare className="mr-4" size={20} />
                    Instagram
                  </button>
                  <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex justify-center ">
                    {" "}
                    <FaTwitter className="mr-4" size={20} />
                    Twitter
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

export default ServiceDetails;
