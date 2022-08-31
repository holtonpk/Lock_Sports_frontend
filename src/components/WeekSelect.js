import React, { useState } from "react";
import nflTimeFrames from "../assets/data/nflTimeFrames.json";
import { FaLock } from "react-icons/fa";
const WeekSelect = ({ setWeekView, weekView, Picks }) => {
  return (
    <>
      <div className="grid grid-flow-col gap-3 overflow-x-scroll noBar">
        {nflTimeFrames.map((week, i) => {
          let back = "bg-white20 ";
          let selected = false;
          if (weekView == week.Week) {
            back = "bg-c5";
            selected = true;
          }
          let thisWeeksPrediction = undefined;
          Picks.map((week) => {
            if (week.week == i + 1) {
              thisWeeksPrediction = week;
            }
          });

          if (thisWeeksPrediction && !selected) {
            return (
              <button
                key={i}
                onClick={() => setWeekView(week.Week)}
                className={
                  "p-3 flex flex-col text-center relative rounded-full h-[50px] w-[50px] items-center overflow-hidden " +
                  back
                }
              >
                <FaLock className="absolute -translate-x-1/2 -translate-y-1/2 h-9 w-9 fill-c1_20 top-1/2 left-1/2" />
                <h1 className="absolute my-auto text-3xl text-white -translate-x-1/2 -translate-y-1/2 font- top-1/2 left-1/2">
                  {week.Week}
                </h1>
              </button>
            );
          }

          let date = new Date(week.StartDate);

          return (
            <button
              key={i}
              onClick={() => setWeekView(week.Week)}
              className={
                "p-3 flex flex-col text-center  relative rounded-full h-[50px] w-[50px] items-center hover:bg-c5_20 " +
                back
              }
            >
              <h1 className="absolute my-auto text-3xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {week.Week}
              </h1>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default WeekSelect;
