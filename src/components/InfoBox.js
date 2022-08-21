import React from "react";

const InfoBox = ({ heading, data }) => {
  return (
    <div className="flex bg-white20 flex-col p-2 px-2 rounded-[16px]">
      <h1 className="text-base font-thin text-white">{heading}</h1>
      <h2 className="text-lg font-bold text-[#07C8F3]">{data}</h2>
    </div>
  );
};

export default InfoBox;
