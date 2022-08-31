import React, { useState } from "react";

const PoolPreview = () => {
  const [selected, setSelected] = useState(0);
  const pools = [
    {
      Name: "OU Sig Ep Pool",
      Payers: 20,
      Pot: "$2,000.00",
      Status: "Alive",
    },
    {
      Name: "Family Pool",
      Payers: 5,
      Pot: "$5000.00",
      Status: "Dead",
    },
  ];
  return (
    <div className="flex flex-row justify-between w-[80%]">
      {pools.map((pool, i) => {
        let background = "bg-white20";
        if (selected == i) {
          background = "bg-white5";
        }
        return (
          <button
            onClick={() => setSelected(i)}
            className={
              " shadow-lg w-[350px] rounded-[10px] flex flex-col p-5 hover:bg-white10 " +
              background
            }
          >
            <h1 className="mb-2 text-4xl text-c1">{pool.Name}</h1>

            <div className="flex flex-row justify-between w-full mt-2">
              <div className="flex flex-col">
                <h2 className="text-base text-left text-white">Pot Value</h2>
                <h2 className="text-lg font-bold text-left text-c5">
                  {pool.Pot}
                </h2>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-base text-left text-white">
                  Total Players
                </h2>
                <h2 className="text-lg font-bold text-left text-c5">
                  {pool.Payers}
                </h2>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-base text-left text-white">Your status</h2>
                <h2 className="text-lg font-bold text-left text-c5">
                  {pool.Status}
                </h2>
              </div>
            </div>
          </button>
        );
      })}

      <div className="flex flex-col justify-between">
        <button
          onClick={() => setSelected("join")}
          className="text-c5 text-xl font-bold bg-c5_20 border-c5 border-2 rounded-[10px] p-3 hover:bg-c2 "
        >
          <h1 className="">Join a pool</h1>
        </button>

        <button
          onClick={() => setSelected("create")}
          className="text-c1 text-xl font-bold bg-c1_20 border-2 border-c1 rounded-[10px] p-3 hover:bg-c4 "
        >
          <h1 className="">Create a Pool</h1>
        </button>
      </div>
    </div>
  );
};

export default PoolPreview;
