import { Button, MenuItem, Select } from "@mui/material"
import Searchchamp from "../../utils/Searchchamp"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const ChooseMatchup = ({ formData }) => {
    const [matchup, setMatchup] = useState()
    return (
        <div className="champions">
            <h1>Enregistre les matchups contre {formData.champions}</h1>
            <div>
                {matchup ? <div>{matchup}</div> : <h2>Choisis ton champion</h2>}
                <Button>
                    <DeleteIcon />
                </Button>
            </div>
            {matchup ? (
                <div>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${matchup}.png`} />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={formData.role}
                        label="role"
                        // onChange={(e) => {
                        //     setFormData({ ...formData, role: e.target.value })
                        //     setPage(page + 1)
                        // }}
                    >
                        <MenuItem value={"facile"}>Facile</MenuItem>
                        <MenuItem value={"egale"}>Egale</MenuItem>
                        <MenuItem value={"difficile"}>Difficile</MenuItem>
                        <MenuItem value={"injouable"}>Injouable</MenuItem>
                    </Select>
                    <textarea placeholder="Notes"/>
                </div>) :
                <Searchchamp className="champions__matchups" setMatchup={setMatchup} />
            }

        </div>
    )
}

export default ChooseMatchup