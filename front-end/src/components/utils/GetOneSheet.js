import { useState, useEffect } from "react";
import axios from "axios";

export default function GetOneSheet (sheetId) {
    const [sheet, setSheet] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/champion/sheet/${sheetId.id}`)
            .then(response => {
                setSheet(response.data)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return sheet
}