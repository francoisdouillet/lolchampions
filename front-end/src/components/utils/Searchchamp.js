import { OutlinedInput } from "@mui/material";
import { useState } from "react";
import Allchamps from "./Allchamp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";


function Searchchamp({ champ, page, setPage, className, setMatchupsSets, matchupsSets, index }) {
  const champs = Allchamps();
  const [searchVal, setSearchVal] = useState("");
  const [selectedChamp, setSelectedChamp] = useState(null)
  // console.log(selectedChamp)

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchVal(resultText);
  };

  const filteredProducts = Object.keys(champs).filter((product) => {
    return product.includes(searchVal);
  });

  function selected(product) {
    if(className === "champions__matchups--search") {
      const alreadyExists = matchupsSets.some(set => set.matchup === product);
      if (alreadyExists) {
        alert('Ce champion est déjà sélectionné');
        return;
      }
      const newMatchupSet = {
        ...matchupsSets[index],
        matchup: product
    };
    const newMatchupSets = [...matchupsSets];
    newMatchupSets[index] = newMatchupSet;
    setMatchupsSets(newMatchupSets);
    }
    setSelectedChamp(product)
  }

  function onSubmit() {
    champ(selectedChamp)
    if (selectedChamp !== null) {
      setPage(page + 1)
    } else {
      alert('Veuillez séléctionner un champion')
    }
  }

  return (
    <div className={`searchchampions`}>
      <OutlinedInput
        className="searchchampions__search"
        onChange={handleInput}
        value={searchVal}
        type="text"
        name="product-search"
        id="product-search"
        placeholder="Recherchez un champion"
        sx={{
          mt: 2,
          mb: 2,
        }}
      />
      <div className={`${className} searchchampions__champ`}>
        {filteredProducts.map((product, i) => (
          <img
            onClick={() => { selected(product) }}
            key={i}
            alt={product}
            src={`https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${product}.png`}
            style={{
              border: selectedChamp === product ? "3px solid #E6AC71" : "",
              borderRadius: '8px',
              cursor: "pointer"
            }}
          />
        ))}
      </div>
      {className !== "champions__matchups" && (<div className='champions__navigation'>
        <Button>
          <ArrowBackIcon
            onClick={() => {
              setPage((page) => page - 1);
            }}
            sx={{
              width: "50vw",
              height: "8vh",
            }}
          />
        </Button>
        <Button variant='contained' sx={{ margin : '0 auto',  height: '100%' }} onClick={onSubmit}>
          Suivant
        </Button>
      </div>)}
    </div>
  );
}

export default Searchchamp;
