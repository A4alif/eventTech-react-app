import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CallToAction from "../../components/CallToAction/CallToAction";
import Contact from "../../components/Contact/Contact";

const Booking = () => {
  return (
    <>
      <section>
        <Breadcrumbs title={"Booking"} />
        <CallToAction />
        <Contact />
      </section>
    </>
  );
};

export default Booking;
