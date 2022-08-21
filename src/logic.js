import teamData2 from "./assets/data/teamData2.json";
import nflSchedule from "./assets/data/nflSchedule.json";

const getTeamData = (Key) => {
  let answer = undefined;
  teamData2.map((team) => {
    if (team.Key == Key) {
      answer = team;
    }
  });
  return answer;
};

const getGameData = (gameKey) => {
  let Matchup = undefined;
  nflSchedule.map((game) => {
    if (gameKey == game.GameKey) {
      Matchup = game;
    }
  });

  return Matchup;
};

export { getTeamData, getGameData };
