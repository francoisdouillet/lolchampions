import Graphic from "./Graphic";
import Allmatchups from "../utils/Allmatchups";

function Home() {

    const matchups = Allmatchups();

    return (
        <div className="home">
            <Graphic matchups={matchups} />
        </div>
    )
}

export default Home;