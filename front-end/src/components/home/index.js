import NavBar from "../navbar/Navbar";
import Graphic from "./Graphic";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home({matchups}) {

    return (
        <div className="home">
            <Graphic matchups={matchups} />
            <Link to="/historic">
                <Button variant="contained">Historique</Button>
            </Link>
            <NavBar />
        </div>
    )
}

export default Home;