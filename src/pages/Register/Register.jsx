import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <>
      <section>
        <div
          className="hero min-h-[700px]"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/SxdmvQrc/login-page-background-1.jpg)",
          }}
        >
          <div className="hero-content   text-neutral-content">
            <div className="max-w-6xl bg-gray-100 text-slate-950 px-9 py-9">
              <div className="">
                <div>
                  <div>
                    <h2 className=" text-2xl md:text-4xl font-bold">
                      Welcome To{" "}
                      <span className="single-text-gradient">EventTech</span>
                    </h2>
                    <h2 className="text-center text-2xl md:text-3xl font-semibold mt-6">
                      Please Register
                    </h2>
                    <form className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          placeholder="name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          name="photo"
                          type="text"
                          placeholder="photo-url"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          name="password"
                          type="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
                        >
                        Register
                        </button>
                        <p className="text-sm mt-4 text-gray-600">
                          Already have an account{" "}
                          <span className="text-blue-600 underline">
                            <Link to={"/login"}>Login</Link>
                          </span>{" "}
                        </p>
                      </div>
                      {/* <div className="divider">Login With</div>
                      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex justify-center ">
                        {" "}
                        <FcGoogle className="mr-4" size={20} /> Sign In with
                        Google
                      </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
