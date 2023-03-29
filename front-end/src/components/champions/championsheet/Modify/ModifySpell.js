import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChooseSpells from "../../form/ChooseSpells";

const ModifySpell = ({isOpen, setIsOpen, sheet}) => {

  const formData = sheet
  return (
    <div className={`champions__modify ${isOpen ? "open" : ""}`}>
      <Button
        onClick={() => setIsOpen(false)}
        className="champions__modify--close"
      >
        <CloseIcon fontSize="large" />
      </Button>
      <ChooseSpells formData={formData} modify={true} />
    </div>
  );
};

export default ModifySpell
