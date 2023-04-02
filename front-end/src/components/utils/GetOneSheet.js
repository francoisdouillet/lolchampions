import { useState, useEffect } from "react";
import axios from "axios";

export default function GetOneSheet ({id}) {
    const [sheet, setSheet] = useState([])
    useEffect(() => {
        axios.get(`https://uptight-tam-pig.cyclic.app/api/champion/sheet/${id}`)
            .then(response => {
                setSheet(response.data)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return sheet
}