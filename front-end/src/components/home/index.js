import NavBar from "../navbar/Navbar";
import Graphic from "./Graphic";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [matchups, setMatchups] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        axios.get(`http://localhost:3000/api/matchup/${userId}`)
            .then(response => {
                setMatchups(response.data)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <div>
            <Graphic matchups={matchups}/>
            <NavBar />
        </div>
    )
}

export default Home;