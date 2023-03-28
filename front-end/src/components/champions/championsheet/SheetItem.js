import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const SheetItem = ({ sheet }) => {
  return (
    <div className="champions__sheet--container">
      <h3>ITEMS :</h3>
      <IconButton color="primary" sx={{ padding: 0 }} className="itemModify">
        <EditIcon />
      </IconButton>
      {sheet.items.map((singleSheet, index) => (
        <div className="items" key={index}>
          <h3>{singleSheet.title}</h3>
          {singleSheet.items.map((item, i) => (
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item}`} alt={item}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SheetItem;
