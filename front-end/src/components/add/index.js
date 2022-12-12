import NavBar from "../navbar/Navbar";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import Role from "./Role";
import Mychamp from "./Mychamp";
import Hischamp from "./HisChamp";

function Add() {
  const [page, setPage] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    role: "",
    myChamp: "",
    hisChamp: "",
    difficulty: "",
  });

  console.log(formData)

  const PageDisplay = () => {
    if (page === 0) {
      return <Role formData={formData} setFormData={setFormData} setDisabled={setDisabled} page={page} setPage={setPage}/>;
    } else if (page === 1) {
      return <Mychamp formData={formData} setFormData={setFormData} setDisabled={setDisabled} page={page} setPage={setPage}/>;
    } else if (page === 2) {
      return <Hischamp formData={formData} setFormData={setFormData} setDisabled={setDisabled} page={page} setPage={setPage}/>
    }
  };

  return (
    <div className="formadd">
      <PageDisplay />
      {page === 0 ? (
        <Button></Button>
      ) : (
        <>
          <Button>
            <ArrowBackIcon
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="formadd__back"
              sx={{
                width: "100%",
                height: "10%",
                left: 0,
              }}
            />
          </Button>
        </>
      )}
      <NavBar />
    </div>
  );
}

export default Add;
