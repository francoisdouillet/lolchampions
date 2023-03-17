import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import SearchItems from "./SearchItems";
import DeleteIcon from "@mui/icons-material/Delete";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChooseItems = ({formData, setFormData, page, setPage}) => {
  const [itemsSets, setItemsSets] = useState([]);

  useEffect(() => {
    if(formData.items.length === 0) {
        setItemsSets([{
          title: "",
          items: [],
        }])
    } else {
        setItemsSets(formData.items)
    }
},[])

  function updateTitle(index, title) {
    const newItemSet = {
      ...itemsSets[index],
      title: title,
    };
    const newItemsSets = [...itemsSets];
    newItemsSets[index] = newItemSet;
    setItemsSets(newItemsSets);
  }

  function addItemSet() {
    setItemsSets([
      ...itemsSets,
      {
        title: "",
        items: [],
      },
    ]);
  }

  function onSubmit() {
      setFormData({...formData, items: itemsSets})
      setPage(page + 1)
  }

  console.log(itemsSets);
  return (
    <div className="champions">
      <h1>Quels items utilisez-vous ?</h1>
      {itemsSets.map((setItems, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Titre"
            value={setItems.title}
            onChange={(event) => updateTitle(index, event.target.value)}
          />
          <Button
            onClick={() => {
              if (window.confirm("Etes vous sur ?")) {
                setItemsSets(itemsSets.filter((_, i) => i !== index));
              }
            }}
          >
            <DeleteIcon />
          </Button>
          <SearchItems
            setItemsSets={setItemsSets}
            itemsSets={itemsSets}
            index={index}
          />
          <div className="champions__items">
            {setItems.items.map((item) => (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item}`}
              ></img>
            ))}
          </div>
        </div>
      ))}
      <Button variant="contained" onClick={addItemSet}>
        Ajoutez un ensemble d'items
      </Button>
      <div className="champions__navigation">
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
        <Button
          variant="contained"
          sx={{ marginRight: "8vw", height: "100%" }}
          onClick={onSubmit}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
};

export default ChooseItems;
