import React from "react";

const TeamCard = ({ team }) => {
  const { name, img, profession, desc } = team;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-[450px]" src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <div>
            <p className="text-md text-gray-500">{profession}</p>
            <p className="pt-9 leading-8 text-sm md:text-md">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
