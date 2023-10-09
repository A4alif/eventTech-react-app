import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Sponsors from "../../components/Sponsors/Sponsors";
import Price from "../../components/Price/Price";

const About = () => {
  return (
    <section>
      <Breadcrumbs title={"About"} />
      <div className="py-20">
        <Sponsors />
      </div>
      <div className="mb-20">
        <Price />
      </div>
    </section>
  );
};

export default About;
