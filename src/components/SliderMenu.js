import React, { useState } from "react";

const SliderMenu = ({ Options }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex bg-white20 flex-row w-full justify-between shadow-lg mx-auto px-6 rounded-full py-3">
      {Options.map((option, i) => {
        let background = "text-white2";
        if (selected == i) {
          background = "bg-white text-c3";
        }
        return (
          <button key={i} onClick={() => setSelected(i)}>
            <div
              key={i}
              className={
                "text-lg px-3 py-1 rounded-[10px] overflow-hidden font-bold " +
                background
              }
            >
              {option}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SliderMenu;
