import NavBar from "../navbar/Navbar";
import { useState } from "react";
import Role from "./Role";
import Mychamp from "./Mychamp";
import Hischamp from "./HisChamp";
import Difficulty from "./Difficulty";
import Navigation from "./Navigation";

function Add() {
  const userId = localStorage.getItem('userId')
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    userId: userId,
    role: "",
    myChamp: "",
    hisChamp: "",
    difficulty: "",
    commentary: "",
    win: false,
    winMatchup: false,
  });

  //console.log(formData);
  console.log(page)

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Role
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <Mychamp
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 2) {
      return (
        <Hischamp
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return <Difficulty formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    }
  };

  return (
    <div className="formadd">
      <PageDisplay />
      <Navigation page={page} setPage={setPage} />
      <NavBar />
    </div>
  );
}

export default Add;
