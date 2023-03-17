import { Button } from "@mui/material";
import { useState } from "react";
import ChooseChampion from "./ChooseChampion";
import ChooseItems from "./ChooseItems";
import ChooseMatchup from "./ChooseMatchup";
import ChooseRole from "./ChooseRole";
import ChooseRunes from "./ChooseRunes";
import ChooseSkills from "./ChooseSkills";
import ChooseSpells from "./ChooseSpells";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ChampionsForm = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate()

  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    userId: userId,
    role: "",
    champion: "",
    spells: [],
    runes: [],
    items: [],
    skills: [],
    matchups: [],
  });
  console.log(formData);


  async function onSubmit() {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/champion/",
        formData
      );
      console.log(response);
      alert("Fiche de champion ajouté !");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error)
    }
  }



  const PageDisplay = () => {
    if (page === 0) {
      return (
        <ChooseRole
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <ChooseChampion
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 2) {
      return (
        <ChooseSpells
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return (
        <ChooseRunes
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 4) {
      return (
        <ChooseItems
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 5) {
        return (
            <ChooseSkills 
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            />
        )
    } else if (page === 6) {
      return (
        <ChooseMatchup 
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
        />
      )
    } else if (page === 7) {
      return (
        <div>
          <h1>Voulez-vous publiez la fiche de champion</h1>
          <Button onClick={onSubmit}>Ajoutez</Button>
        </div>
      )
    }
  };
  return (
    <>
      <PageDisplay />
    </>
  );
};

export default ChampionsForm;
