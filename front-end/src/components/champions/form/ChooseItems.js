import Allitems from "../../utils/Allitems"
import SearchItems from "./SearchItems"

const ChooseItems = () => {

    const items = Allitems()
    console.log(items)
    return (
        <div className="champions">
            <SearchItems />
        </div>
    )
}

export default ChooseItems