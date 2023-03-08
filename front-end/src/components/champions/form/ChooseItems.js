import { useState } from "react"
import SearchItems from "./SearchItems"

const ChooseItems = () => {

    const [itemsSet, setItemsSet] = useState()
    return (
        <div className="champions">
            <SearchItems />
        </div>
    )
}

export default ChooseItems