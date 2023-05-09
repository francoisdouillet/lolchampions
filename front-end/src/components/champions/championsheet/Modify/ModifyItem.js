// import { Button, Modal } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import ChooseItems from "../../form/ChooseItems";

// const ModifyItem = ({isOpen, setIsOpen, sheet}) => {
//   const formData = sheet
//   return (
//     <div className={`champions__modify ${isOpen ? "open" : ""}`}>
//       <Button
//         onClick={() => setIsOpen(false)}
//         className="champions__modify--close"
//       >
//         <CloseIcon fontSize="large" />
//       </Button>
//       <ChooseItems formData={formData} modify={true}/>
//     </div>
//   );
// };

// export default ModifyItem

import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChooseItems from "../../form/ChooseItems";

const ModifyItem = ({isOpen, setIsOpen, sheet}) => {
  const formData = sheet;
  
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      {/* <Box className="champions__modify">
        <Button onClick={handleClose} className="champions__modify--close">
          <CloseIcon fontSize="large" />
        </Button>
        <ChooseItems formData={formData} modify={true} />
      </Box> */}
      <p>salut</p>
    </Modal>
  );
};

export default ModifyItem;
