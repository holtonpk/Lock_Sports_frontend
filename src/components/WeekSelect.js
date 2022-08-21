import React, { useState } from "react";
import nflTimeFrames from "../assets/data/nflTimeFrames.json";
import { FaLock } from "react-icons/fa";
const WeekSelect = ({ setWeekView, weekView, Picks }) => {
  return (
    <>
      <div className="overflow-x-scroll noBar grid grid-flow-col gap-3">
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
                  "p-3 flex flex-col text-center relative rounded-full h-[40px] w-[40px] items-center overflow-hidden " +
                  back
                }
              >
                <FaLock className="h-6 w-6 fill-c1_20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <h1 className="text-xl text-white font- my-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                "p-3 flex flex-col text-center  relative rounded-full h-[40px] w-[40px] items-center " +
                back
              }
            >
              <h1 className="text-xl text-white my-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
