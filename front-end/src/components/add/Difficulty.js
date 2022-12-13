import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MenuItem, Select, TextField, Button } from "@mui/material";

function Difficulty({ formData }) {
  return (
    <>
      <h1>Comment était le match-up ?</h1>
      <div className="formadd__champions">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${formData.myChamp}.png`}
        />
        <ArrowForwardIcon />
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${formData.hisChamp}.png`}
        />
      </div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        //value={formData.role}
        sx={{
            width: 200,
            mt: 1,
            mb: 3,
          }}
      >
        <MenuItem value={"facile"}>Facile</MenuItem>
        <MenuItem value={"moyen"}>Moyen</MenuItem>
        <MenuItem value={"difficile"}>Difficile</MenuItem>
        <MenuItem value={"hard"}>Hard</MenuItem>
      </Select>
      <h2>Commentaires</h2>
      <TextField sx={{
        width: '80%',
        mb: 3,
        mt: 2,
      }}
      id="outlined-multiline-static"
      multiline
      rows={6}/>
      <Button variant="contained" sx={{width: '50%', fontWeight: 'bold'}}>SOUMETTRE</Button>
    </>
  );
}

export default Difficulty;
