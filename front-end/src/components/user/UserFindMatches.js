import { Button, TextField } from "@mui/material";
import { useState } from "react";

const UserFindMatches = () => {
  const [username, setUsername] = useState("");

  async function getMatches() {
    console.log(username);

    try {
      // const response = await fetch(
      //   `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=RGAPI-4b544145-49c2-424d-9cc0-2bf92f56a5ca`
      // );
      // const data = await response.json();
      // console.log(data)
      // const summonerId = data.accountId;

      const test = await fetch (
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/xwi1HQDj6cWSsK8QGBRwl6OiW_P53TftFuBbat52R1xfoQ?api_key=RGAPI-4b544145-49c2-424d-9cc0-2bf92f56a5ca`
      )
      const dataTest = await test.json()
      console.log(dataTest)
      
      // const matchResponse = await fetch(
      //   `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=1&api_key=RGAPI-4b544145-49c2-424d-9cc0-2bf92f56a5ca`
      // );
      // const matchData = await matchResponse.json();
      // console.log(matchData);

      // const matchResponseTest = await fetch(
      //   `https://europe.api.riotgames.com/lol/match/v5/matches/${matchData}?api_key=RGAPI-4b544145-49c2-424d-9cc0-2bf92f56a5ca`
      // );
      // const matchTestData = await matchResponseTest.json();
      // console.log(matchTestData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2 style={{ color: "white" }}>Trouve tes 20 derniers matchs</h2>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button variant="contained" onClick={getMatches}>
        Chercher
      </Button>
    </>
  );
};

export default UserFindMatches;
