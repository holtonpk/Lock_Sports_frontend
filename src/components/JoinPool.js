import React from "react";
import pools from "../assets/data/Pools.json";
import { Link } from "react-router-dom";

const JoinPool = () => {
  const PoolButton = ({ pool }) => {
    return (
      <Link
        to={"/Pool?id=" + pool.id}
        className="bg-white05 p-4 w-full rounded-[20px] flex flex-col sm:flex-row justify-between mb-4 hover:bg-white10 items-center"
      >
        <div className="flex flex-col items-center mr-3 ">
          <h1 className="mr-4 text-xl font-bold text-white md:text-3xl sm:text-2xl">
            {pool.Name}
          </h1>
          <div className="flex flex-row justify-start md:mt-2 w-fit">
            <div className="flex flex-row pr-1 mr-1 border-r-[1px] border-white md:pr-3 md:mr-3 w-fit ">
              <h1 className="mr-1 text-[10px] md:text-sm font-thin text-white">
                Deadline:
              </h1>
              <h1 className="text-[10px] md:text-sm text-c1">
                {pool.Deadline}
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="mr-1 text-[10px] md:text-sm font-thin text-white underline whitespace-nowrap">
                Rules and Payout
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-[90%] sm:w-[50%] md:mt-4 mt-2">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl whitespace-nowrap text-c5">
              {pool.Pot}
            </h1>
            <h1 className="text-base text-white sm:text-lg whitespace-nowrap">
              Prize Pool
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl whitespace-nowrap text-c5">
              {pool.Entry}
            </h1>
            <h1 className="text-base text-white sm:text-lg whitespace-nowrap">
              Entry
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl whitespace-nowrap text-c5">
              {pool.Entry}
            </h1>
            <h1 className="text-base text-white sm:text-lg whitespace-nowrap">
              Entries
            </h1>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="xl:w-[55%] w-[100%] mx-auto md:mx-0 max-w-[10000px] h-fit bg-white05 p-6 pb-0 rounded-[20px] md:min-w-[600px]">
      <h1 className="mb-4 text-xl font-bold text-white md:text-2xl">
        Recommended Pools
      </h1>
      <div className="flex flex-col overflow-scroll">
        {pools.map((pool, i) => {
          if (pool.Status == "Not Joined") {
            return (
              <div key={i}>
                <PoolButton pool={pool} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default JoinPool;
