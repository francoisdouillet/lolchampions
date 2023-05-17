import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

const UserFindMatches = () => {
  // const [username, setUsername] = useState("");

  // async function getMatches() {
  //   console.log(username);

  //   try {
  //     // const response = await fetch(
  //     //   `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed`
  //     // );
  //     // const data = await response.json();
  //     // console.log(data)
  //     // const summonerId = data.accountId;

  //     const test = await fetch (
  //       `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/xwi1HQDj6cWSsK8QGBRwl6OiW_P53TftFuBbat52R1xfoQ?api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed`
  //     )
  //     const dataTest = await test.json()
  //     console.log(dataTest)
      
  //     // const matchResponse = await fetch(
  //     //   `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=1&api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed`
  //     // );
  //     // const matchData = await matchResponse.json();
  //     // console.log(matchData);

  //     // const matchResponseTest = await fetch(
  //     //   `https://europe.api.riotgames.com/lol/match/v5/matches/${matchData}?api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed`
  //     // );
  //     // const matchTestData = await matchResponseTest.json();
  //     // console.log(matchTestData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // return (
  //   <>
  //     <h2 style={{ color: "white" }}>Trouve tes 20 derniers matchs</h2>
  //     <TextField
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     />
  //     <Button variant="contained" onClick={getMatches}>
  //       Chercher
  //     </Button>
  //   </>
  // );

  const [summonerName, setSummonerName] = useState("");
  const [summonerId, setSummonerId] = useState("");
  const [matchList, setMatchList] = useState([]);

  const getSummonerId = async () => {
    try {
      const response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed`);
      setSummonerId(response.data.puuid);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const getMatchList = async () => {
    try {
      const response = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=20&api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed`);
      setMatchList(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const Test = async () => {
    try {
      const response = await axios.get('https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/zEV59LhEOVrIMbAIukqn64C2hn4rpUx3YFj7GFyGBwwoJKE?api_key=RGAPI-c4a5d030-4099-4728-9fad-08a1c87eeeed');
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  Test()

  const handleSubmit = (event) => {
    event.preventDefault();
    getSummonerId();
  };

  useEffect(() => {
    if (summonerId) {
      getMatchList();
    }
  }, [summonerId]);

  console.log(matchList)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          placeholder="Enter Summoner Name"
        />
        <button type="submit">Get Matches</button>
      </form>
      {matchList.length > 0 && matchList.map((match, index) => (
        <div key={index} style={{color: 'white'}}>
          <p>Game Id: {match}</p>
        </div>
      ))}
    </div>
  );
}


export default UserFindMatches;
