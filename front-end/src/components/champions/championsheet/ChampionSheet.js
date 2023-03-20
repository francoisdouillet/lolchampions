import { useParams } from "react-router-dom"
import GetOneSheet from "../../utils/GetOneSheet"

const ChampionSheet = () => {
    const sheetId = useParams()
    const sheet = GetOneSheet(sheetId)
    return (
        <>
            <p>elle est ici la page</p>
        </>
    )
}
export default ChampionSheet