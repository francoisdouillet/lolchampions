import { useState } from "react"
import SearchItems from "./SearchItems"

const ChooseItems = () => {
    const [itemsSelected, setItemsSelected] = useState([])
    const [itemsSet, setItemsSet] = useState([])
    
    console.log(itemsSelected)
    // const [itemsSet, setItemsSet] = useState()
    return (
        <div className="champions">
            <input type="text" placeholder="Titre"></input>
            <SearchItems setItemsSelected={setItemsSelected} itemsSelected={itemsSelected} />
            <div className="champions__items">
                {itemsSelected.map((item) => (
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/item/${item}`}></img>
                ))}
            </div>
        </div>
    )
}

export default ChooseItems