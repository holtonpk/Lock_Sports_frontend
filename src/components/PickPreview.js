import React, { useState } from "react";
import { getGameData, getTeamData } from "../logic.js";
import Lottie from "react-lottie-player";
import lock3 from "../assets/lottie/lock4.json";
const PickPreview = ({
  selectedGameKey,
  selectedPick,
  showPickPreview,
  setShowPickPreview,
  Picks,
  weekView,
  setPicks,
  setSelectedPick,
}) => {
  const [lockAnimation, showLockAnimation] = useState(false);

  let Matchup = getGameData(selectedGameKey);

  const TeamView = ({ teamKey }) => {
    let Team = getTeamData(teamKey);
    let background = "border-2 border-c5 bg-c5_20";
    let text = "Loser";
    let textStyle = "text-c5";
    if (teamKey == selectedPick) {
      background = "border-2 border-c1 bg-c1_20";
      text = "Winner";
      textStyle = "text-c1";
    }
    console.log("Team", Team);
    return (
      <div className="flex flex-col">
        <h2 className={"mx-auto text-4xl font-bold w-fit " + textStyle}>
          {text}
        </h2>

        <div
          className={
            "flex flex-row mx-auto items-center w-[90%] rounded-[10px] mb-3  p-6 " +
            background
          }
        >
          <img
            src={Team.WikipediaWordMarkUrl}
            alt="no logo"
            className="mx-auto w-[350px] max-h-[60px]"
          />

          {/* <div className="flex flex-row">
          <h1 className="mr-1 text-lg text-c1 ">{Team.City}</h1>
          <h1 className="mr-2 text-lg font-bold text-c1 ">{Team.Name}</h1>
        </div> */}
        </div>
      </div>
    );
  };

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
  const LockAnimation = () => {
    const box = document.getElementById("lockAnimation");
    console.log(box);
    box.style.display = "block";
    showLockAnimation(true);
    setTimeout(() => {
      showLockAnimation(false);
      // 👇️ removes element from DOM
      box.style.display = "none";
    }, 1000);
  };

  return (
    <>
      <div
        id="lockAnimation"
        className="left-1/2 top-1/2 2  w-[350px] h-[350px]  hidden fixed -translate-x-1/2 -translate-y-1/2"
      >
        {(() => {
          if (lockAnimation) {
            return (
              <div className="w-[350px] h-[350px] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <Lottie
                  loop
                  animationData={lock3}
                  play
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            );
          }
        })()}
      </div>
      {(() => {
        if (showPickPreview) {
          return (
            <>
              <button
                onClick={() => setShowPickPreview(false)}
                className="absolute w-full h-full bg-back60"
              ></button>
              <div
                id="pickMenu"
                className="fixed left-1/2 bg-white flex flex-col  top-1/2 z-60 rounded-[20px]  p-4 -translate-x-1/2 -translate-y-1/2 fade-in"
              >
                {/* <h1 className="w-[90%] mx-auto text-3xl font-bold border-b-2 border-c1 text-c1 mb-3">
                  Your Pick
                </h1> */}
                <div className="flex flex-row">
                  <TeamView teamKey={Matchup.HomeTeam} />
                  <TeamView teamKey={Matchup.AwayTeam} />
                </div>
                <button
                  className="flex flex-row items-center w-[90%] px-4 py-2 mx-auto rounded-xl bg-c5 z-50"
                  onClick={() => {
                    LockPicks();
                    setShowPickPreview(false);
                    LockAnimation();

                    //   setSelectedPick(undefined);
                  }}
                >
                  <h1 className="mx-auto text-4xl font-bold text-white whitespace-nowrap">
                    Lock Pick
                  </h1>
                </button>
              </div>
            </>
          );
        } else {
          return <></>;
        }
      })()}
    </>
  );
};

export default PickPreview;
