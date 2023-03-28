import { useState } from "react";

const SheetMatchup = ({ sheet }) => {

  const [selectedMatchup, setSelectedMatchup] = useState(sheet.matchups[0]._id);
  const [searchChampions, setSearchChampions] = useState("");

  console.log(sheet.matchups[0]._id)

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchChampions(resultText);
  };

  const filteredChampions = sheet.matchups.filter((matchup) =>
    matchup.matchup.toLowerCase().includes(searchChampions.toLowerCase())
  );

  const selectedMatchupData = sheet.matchups.find(
    (matchup) => matchup._id === selectedMatchup
  );

  const handleChampionClick = (id) => {
    setSelectedMatchup(id);
  };

  return (
    <div className="champions__sheet--container">
      <h3>MATCHUP :</h3>
      <div className="matchups">
        {filteredChampions.length > 0 && (
          <>
            <h4>DIFFICULTE : {selectedMatchupData.difficulty}</h4>
            <p>{selectedMatchupData.notes}</p>
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
      <div className="matchups__image">
        {filteredChampions.map((matchup, index) => (
          <img
            key={matchup._id}
            src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${matchup.matchup}.png`}
            alt={matchup.matchup}
            className={selectedMatchup === matchup._id ? "selected" : ""}
            onClick={() => handleChampionClick(matchup._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SheetMatchup;
