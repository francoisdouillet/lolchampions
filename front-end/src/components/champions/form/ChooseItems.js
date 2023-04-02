import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SearchItems from "./SearchItems";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ChooseItems = ({ formData, setFormData, page, setPage, modify }) => {
  const [itemsSets, setItemsSets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.items.length === 0) {
      setItemsSets([
        {
          title: "",
          items: [],
        },
      ]);
    } else {
      setItemsSets(formData.items);
    }
  }, []);

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

  function removeItemFromSet(index, item) {
    const newItemsSets = [...itemsSets];
    newItemsSets[index] = {
      ...newItemsSets[index],
      items: newItemsSets[index].items.filter((i) => i !== item),
    };
    setItemsSets(newItemsSets);
  }

  function onSubmit() {
    if (modify === true) {
      axios
        .put(`https://uptight-tam-pig.cyclic.app/api/champion/sheet/${formData._id}`, {
          items: itemsSets,
        })
        .then((res) => {
          console.log(res.data);
          alert("Item sauvegardé");
          navigate(`/champions/${formData._id}`);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFormData({ ...formData, items: itemsSets });
      setPage(page + 1);
    }
  }

  return (
    <div className="champions" style={{ margin: modify ? 0 : undefined }}>
      {modify === true ? "" : <h1>Quels items utilisez-vous ?</h1>}
      {itemsSets.map((setItems, index) => (
        <div key={index} className="">
          <div className="champions__input">
            <div>
              <TextField
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
            </div>
          </div>
          <SearchItems
            setItemsSets={setItemsSets}
            itemsSets={itemsSets}
            index={index}
          />
          <div className="champions__items">
            {setItems.items.map((item) => (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item}`}
                onClick={() => removeItemFromSet(index, item)}
              ></img>
            ))}
          </div>
        </div>
      ))}
      <Button variant="contained" onClick={addItemSet}>
        Ajoutez un ensemble d'items
      </Button>
      {modify === true ? (
        <Button variant="contained" sx={{ m: 2 }} onClick={onSubmit}>
          Enregistrer
        </Button>
      ) : (
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
      )}
    </div>
  );
};

export default ChooseItems;
