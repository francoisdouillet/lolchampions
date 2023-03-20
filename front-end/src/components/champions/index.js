import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import AllChampionSheet from "./championsheet"

const Champions = () => {
    return (
        <div className="champions">
            <h1>Bonjour</h1>
            <Link to="/champions/add">
                <Button variant="contained">Creer une fiche de champion</Button>
            </Link>
            <h2>Vos fiches de champions</h2>
            <AllChampionSheet />
        </div>
    )
}

export default Champions