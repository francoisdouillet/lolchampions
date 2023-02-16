import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import NavBar from "../navbar/Navbar"

const Champions = () => {
    return (
        <div className="champions">
            <h1>Bonjour</h1>
            <Link to="/champions/add">
                <Button variant="contained">Creer une fiche de champion</Button>
            </Link>
            <NavBar />
        </div>
    )
}

export default Champions