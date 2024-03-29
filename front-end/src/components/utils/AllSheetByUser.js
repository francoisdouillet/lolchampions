import { useState, useEffect } from "react";
import axios from "axios";

export default function AllSheetByUser () {
    const [sheets, setSheets] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        axios.get(`https://uptight-tam-pig.cyclic.app/api/champion/${userId}`)
            .then(response => {
                setSheets(response.data)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return sheets
}