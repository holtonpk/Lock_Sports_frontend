import React, { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import teamData2 from "../assets/data/teamData2.json";
import { getTeamData, getGameData } from "../logic.js";
import Lottie from "react-lottie-player";

import lock from "../assets/lottie/lock.json";

const LockPreview = ({
  selectedGameKey,
  selectedPick,
  showMenu,
  setShowMenu,
  weekView,
  Picks,
  setPicks,
  setSelectedPick,
  showLockAnimation,
}) => {
  console.log(Picks);

  const LockPicks = () => {
    Picks.map((pick) => {
      if (pick.week == weekView) {
        Picks.pop(pick);
      }
      setPicks([
        ...Picks,
        {
          week: weekView,
          GameKey: selectedGameKey,
          selectedWinner: selectedPick,
        },
      ]);
    });
  };
  const lockAnimation = () => {
    document.getElementById("lockAnimation").style.display = "block";
    showLockAnimation(true);
    setTimeout(() => {
      const box = document.getElementById("lockAnimation");
      showLockAnimation(false);
      // 👇️ removes element from DOM
      box.style.display = "none";
    }, 2500);
  };

  const TeamView = ({ teamKey }) => {
    let Team = getTeamData(teamKey);
    let prediction = "Loser";
    let predictionStyle = "text-c5";
    let predictionStyle2 = "text-c5 ";
    if (Team.Key == selectedPick) {
      prediction = "Winner";
      predictionStyle = "text-c1";
      predictionStyle2 = "text-c5 ";
    }

    return (
      <div
        className={
          "flex flex-row items-center w-[90%] mx-auto  rounded-[10px]  py-2  box-border relative overflow-hidden mb-2   " +
          predictionStyle2
        }
      >
        <div className="w-full h-full bg-back60 absolute"></div>
        <h1
          className={
            "text-2xl font-bold  mr-3 absolute top-1/2 z-70 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
            predictionStyle
          }
        >
          {prediction}
        </h1>
        <img
          src={Team.WikipediaLogoUrl}
          alt="no logo"
          className="h-10 w-16 mr-4 ml-3"
        />

        <div className="flex flex-row">
          <h1 className="text-lg text-c1 mr-1 ">{Team.City}</h1>
          <h1 className="text-lg text-c1 mr-2 font-bold ">{Team.Name}</h1>
        </div>
      </div>
    );
  };
  let Matchup = getGameData(selectedGameKey);

  return (
    <>
      {(() => {
        if (showMenu) {
          return (
            <>
              <button
                onClick={() => {
                  setShowMenu(false);
                  setSelectedPick(undefined);
                }}
                className="fixed bg-back60 w-full bottom-0 h-full z-40 rounded-t-[20px] "
              ></button>

              <div className="fixed bg-white w-full bottom-0  z-50 rounded-t-[20px] slide-in-bottom flex flex-col justify-end py-4">
                <div className="flex flex-col  items-left">
                  <TeamView teamKey={Matchup.HomeTeam} />
                  <TeamView teamKey={Matchup.AwayTeam} />
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  className="bg-c3 rounded-full p-2  w-[90%] mx-auto"
                >
                  <button
                    className="flex flex-row mx-auto w-fit items-center"
                    onClick={() => {
                      LockPicks();
                      setSelectedPick(undefined);
                      lockAnimation();
                    }}
                  >
                    <h1 className="text-c1 text-2xl font-bold mr-2 mt-1">
                      Lock Pick
                    </h1>
                    {/* <BsLockFill className="h-6 w-6 fill-white" /> */}
                    <Lottie
                      loop
                      animationData={lock}
                      play
                      style={{ width: 50, height: 50 }}
                    />
                  </button>
                </button>
              </div>
            </>
          );
        }
      })()}
    </>
  );
};

export default LockPreview;
