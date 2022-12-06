import { useEffect, useState } from "react";
import { OutlinedInput } from '@mui/material';
export default function Allchamp() {
  const [champs, setChamps] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.22.1/data/fr_FR/champion.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => setChamps(response.data));
  }, []);

  const handleInput = (e) => {
    let firstLeter = e.target.value.charAt(0).toUpperCase();
    let resultText = firstLeter + e.target.value.slice(1);
    setSearchVal(resultText);
  };

  const filteredProducts = Object.keys(champs).filter((product) => {
    return product.includes(searchVal);
  });

  return (
    <div className="champions">
      <OutlinedInput
      className="champions__search"
        onChange={handleInput}
        value={searchVal}
        type="text"
        name="product-search"
        id="product-search"
        placeholder="Recherchez un champion"
        sx={{
            mt: 2,
            mb: 2
        }}
      />
      <div className="champions__champ">
      {filteredProducts.map((product) => {
        return (
          <img
            id={product}
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${product}.png`}
          />
        );
      })}
      </div>
    </div>
  );
}
