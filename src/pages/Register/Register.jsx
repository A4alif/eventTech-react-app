import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    let regexPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if( password.length < 6){
      toast("Password should be at least 6 characters")
      return;
    }
    if(!regexPattern.test(password)){
      toast("Password should be at least 6 characters, One UpperCase, LowerCase and special Character")
      return;
    }
    createUser(email, password)
    .then( (result) => {
      toast("Registration Successfully")
      navigate("/");
      console.log(result.user);
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      }).then(() => {
        console.log('profile updated successfully');
      }).catch((error) => {
        console.log(error.message);
      });
    })
    .catch( (error) => {
      toast(error.message)
    })
  };
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
                    <form onSubmit={handleRegister} className="card-body">
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
                        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                          Register
                        </button>
                        <p className="text-sm mt-4 text-gray-600">
                          Already have an account{" "}
                          <span className="text-blue-600 underline">
                            <Link to={"/login"}>Login</Link>
                          </span>{" "}
                        </p>
                      </div>
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
