import NavBar from "../navbar/Navbar";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import Role from "./Role";
import Champ from "./Champ";
import Test from "../utils/test";

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
      return <Role formData={formData} setFormData={setFormData} setDisabled={setDisabled}/>;
    } else if (page === 1) {
      return <Champ />;
    }
  };
  let test = Test()
  console.log(test)

  return (
    <div className="formadd">
      <PageDisplay />
      {page === 0 ? (
        <Button disabled={disabled}>
          <ArrowForwardIcon
            onClick={() => {
              setPage((currPage) => currPage + 1);
              setDisabled(true)
            }}
            className="formadd__next"
            sx={{
              width: "100%",
              height: "10%",
            }}
          />
        </Button>
      ) : (
        <>
          <Button>
            <ArrowBackIcon
              onClick={() => {
                setPage((currPage) => currPage - 1);
                setDisabled(false)
              }}
              className="formadd__next"
              sx={{
                width: "50%",
                height: "10%",
                left: 0,
              }}
            />
          </Button>
          <Button disabled={disabled}>
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
          </Button>
        </>
      )}
      <NavBar />
    </div>
  );
}

export default Add;
