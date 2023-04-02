import { useState, useEffect } from "react";
import axios from "axios";

export default function Allmatchups () {
    const [matchups, setMatchups] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        axios.get(`https://uptight-tam-pig.cyclic.app/api/matchup/${userId}`)
            .then(response => {
                setMatchups(response.data.reverse())
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return matchups
}