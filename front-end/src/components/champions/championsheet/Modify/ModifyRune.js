import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChooseRunes from "../../form/ChooseRunes";

const ModifyRune = ({isOpen, setIsOpen, sheet}) => {

  const formData = sheet
  return (
    <div className={`champions__modify ${isOpen ? "open" : ""}`}>
      <Button
        onClick={() => setIsOpen(false)}
        className="champions__modify--close"
      >
        <CloseIcon fontSize="large" />
      </Button>
      <ChooseRunes formData={formData} modify={true} />
    </div>
  );
};

export default ModifyRune
