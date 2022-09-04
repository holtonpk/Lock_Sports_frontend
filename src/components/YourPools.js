import React, { useState } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  BsFillPeopleFill,
  BsFillPersonFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import pools from "../assets/data/Pools.json";
const YourPools = () => {
  const [selected, setSelected] = useState(undefined);

  return (
    <div className="xl:w-[40%] w-[100%] mx-auto lg:mx-0 bg-white05 p-3 rounded-[20px] xl:order-2 h-fit">
      <h1 className="mb-4 text-xl font-bold text-white md:text-2xl">
        Your Pools
      </h1>

      <div className="flex flex-col justify-start relative w-[100%]  max-w-[1500px] overflow-scroll ">
        {pools.map((pool, i) => {
          if (pool.Status != "Not Joined") {
            return (
              <Link
                key={i}
                role="button"
                to={"/Pool?id=" + pool.id}
                // onClick={() => setSelected(i)}
                className="rounded-[20px] px-6 flex  py-4 w-[100%] flex-col  mr-4 hover:bg-white10 relative mb-3 bg-white02 "
              >
                <div className="flex flex-row items-center ">
                  <BsFillPeopleFill className="w-10 h-10 p-1 mr-4 border-2 rounded-full bg-c1_20 border-c1 fill-c1" />
                  <div className="flex flex-col ">
                    <h1 className="text-xl font-bold text-white md:text-2xl whitespace-nowrap">
                      {pool.Name}
                    </h1>
                    <h1 className=" md:text-sm text-[10px] text-white5 whitespace-nowrap ">
                      Week 2 picks locked
                    </h1>
                  </div>
                  <BsThreeDotsVertical className="absolute float-right w-6 h-6 left-[90%] fill-white" />
                </div>
              </Link>
            );
          }
        })}

        <button
          onClick={() => setSelected("join")}
          className="text-c5 md:text-xl text-md font-bold bg-white02  rounded-[20px] p-5  mb-3 "
        >
          <div className="flex flex-row items-center mx-auto w-fit ">
            <h1 className="mr-3">Join a pool</h1>
            <IoPersonAdd className="w-6 h-6 fill-c5" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default YourPools;
