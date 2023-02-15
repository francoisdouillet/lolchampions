import { useEffect, useState } from "react";

export default function Allsummonersspells() {
  const [summonersSpells, setSummonersSpells] = useState([]);

  useEffect(() => {
      fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.3.1/data/fr_FR/summoner.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          const itemArray = Object.keys(response.data).map(key => {
            return {
              name: response.data[key].name,
              image: response.data[key].image.full
            }
          });
          setSummonersSpells(itemArray);
        });
  }, []);

  return summonersSpells
}
