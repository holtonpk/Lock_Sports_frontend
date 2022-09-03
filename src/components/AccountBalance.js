import React, { useState } from "react";
import coin from "../assets/coin2.svg";
const AccountBalance = () => {
  const [accountBalance, setAccountBalance] = useState("$5,000.00");

  return (
    <div className="flex flex-col  w-[90%] md:w-[55%]">
      <div className="flex flex-row  p-4 xl:px-16 px-4 rounded-[20px]  bg-white05  w-[100%] max-w-[1000px] overflow-hidden relative items-center justify-between">
        <div className="flex flex-row xl:w-[90%] w-fit mx-auto sm:gap-10 gap-4 md:w-full md:gap-0 justify-between items-center xl:mx-auto ">
          <div className="flex  flex-col w-[50%]  ">
            <h2 className="text-base font-light text-white lg:text-2xl whitespace-nowrap">
              Account Balance
            </h2>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {accountBalance}
            </h2>
          </div>
          <div className="flex flex-col justify-between mt-3 w-fit">
            <button className="p-2 w-fit lg:p-3 h-[fit-content] rounded-xl text-c3  font-bold text-sm sm:text-xl lg:text-2xl bg-c5  mb-2 hover:bg-c2">
              Withdraw
            </button>
            <button className="p-2 w-fit lg:p-3 h-[fit-content] rounded-xl text-c3  font-bold text-sm sm:text-xl lg:text-2xl bg-c1 hover:bg-c4">
              Deposit
            </button>
          </div>
        </div>
        <img
          src={coin}
          className=" h-[250px] w-[250px] md:h-[350px] md:w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2  "
        />
      </div>
    </div>
  );
};

export default AccountBalance;
