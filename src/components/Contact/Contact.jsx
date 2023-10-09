import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl text-blue-400 font-bold mt-6">Contact Us</h2>
        <h2 className="text-4xl font-bold pt-6">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 px-4 my-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8365400267376!2d-74.01687571039439!3d40.7216147632743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f69961307b%3A0xed09d08887a69c37!2sWest%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1696852068063!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="card  shadow-xl">
              <div className="card-body">
                <form className="px-16">
                  <div>
                    <input
                      className="w-full py-3 rounded-md focus:outline-none text-md px-4 border border-gray-200 mb-6"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-3 rounded-md focus:outline-none text-md px-4 border border-gray-200 mb-6"
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-3 rounded-md focus:outline-none text-md px-4 border border-gray-200 mb-6"
                      type="text"
                      name="subject"
                      id=""
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full py-3 rounded-md focus:outline-none text-md px-4 border border-gray-200 mb-6"
                      name="message"
                      id=""
                      cols="25"
                      rows="6"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </form>

                <div className="card-actions justify-center">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
