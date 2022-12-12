import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Role({formData, setFormData, setDisabled, page, setPage}) {
  return (
    <div>
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
          value={formData.role}
          label="role"
          onChange={(e) => {
            setFormData({...formData, role: e.target.value})
            setDisabled(false)
            setPage(page + 1)
          }}
        >
          <MenuItem value={"toplane"}>Toplane</MenuItem>
          <MenuItem value={"jungle"}>Jungle</MenuItem>
          <MenuItem value={"midlane"}>Midlane</MenuItem>
          <MenuItem value={"adc"}>ADC</MenuItem>
          <MenuItem value={"support"}>Support</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Role;
