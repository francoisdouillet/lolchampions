import { OutlinedInput } from "@mui/material";
import { useState } from "react";
import Allchamps from "../utils/Allchamp";

function Searchchamp({ champ, page, setPage }) {
  const champs = Allchamps();
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchVal(resultText);
  };

  const filteredProducts = Object.keys(champs).filter((product) => {
    return product.includes(searchVal);
  });

  //return cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());

  function selected(product) {
    champ(product)
    setPage(page + 1)
  }

  return (
    <div className="searchchampions">
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
          />
        ))}
      </div>
    </div>
  );
}

export default Searchchamp;
