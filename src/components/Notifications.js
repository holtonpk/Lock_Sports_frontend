import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { mess: "Your week 1 picks are due today", time: "2 hours ago" },

    { mess: "Your direct deposit was recieved", time: "2 hours ago" },
    { mess: "Welcome to Lock sports, lets start winning", time: "2 days ago" },
  ]);

  const [settings, showSettings] = useState(false);

  return (
    <div className="max-w-[750px] w-[90%] hidden   md:flex flex-col px-4 py-6 rounded-[20px] bg-white05 sm:w-[40%] overflow-hidden relative h-[200px]">
      <div className="flex flex-row items-center">
        <h1 className="mb-2 text-xl font-bold text-white md:text-2xl ">
          Notifications
        </h1>
        <button
          className="left-[90%] absolute float-right"
          onClick={() => showSettings(true)}
        >
          <BsThreeDotsVertical className="w-6 h-6 fill-white" />
        </button>
      </div>
      {(() => {
        if (settings) {
          return (
            <div className="absolute w-full h-full top-0 left-0 bg-c3 rounded-[10px] flex flex-col">
              <button onClick={() => showSettings(false)}>
                <IoIosArrowRoundBack className="absolute float-left w-10 h-10 ml-3 fill-white" />
              </button>
              <h1 className="mx-auto mt-2 text-xl font-bold text-white whitespace-nowrap border-b-[1px] border-white pb-2">
                Alerts & Notifications
              </h1>
              <div className="flex flex-col mx-auto mt-3">
                <div className="flex flex-row">
                  <input type="checkbox" className="mr-2"></input>
                  <div className="text-sm font-bold text-c1">
                    get text notifications
                  </div>
                </div>
                <div className="flex flex-row mt-3">
                  <input type="checkbox" className="mr-2"></input>
                  <div className="text-sm font-bold text-c1">
                    get email notifications
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })()}

      <div className="h-[150px] overflow-scroll">
        {notifications.map((mess, i) => {
          return (
            <div key={i}>
              <div className="w-full mb-2 border-t-[.5px] border-white"></div>
              <h1 className="text-sm font-bold md:text-base text-c1">
                {mess.mess}
              </h1>
              <h1 className="mb-2 text-[10px] md:text-sm font-bold text-c5">
                {mess.time}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
