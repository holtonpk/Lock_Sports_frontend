import React from "react";
import teamData2 from "../assets/data/teamData2.json";
import { getTeamData } from "../logic.js";

const TeamButton = ({
  teamKey,
  selectedPick,
  setSelectedPick,
  setShowMenu,
  setSelectedGameKey,
  gameKey,
}) => {
  let Team = getTeamData(teamKey);
  let styleText = "text-c1";
  let styleBg = " border-2 border-[#151515]";

  if (teamKey == selectedPick) {
    styleText = "text-c2";
    styleBg = " border-2 border-c5 ";
  }
  try {
    return (
      <button
        onClick={() => (
          setSelectedPick(Team.Key),
          setShowMenu(true),
          setSelectedGameKey(gameKey)
        )}
        className={
          "flex flex-row items-center  rounded-[10px] w-full pl-5 py-2 mb-2 box-border bg-[#151515]" +
          styleBg
        }
      >
        <img
          src={Team.WikipediaLogoUrl}
          alt="no logo"
          className="h-10 w-10 mr-4"
        />

        <div className="flex flex-row">
          <h1 className={"text-lg text-c1 mr-1 " + styleText}>{Team.City}</h1>
          <h1 className={"text-lg text-c1 mr-2 font-bold " + styleText}>
            {Team.Name}
          </h1>
        </div>
      </button>
    );
  } catch {
    console.log(Team);
  }
};

export default TeamButton;
