import {useState, useEffect} from 'react'

function Test() {
    const [champs, setChamps] = useState([]);
    useEffect(() => {
        fetch(
          "https://ddragon.leagueoflegends.com/cdn/12.22.1/data/fr_FR/champion.json"
        )
          .then((response) => {
            return response.json();
          })
          .then((response) => setChamps(response.data));
      }, []);

      return champs
}    

export default Test