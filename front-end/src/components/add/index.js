import NavBar from "../navbar/Navbar";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import Role from "./Role";
import Mychamp from "./Mychamp";
import Hischamp from "./HisChamp";
import Difficulty from "./Difficulty";

function Add() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    role: "",
    myChamp: "",
    hisChamp: "",
    difficulty: "",
    commentary: "",
  });

  console.log(formData)

  const PageDisplay = () => {
    if (page === 0) {
      return <Role formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;
    } else if (page === 1) {
      return <Mychamp formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;
    } else if (page === 2) {
      return <Hischamp formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>
    } else if (page === 3) {
      return <Difficulty formData={formData}/>
    }
  };

  return (
    <div className="formadd">
      <PageDisplay />
      {page === 3 ? (
        <></>
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
