import NavBar from "../navbar/Navbar";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Role from "./Role";
import Champ from "./Champ";

function Add() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    role: "",
    myChamp: "",
    hisChamp: "",
    difficulty: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Role />;
    } else if (page === 1) {
      return <Champ />;
    }
  };
  console.log(page);
  return (
    <div>
      <PageDisplay />
      {page === 0 ? (
        <ArrowForwardIcon
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
          className="formadd__next"
          sx={{
            width: "100%",
            height: "10%",
          }}
        />
      ) : (
        <>
          <ArrowBackIcon
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="formadd__next"
            sx={{
              width: "50%",
              height: "10%",
              left: 0,
            }}
          />
          <ArrowForwardIcon
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
            className="formadd__next"
            sx={{
              width: "50%",
              height: "10%",
              right: 0,
            }}
          />
        </>
      )}
      <NavBar />
    </div>
  );
}

export default Add;
