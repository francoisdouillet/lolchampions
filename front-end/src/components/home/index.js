import Graphic from "./Graphic";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Allmatchups from "../utils/Allmatchups";

function Home() {

    const matchups = Allmatchups();

    return (
        <div className="home">
            <Graphic matchups={matchups} />
            <Link to="/historic">
                <Button variant="contained">Historique</Button>
            </Link>
        </div>
    )
}

export default Home;