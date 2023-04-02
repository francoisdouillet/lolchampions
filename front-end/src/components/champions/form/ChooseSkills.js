import Allskillschamp from "../../utils/Allskillschamp";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChooseSkills = ({ setFormData, formData, page, setPage, modify }) => {
  const champion = formData.champion;
  const skills = Allskillschamp(champion);
  const navigate = useNavigate();

  const [skillsSets, setSkillsSets] = useState([]);

  useEffect(() => {
    if (formData.skills.length === 0) {
      setSkillsSets([
        {
          title: "",
          skills: [""],
        },
      ]);
    } else {
      setSkillsSets(formData.skills);
    }
  }, [formData.skills]);

  function addSkillsToSet(index, i, skillName) {
    const newSkillsSet = {
      ...skillsSets[index],
      skills: [...skillsSets[index].skills],
    };
    newSkillsSet.skills[i] = skillName;
    const newSkillsSets = [...skillsSets];
    newSkillsSets[index] = newSkillsSet;
    setSkillsSets(newSkillsSets);
  }

  function addSkillsSet() {
    setSkillsSets([
      ...skillsSets,
      {
        title: "",
        skills: [""],
      },
    ]);
  }

  function updateTitle(index, title) {
    const newSkillsSet = {
      ...skillsSets[index],
      title: title,
    };
    const newSkillsSets = [...skillsSets];
    newSkillsSets[index] = newSkillsSet;
    setSkillsSets(newSkillsSets);
  }

  function onSubmit() {
    for (let i = 0; i < skillsSets.length; i++) {
      const skills = skillsSets[i].skills;
      for (let j = 0; j < skills.length; j++) {
        const skill = skills[j];
        if (!skill || skills.length < 18 || skill.includes(undefined)) {
          alert("Veuillez remplir toutes les compétences");
          return;
        }
      }
    }
    // Si toutes les validations passent, retourner true
    if (modify === true) {
      axios
        .put(`https://uptight-tam-pig.cyclic.app/api/champion/sheet/${formData._id}`, {
          skills: skillsSets,
        })
        .then((res) => {
          console.log(res.data);
          alert("Skill sauvegardé");
          navigate(`/champions/${formData._id}`);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFormData({ ...formData, skills: skillsSets });
      setPage(page + 1);
    }
  }

  return (
    <div className="champions" style={{ margin: modify ? 0 : undefined }}>
      {modify === true ? "" : <h1>Quels sorts montez-vous ?</h1>}
      {skillsSets.map((skill, index) => (
        <div key={index}>
          <div className="champions__input">
            <div>
              <TextField
                type="text"
                placeholder="Titre"
                value={skill.title}
                onChange={(event) => updateTitle(index, event.target.value)}
              />
              <Button
                onClick={() => {
                  if (window.confirm("Etes vous sur ?")) {
                    setSkillsSets(skillsSets.filter((_, i) => i !== index));
                  }
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
          {skills !== undefined && (
            <div className="champions__skills">
              <div>
                <img
                  alt={skills[0].name}
                  src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[0].id}.png`}
                />
                <span>Q</span>
                <div>
                  {[...Array(18)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => addSkillsToSet(index, i, "Q")}
                      className={
                        skillsSets[index].skills[i] === "Q" ? "selected" : ""
                      }
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <img
                  alt={skills[1].name}
                  src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[1].id}.png`}
                />
                <span>W</span>
                <div>
                  {[...Array(18)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => addSkillsToSet(index, i, "W")}
                      className={
                        skillsSets[index].skills[i] === "W" ? "selected" : ""
                      }
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <img
                  alt={skills[2].name}
                  src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[2].id}.png`}
                />
                <span>E</span>
                <div>
                  {[...Array(18)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => addSkillsToSet(index, i, "E")}
                      className={
                        skillsSets[index].skills[i] === "E" ? "selected" : ""
                      }
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <img
                  alt={skills[3].name}
                  src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[3].id}.png`}
                />
                <span>R</span>
                <div>
                  {[...Array(18)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => addSkillsToSet(index, i, "R")}
                      className={
                        skillsSets[index].skills[i] === "R" ? "selected" : ""
                      }
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <Button variant="contained" onClick={addSkillsSet}>
        Ajoutez un ensemble de compétences
      </Button>
      {modify === true ? (
        <Button variant="contained" sx={{ m: 2 }} onClick={onSubmit}>
          Enregistrer
        </Button>
      ) : (
        <div className="champions__navigation">
          <Button>
            <ArrowBackIcon
              onClick={() => {
                setPage((page) => page - 1);
              }}
              sx={{
                width: "50vw",
                height: "8vh",
              }}
            />
          </Button>
          <Button
            variant="contained"
            sx={{ marginRight: "8vw", height: "100%" }}
            onClick={onSubmit}
          >
            Suivant
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChooseSkills;
