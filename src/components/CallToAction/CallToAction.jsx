import React, { useContext } from "react";
import { FaLocationDot, FaRegEnvelope } from "react-icons/fa6";
import { AiOutlinePhone } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";

const CallToAction = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="pb-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold pt-24">
          Welcome !!! <span className="single-text-gradient">{user?.displayName} </span>{" "}
        </h2>
        <p className="text-md pt-4 text-gray-500">Book Your Event Now</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 px-4">
          <div className="card  bg-[#F6F6F6] text-slate-950 mt-32 ">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <p className="w-20 h-20 bg-blue-600 flex items-center justify-center rounded-md -mt-20">
                  <FaLocationDot size={40} className="text-white" />
                </p>
              </h2>
              <p className="text-blue-500 font-bold text-xl pt-6">
                Event Location.
              </p>
              <p>West Down Street, New York</p>
            </div>
          </div>
          <div className="card  bg-[#F6F6F6] text-slate-950 mt-32 ">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <p className="w-20 h-20 bg-blue-600 flex items-center justify-center rounded-md -mt-20">
                  <AiOutlinePhone size={40} className="text-white" />
                </p>
              </h2>
              <p className="text-blue-500 font-bold text-xl pt-6">
                Give Us A Call.
              </p>
              <p>+882312826</p>
            </div>
          </div>
          <div className="card  bg-[#F6F6F6] text-slate-950 mt-32 ">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <p className="w-20 h-20 bg-blue-600 flex items-center justify-center rounded-md -mt-20">
                  <FaRegEnvelope size={40} className="text-white" />
                </p>
              </h2>
              <p className="text-blue-500 font-bold text-xl pt-6">
                Send Us A Message.
              </p>
              <p>support@eventTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
