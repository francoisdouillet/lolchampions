import { useState } from "react";

const SheetMatchup = ({ sheet }) => {
  console.log(sheet.matchups);

  const [selectedMatchup, setSelectedMatchup] = useState(0);
  const [searchChampions, setSearchChampions] = useState("");

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchChampions(resultText);
  };

  const filteredChampions = sheet.matchups.filter((matchup) =>
  matchup.matchup.toLowerCase().includes(searchChampions.toLowerCase())
);

const handleChampionClick = (index) => {
  const originalIndex = sheet.matchups.findIndex(
    (matchup) => matchup.matchup === filteredChampions[index].matchup
  );
  setSelectedMatchup(originalIndex);
};

  return (
    <div className="champions__sheet--container">
      <h3>MATCHUP :</h3>
      <div className="matchups">
        {filteredChampions.length > 0 && (
          <>
            <h4>DIFFICULTE : {sheet.matchups[selectedMatchup].difficulty}</h4>
            <p>{sheet.matchups[selectedMatchup].notes}</p>
          </>
        )}
      </div>
      <div className="matchups__search">
        <input
          placeholder="Rechercher"
          onChange={handleInput}
          value={searchChampions}
        />
      </div>
      <div className="matchups__info">
        {filteredChampions.map((matchup, index) => (
          <img
            key={index}
            src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${matchup.matchup}.png`}
            alt={matchup.matchup}
            className={selectedMatchup === index ? "selected" : ""}
            onClick={() => handleChampionClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SheetMatchup;
