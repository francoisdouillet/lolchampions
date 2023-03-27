import { useState } from "react";

const SheetItem = ({ sheet }) => {
  const [indexItem, setIndexItem] = useState(0);
  return (
    <div className="champions__sheet--container">
        <h3>ITEMS :</h3>
        {sheet.items.map((singleSheet, index) => (
            <div className="items" key={index}>
            <h3>{singleSheet.title}</h3>
            {singleSheet.items.map((item, i) => (
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item}`}/>
            ))}
            </div>
        ))}
    </div>
  );
};

export default SheetItem;
