import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModifyRune = ({isOpen, setIsOpen}) => {
  return (
    <div className={`champions__modify ${isOpen ? "open" : ""}`}>
      <Button
        onClick={() => setIsOpen(false)}
        className="champions__modify--close"
      >
        <CloseIcon fontSize="large" />
      </Button>
      
      <div className="champions__modify--button">
        <Button variant="contained" sx={{mr: 2}}>
          Ajouter un ensemble de rune
        </Button>
        <Button variant="contained" >
          Enregistrer
        </Button>
      </div>
    </div>
  );
};

export default ModifyRune
