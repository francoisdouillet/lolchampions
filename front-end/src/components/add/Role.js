import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Role({formData, setFormData, page, setPage}) {
  return (
    <div>
      <h1>Quel rôle jouais-tu durant cette partie?</h1>
      <FormControl sx={{
        width: 200,
        mt: 4,
        mb: 4,
      }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
          label="role"
          sx={{
            color: "white",
            border: "2px solid white",
            '& .MuiSvgIcon-root' : {
              color: "white"
            },
          }}
          onChange={(e) => {
            setFormData({...formData, role: e.target.value})
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
