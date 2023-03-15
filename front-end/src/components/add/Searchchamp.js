import { OutlinedInput } from "@mui/material";
import { useState } from "react";
import Allchamps from "../utils/Allchamp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";


function Searchchamp({ champ, page, setPage }) {
  const champs = Allchamps();
  const [searchVal, setSearchVal] = useState("");
  const [selectedChamp, setSelectedChamp] = useState(null)
  console.log(selectedChamp)

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchVal(resultText);
  };

  const filteredProducts = Object.keys(champs).filter((product) => {
    return product.includes(searchVal);
  });

  function selected(product) {
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
      <div className="searchchampions__champ">
        {filteredProducts.map((product, i) => (
          <img
            onClick={() => { selected(product) }}
            key={i}
            alt={product}
            src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${product}.png`}
            style={{
              border: selectedChamp === product ? "3px solid blue" : "",
              cursor: "pointer"
            }}
          />
        ))}
      </div>
      <div className='champions__navigation'>
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
        <Button variant='contained' sx={{ marginRight: '8vw', height: '100%' }} onClick={onSubmit}>
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default Searchchamp;
