import { useEffect, useState } from "react";

const Allskillschamp = (champion) => {
    const [skills, setSkills] = useState()
    console.log(champion)
    useEffect(() => {
        fetch(
          `https://ddragon.leagueoflegends.com/cdn/13.5.1/data/fr_FR/champion/${champion}.json`
        )
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            const champSkills = response.data[champion].spells.map((spell) => {
                return { id: spell.id, name: spell.name };
              });
              setSkills(champSkills);
          })
    }, []);

    return skills
}

export default Allskillschamp