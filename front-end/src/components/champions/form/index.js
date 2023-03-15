import { useState } from "react";
import ChooseChampion from "./ChooseChampion";
import ChooseItems from "./ChooseItems";
import ChooseMatchup from "./ChooseMatchup";
import ChooseRole from "./ChooseRole";
import ChooseRunes from "./ChooseRunes";
import ChooseSkills from "./ChooseSkills";
import ChooseSpells from "./ChooseSpells";

const ChampionsForm = () => {
  const [page, setPage] = useState(0);

  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    userId: userId,
    role: "",
    champions: "",
    spells: [],
    runes: [],
    items: [],
    skills: [],
  });
  console.log(formData);
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
        />
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
