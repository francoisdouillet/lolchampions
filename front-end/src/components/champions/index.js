import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Champions = () => {
    return (
        <div className="champions">
            <h1>Bonjour</h1>
            <Link to="/champions/add">
                <Button variant="contained">Creer une fiche de champion</Button>
            </Link>
        </div>
    )
}

export default Champions