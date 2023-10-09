import React from "react";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import sponsor5 from "../../assets/sponsor5.png";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <h2 className="text-2xl font-bold py-12  border-r-4 border-blue-700">
              Our Sponsors
            </h2>
          </div>
          <div className="col-span-4 py-10 flex space-x-8">
            <Marquee pauseOnHover='true' speed={100}>
              <div>
                <img className="h-12 mr-16" src={sponsor1} alt="" />
              </div>
              <div>
                <img className="h-12 mr-16" src={sponsor2} alt="" />
              </div>
              <div>
                <img className="h-12 mr-16" src={sponsor3} alt="" />
              </div>
              <div>
                <img className="h-12 mr-16" src={sponsor4} alt="" />
              </div>
              <div>
                <img className="h-12 mr-16" src={sponsor5} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
