import React, { useState } from "react";
import profile from "../assets/profile.png";
import { RiArrowDownSLine } from "react-icons/ri";
import Navbar from "../components/Navbar.js";
const Settings = () => {
  const [tab, setTab] = useState({
    title: "General",
    description: "Update your username and manage your account",
  });

  const [showDrop, setShowDrop] = useState(false);

  const General = () => {
    return (
      <div className="flex flex-col ">
        <h1 className="mb-2 mr-1 text-3xl font-bold text-white">Username</h1>
        <input
          type="text"
          className="textarea bg-c3 rounded-[10px] h-10 mb-4 border-[1px] border-white text-white pl-2"
        />
        <h1 className="mb-2 mr-1 text-3xl font-bold text-white">Email</h1>
        <input
          type="text"
          className="textarea bg-c3 rounded-[10px] h-10 mb-4 border-[1px] border-white text-white pl-2"
        />
        <button className="p-4 text-white bg-c1 w-fit rounded-[10px] right-0 font-bold mx-auto md:mx-0">
          Save Changes
        </button>
      </div>
    );
  };

  const Password = () => {
    return (
      <div className="flex flex-col">
        <h1 className="mb-2 mr-1 text-3xl font-bold text-white">
          Old Password
        </h1>
        <input
          type="text"
          className="textarea bg-c3 rounded-[10px] h-10 mb-4 border-[1px] border-white text-white pl-2"
        />
        <h1 className="mb-2 mr-1 text-3xl font-bold text-white">
          New Password
        </h1>
        <input
          type="text"
          className="textarea bg-c3 rounded-[10px] h-10 mb-4 border-[1px] border-white text-white pl-2"
        />
        <button className="p-4 text-white bg-c1 w-fit rounded-[10px] right-0 font-bold  mx-auto md:mx-0">
          Save Changes
        </button>
      </div>
    );
  };

  return (
    <div className="h-screen bg-black homeGrid">
      <Navbar />
      <div className="relative z-20 w-screen p-4 mb-20 md:w-full">
        <div className=" left-1/2 absolute -translate-x-1/2   w-[70%] mt-20 flex flex-col items-center">
          <div className="flex flex-row items-center gap-3 w-[90%] ">
            <img
              src={profile}
              alt=""
              className="w-10 h-10 mr-4 md:w-14 md:h-14"
            />
            <div className="flex flex-col">
              <div className="flex flex-row ">
                <h1 className="mr-1 text-lg font-bold text-white md:text-3xl">
                  Patrick
                </h1>
                <h1 className="text-lg font-bold text-white md:text-3xl ">
                  {" / " + tab.title}
                </h1>
              </div>
              <h1 className="text-sm text-white md:text-xl">
                {tab.description}
              </h1>
            </div>
          </div>
          <div className="gap-0 md:gap-4 mt-10 flex flex-col items-center settingsGrid w-[80%]">
            <button
              onClick={() => setShowDrop(!showDrop)}
              className="relative flex flex-row mb-4 md:hidden items-center justify-between w-full p-2 text-2xl text-left text-white border-[.5px] border-white"
            >
              {tab.title}
              <RiArrowDownSLine className="float-right fill-white" />
            </button>

            {(() => {
              if (showDrop) {
                return (
                  <div className="flex flex-col w-full">
                    <button
                      onClick={() => {
                        setShowDrop(!showDrop);
                        setTab({
                          title: "General",
                          description:
                            "Update your username and manage your account",
                        });
                      }}
                      className="text-xl font-bold text-white2 text-left p-2  border-[.5px] border-white w-full"
                    >
                      General
                    </button>
                    <button
                      onClick={() => {
                        setShowDrop(!showDrop);
                        setTab({
                          title: "Password",
                          description: "Manage your password",
                        });
                      }}
                      className="text-xl font-bold text-white2 text-left p-2  border-[.5px] border-white w-full"
                    >
                      Password
                    </button>
                    <button
                      onClick={() => {
                        setShowDrop(!showDrop);
                        setTab({
                          title: "Notifications",
                          description: "Get notified about your picks",
                        });
                      }}
                      className="text-xl font-bold text-white2 text-left p-2  border-[.5px] border-white w-full"
                    >
                      Notifications
                    </button>
                    <button
                      onClick={() => {
                        setShowDrop(!showDrop);
                        setTab({
                          title: "Payment",
                          description: "Update and Manage your payment info",
                        });
                      }}
                      className="text-xl font-bold text-white2 text-left p-2  border-[.5px] border-white w-full"
                    >
                      Payment
                    </button>
                  </div>
                );
              }
            })()}

            <div className="flex-col hidden gap-4 md:flex">
              <button
                onClick={() =>
                  setTab({
                    title: "General",
                    description: "Update your username and manage your account",
                  })
                }
                className="text-xl font-bold text-white2 hover:text-white w-fit"
              >
                General
              </button>
              <button
                onClick={() =>
                  setTab({
                    title: "Password",
                    description: "Manage your password",
                  })
                }
                className="text-xl font-bold text-white2 hover:text-white w-fit"
              >
                Password
              </button>
              <button
                onClick={() =>
                  setTab({
                    title: "Notifications",
                    description: "Get notified about your picks",
                  })
                }
                className="text-xl font-bold text-white2 hover:text-white w-fit"
              >
                Notifications
              </button>
              <button
                onClick={() =>
                  setTab({
                    title: "Payment",
                    description: "Update and Manage your payment info",
                  })
                }
                className="text-xl font-bold text-white2 hover:text-white w-fit"
              >
                Payment
              </button>
            </div>
            <div className="w-full ">
              {(() => {
                if (tab.title == "General") {
                  return <General />;
                }
                if (tab.title == "Password") {
                  return <Password />;
                }
                if (tab.title == "Notifications") {
                  return <div className="flex flex-col">Notifications</div>;
                }
                if (tab.title == "Payment") {
                  return <div className="flex flex-col">Payment</div>;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
