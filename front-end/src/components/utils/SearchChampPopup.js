import Allchamp from "./Allchamp";
import { useState } from "react";
import { Button, OutlinedInput } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SearchChampPopup = ({ isOpenChamp, setIsOpenChamp, handleMatchupChange, index }) => {
  const champs = Allchamp();
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchVal(resultText);
  };

  const filteredProducts = Object.keys(champs).filter((product) => {
    return product.includes(searchVal);
  });

  function selected(product) {
    handleMatchupChange({ target: { name: "matchup", value: product } }, index);
    setIsOpenChamp(false);
  }

  return (
    <div className={`champions__modify--choose ${isOpenChamp ? "open" : ""}`}>
      <Button onClick={() => setIsOpenChamp(false)} className="champions__modify--close">
        <CloseIcon fontSize="large" />
      </Button>
      <OutlinedInput
        onChange={handleInput}
        value={searchVal}
        type="text"
        name="product-search"
        id="product-search"
        placeholder="Recherchez un champion"
        sx={{
          mb: 2,
          mr: 2,
          ml: 2,
          border: "2px solid white",
          color: "white"
        }}
      />
      <div>
        {filteredProducts.map((product, i) => (
          <img
            onClick={() => {
              selected(product);
            }}
            key={i}
            alt={product}
            src={`https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${product}.png`}
            style={{
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchChampPopup;
