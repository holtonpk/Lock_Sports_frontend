import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { mess: "Your direct deposit was recieved", time: "2 hours ago" },
    { mess: "Welcome to Lock sports, lets start winning", time: "2 days ago" },
  ]);

  return (
    <div className="flex flex-col px-4 py-6 rounded-[20px] bg-white02 w-[35%] overflow-hidden relative h-[200px]">
      <h1 className="mb-2 text-4xl font-bold text-white">Notifications</h1>
      <div className="h-[150px] overflow-scroll">
        {notifications.map((mess) => {
          return (
            <>
              <div className="w-full mb-2 border-t-[.5px] border-white"></div>
              <h1 className="text-lg font-bold text-c1">{mess.mess}</h1>
              <h1 className="mb-2 text-base font-bold text-c5">{mess.time}</h1>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
