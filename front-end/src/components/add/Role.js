import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Role() {
  return (
    <div className="formadd">
      <h1>Quels rôles jouais-tu durant cette partie?</h1>
      <FormControl sx={{
        width: 200,
        mt: 4,
        mb: 4,
      }}>
        <InputLabel id="demo-simple-select-filled-label">Rôle</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={role}
          label="role"
          //onChange={handleChange}
        >
          <MenuItem value={"toplane"}>Toplane</MenuItem>
          <MenuItem value={"jungle"}>Jungle</MenuItem>
          <MenuItem value={"midlane"}>Midlane</MenuItem>
          <MenuItem value={"ADC"}>ADC</MenuItem>
          <MenuItem value={"support"}>Support</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Role;
