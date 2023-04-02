import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import ModifyItem from "./Modify/ModifyItem";
import { useState } from "react";

const SheetItem = ({ sheet }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="champions__sheet--container">
      <h3>ITEMS :</h3>
      <IconButton
        color="primary"
        sx={{ padding: 0 }}
        className="itemModify"
        onClick={() => setIsOpen(true)}
      >
        <EditIcon />
      </IconButton>
      {/*POPUP POUR MODIFIER ITEM*/}
      <ModifyItem isOpen={isOpen} setIsOpen={setIsOpen} sheet={sheet} />
      {sheet.items && (
        <>
          {sheet.items.map((singleSheet, index) => (
            <div className="champions__sheet--row items" key={index}>
              <h3>{singleSheet.title}</h3>
              {singleSheet.items.map((item, i) => (
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item}`}
                  alt={item}
                  key={i}
                />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SheetItem;
