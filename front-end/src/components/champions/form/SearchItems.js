import { OutlinedInput } from "@mui/material";
import { useState } from "react";
import Allitems from "../../utils/Allitems";

function SearchItems({ itemsSets, setItemsSets, index }) {
  const items = Allitems();
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    const inputVal = e.target.value.trim().toLowerCase();
    setSearchVal(inputVal);
  };

  const filteredItems = items.filter((item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(searchVal);
  });

  function selectItem(image) {
    if (itemsSets[index].items.length === 8) {
      alert("Vous ne pouvez choisir que 8 objets");
    } else {
      const newItemSet = {
        ...itemsSets[index],
        items: [...itemsSets[index].items, image],
      };
      const newItemsSets = [...itemsSets];
      newItemsSets[index] = newItemSet;
      setItemsSets(newItemsSets)
    }
  }

  return (
    <div className="champions__searchitems">
      <OutlinedInput
        className="champions__searchitems--search"
        onChange={handleInput}
        value={searchVal}
        type="text"
        name="item-search"
        id="item-search"
        placeholder="Recherchez un objet"
        sx={{
          mt: 2,
          mb: 2,
        }}
      />
      <div className="champions__searchitems--items">
        {filteredItems.map((item) => (
          <img
            key={item.name}
            alt={item.name}
            src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item.image}`}
            onClick={() => {selectItem(item.image)}}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchItems;
