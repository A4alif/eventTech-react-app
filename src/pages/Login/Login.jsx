import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn()
    .then( (result) => {
      navigate( location?.state ? location.state : "/")
    })
    .catch( (error) => {
      toast(error.message);
    })
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        navigate( location?.state ? location.state : "/")
      })
      .catch((error) => {
        toast(error.message)
      });
  }
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
                      Please Login In
                    </h2>
                    <form onSubmit={handleSignIn} className="card-body">
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
                         
                          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Login
                        </button>
                        <p className="text-sm mt-4 text-gray-600">
                          Do not have an account{" "}
                          <span className="text-blue-600 underline">
                            <Link to={"/register"}>Register</Link>
                          </span>{" "}
                        </p>
                      </div>
                      <div className="divider">Login With</div>
                      
                    </form>
                   <div className="flex justify-center">
                   <button onClick={handleGoogle} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex justify-center  ">
                        {" "}
                        <FcGoogle className="mr-4" size={20} /> Sign In with
                        Google
                      </button>
                   </div>
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

export default Login;
