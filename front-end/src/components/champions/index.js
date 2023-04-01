import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import AllChampionSheet from "./championsheet"

const Champions = () => {
    return (
        <div className="champions">
            <h1>Vos fiches de champions</h1>
            <Link to="/champions/add">
                <Button variant="contained" sx={{fontWeight: 'bold', m: 2}}>Creer une fiche de champion</Button>
            </Link>
            <AllChampionSheet />
        </div>
    )
}

export default Champions