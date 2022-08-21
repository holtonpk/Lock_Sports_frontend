import React, { useState } from "react";
import nflTimeFrames from "../assets/data/nflTimeFrames.json";
import nflSchedule from "../assets/data/nflSchedule.json";
import TeamButton from "./TeamButton.js";
import { getTeamData } from "../logic.js";
import { FaLock } from "react-icons/fa";
import WeekSelect from "./WeekSelect.js";
import { BsCalendarFill } from "react-icons/bs";
const PickMenu = ({
  weekView,
  setWeekView,
  setShowMenu,
  setSelectedGameKey,
  selectedGameKey,
  selectedPick,
  setSelectedPick,
  Picks,
}) => {
  let week = undefined;
  let matchUps = [];
  nflTimeFrames.map((weekData) => {
    if (weekData.Week == weekView) {
      week = weekData;
    }
  });

  nflSchedule.map((matchup) => {
    if (matchup.Week == weekView) {
      matchUps.push(matchup);
    }
  });

  let date = new Date(week.FirstGameStart);

  let thisWeeksPrediction = undefined;

  Picks.map((week) => {
    if (week.week == weekView) {
      thisWeeksPrediction = week;
    }
  });
  return (
    <>
      <div className="ml-4">
        <div className="flex flex-row items-center  mb-2">
          <button className="rounded-full bg-blue-20 border-2 border-c1 relative p-3 mr-2">
            <BsCalendarFill className="h-3 w-3 absolute fill-c1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </button>
          <h1 className="text-white font-thin text-xl   whitespace-nowrap">
            Select a week
          </h1>
        </div>
        <WeekSelect
          weekView={weekView}
          setWeekView={setWeekView}
          thisWeeksPrediction={thisWeeksPrediction}
          Picks={Picks}
        />
      </div>
      <div className="flex flex-col bg-white20 w-[95%] mx-auto rounded-[10px] p-4 h-fit mt-4 items-center">
        <h1 className="text-c1 text-5xl font-bold mr-4 whitespace-nowrap mb-1 w-[fit-content] ">
          {"Week " + weekView}
        </h1>
        <div className="flex w-[fit-content] flex-row items-center mb-2 text-red-600 bg-red20 border-2 border-red-600 rounded-[5px] px-2">
          <h1 className=" text-[10px] mr-2 whitespace-nowrap">Pick deadline</h1>
          <h1 className=" rounded-[5px]  whitespace-nowrap text-[10px] px-1">
            {date.toLocaleString("en-US", {
              day: "numeric",
              month: "numeric",
              hour: "numeric",
              minute: "numeric",
            }) + " ET"}
          </h1>
        </div>

        {(() => {
          if (thisWeeksPrediction) {
            let Team = getTeamData(thisWeeksPrediction.selectedWinner);

            return (
              <div className="flex flex-col w-full">
                <div className="text-c5 text-xl">Your Pick</div>

                <div
                  className={
                    "flex flex-row items-center  rounded-[10px] w-full pl-5 py-2 mb-2 box-border bg-[#151515] border-c5 border-2"
                  }
                >
                  <img
                    src={Team.WikipediaLogoUrl}
                    alt="no logo"
                    className="h-10 w-10 mr-4"
                  />

                  <div className="flex flex-row items-center">
                    <h1 className="text-lg text-c5 mr-1 ">{Team.City}</h1>
                    <h1 className="text-lg text-c5 mr-2 font-bold ">
                      {Team.Name}
                    </h1>
                    <FaLock className="w-5 h-5 fill-c5" />
                  </div>
                </div>
              </div>
            );
          }
        })()}

        <div className="flex flex-col mt-3 w-full">
          {matchUps.map((matchup, i) => {
            let gameDate = new Date(matchup.Date);

            return (
              <div
                key={i}
                className="flex flex-col border-t-2 border-c1 w-full mx-auto"
              >
                <div className="flex flex-row">
                  <h1 className="text-lg text-c1 mr-1 font-bold">
                    {gameDate
                      .toLocaleString("en-US", {
                        weekday: "short",
                      })
                      .replace(",", "")}
                  </h1>
                  <h1 className="text-lg text-c1 mr-2">
                    {" "}
                    {(
                      gameDate.toLocaleString("en-US", {
                        day: "numeric",
                        month: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      }) + " ET"
                    ).replace(",", "")}
                  </h1>
                  {(() => {
                    if (!(matchup.Channel == "null")) {
                      return (
                        <h1 className="text-lg text-c2 ">{matchup.Channel}</h1>
                      );
                    }
                  })()}
                </div>
                <TeamButton
                  gameKey={matchup.GameKey}
                  teamKey={matchup.HomeTeam}
                  selectedPick={selectedPick}
                  setSelectedPick={setSelectedPick}
                  setShowMenu={setShowMenu}
                  setSelectedGameKey={setSelectedGameKey}
                />
                <TeamButton
                  gameKey={matchup.GameKey}
                  teamKey={matchup.AwayTeam}
                  selectedPick={selectedPick}
                  setSelectedPick={setSelectedPick}
                  setShowMenu={setShowMenu}
                  setSelectedGameKey={setSelectedGameKey}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PickMenu;
