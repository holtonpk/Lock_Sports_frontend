import React, { useState } from "react";
import coin from "../assets/coin2.svg";
const AccountBalance = () => {
  const [accountBalance, setAccountBalance] = useState("$5,000.00");

  return (
    <>
      <div className="flex flex-row px-10 py-6 rounded-[20px] bg-white02 w-[60%] overflow-hidden relative">
        <div className="flex flex-col w-[50%] ">
          <h1 className="mb-2 text-4xl font-bold text-white">Your Account</h1>

          <h2 className="text-xl font-light text-white2 ">Account Balance</h2>
          <h2 className="text-6xl font-bold text-c5">{accountBalance}</h2>
        </div>
        <div className="flex flex-col justify-between">
          <button className="p-3 h-[fit-content] border-2 rounded-xl text-c5 text-2xl font-bold bg-c5_20 border-c5 mb-2 hover:bg-c2">
            Withdraw
          </button>
          <button className="p-3 h-[fit-content] border-2 rounded-xl text-c1 text-2xl font-bold bg-c1_20 border-c1 hover:bg-c4">
            Deposit
          </button>
        </div>
        <img
          src={coin}
          className="h-60 w-60 absolute -translate-y-1/2 top-1/2 left-[70%] "
        />
      </div>
    </>
  );
};

export default AccountBalance;
