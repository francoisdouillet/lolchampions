import Allrunes from "../../utils/Allrunes";
import { useState, useEffect } from "react";
import Allsousrunes from "../../utils/Allsousrunes";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChooseRunes = ({ setFormData, formData, page, setPage, modify }) => {
  const runes = Allrunes();
  const sousrunes = Allsousrunes();
  const navigate = useNavigate();

  const defaultRuneSet = {
    title: "",
    notes: "",
    runes1: {
      name: "",
      rune1: "",
      rune2: "",
      rune3: "",
      rune4: "",
    },
    runes2: {
      name: "",
      rune1: {
        index: "",
        rune: "",
      },
      rune2: {
        index: "",
        rune: "",
      },
    },
    runes3: {
      rune1: "",
      rune2: "",
      rune3: "",
    },
  };

  const [runesSets, setRunesSets] = useState([]);
  useEffect(() => {
    if (formData.runes.length === 0) {
      setRunesSets([defaultRuneSet]);
    } else {
      setRunesSets(formData.runes);
    }
  }, [formData.runes]);

  function addRuneSet() {
    setRunesSets([...runesSets, defaultRuneSet]);
  }

  function selectRunes(rune, index) {
    if (
      runesSets[index].runes1.name === rune ||
      runesSets[index].runes2.name === rune
    ) {
      return;
    }
    if (!runesSets[index].runes1.name) {
      const newRuneSet = {
        ...runesSets[index],
        title: runesSets[index].title,
        notes: runesSets[index].notes,
        runes1: {
          name: rune,
          rune1: "",
          rune2: "",
          rune3: "",
          rune4: "",
        },
        runes2: {
          name: runesSets[index].runes2.name,
          rune1: runesSets[index].runes2.rune1,
          rune2: runesSets[index].runes2.rune2,
        },
        runes3: {
          rune1: "",
          rune2: "",
          rune3: "",
        },
      };
      const newRuneSets = [...runesSets];
      newRuneSets[index] = newRuneSet;
      setRunesSets(newRuneSets);
      return;
    }
    if (!runesSets[index].runes2.name) {
      const newRuneSet = {
        ...runesSets[index],
        title: runesSets[index].title,
        notes: runesSets[index].notes,
        runes1: {
          name: runesSets[index].runes1.name,
          rune1: runesSets[index].runes1.rune1,
          rune2: runesSets[index].runes1.rune2,
          rune3: runesSets[index].runes1.rune3,
          rune4: runesSets[index].runes1.rune4,
        },
        runes2: {
          name: rune,
          rune1: {
            index: "",
            rune: "",
          },
          rune2: {
            index: "",
            rune: "",
          },
        },
        runes3: {
          rune1: "",
          rune2: "",
          rune3: "",
        },
      };
      const newRuneSets = [...runesSets];
      newRuneSets[index] = newRuneSet;
      setRunesSets(newRuneSets);
      return;
    }
  }

  function updateTitle(index, title) {
    const newRuneSet = {
      ...runesSets[index],
      title: title,
    };
    const newRuneSets = [...runesSets];
    newRuneSets[index] = newRuneSet;
    setRunesSets(newRuneSets);
  }

  function updateNotes(index, notes) {
    const newRuneSet = {
      ...runesSets[index],
      notes: notes,
    };
    const newRuneSets = [...runesSets];
    newRuneSets[index] = newRuneSet;
    setRunesSets(newRuneSets);
  }

  function addRuneToSet1(index, iRune, rune) {
    const updatedRuneSet = [...runesSets];
    const selectedRuneSet = updatedRuneSet[index];
    selectedRuneSet.runes1[rune] = iRune;
    setRunesSets(updatedRuneSet);
    console.log(runesSets);
  }

  function addRuneToSet2(index, iRune, rune, iSlot) {
    const updatedRuneSet = [...runesSets];
    const selectedRuneSet = updatedRuneSet[index];
    selectedRuneSet.runes2[rune] = { index: iSlot, rune: iRune };
    setRunesSets(updatedRuneSet);
    console.log(runesSets);
  }

  function addRuneToSet3(index, iRune, rune) {
    const updatedRuneSet = [...runesSets];
    const selectedRuneSet = updatedRuneSet[index];
    selectedRuneSet.runes3[rune] = iRune;
    setRunesSets(updatedRuneSet);
    console.log(runesSets);
  }

  function removeRune1(index) {
    const updatedRuneSet = [...runesSets];
    const selectedRuneSet = updatedRuneSet[index];
    selectedRuneSet.runes1 = {
      name: "",
      rune1: "",
      rune2: "",
      rune3: "",
      rune4: "",
    };
    setRunesSets(updatedRuneSet);
  }
  function removeRune2(index) {
    const updatedRuneSet = [...runesSets];
    const selectedRuneSet = updatedRuneSet[index];
    selectedRuneSet.runes2 = {
      name: "",
      rune1: {
        index: "",
        rune: "",
      },
      rune2: {
        index: "",
        rune: "",
      },
    };
    selectedRuneSet.runes3 = {
      rune1: "",
      rune2: "",
      rune3: "",
    };
    setRunesSets(updatedRuneSet);
  }
  function onSubmit() {
    for (let i = 0; i < runesSets.length; i++) {
      const { runes1, runes2, runes3 } = runesSets[i];
      if (
        runes1.name === "" ||
        runes1.rune1 === "" ||
        runes1.rune2 === "" ||
        runes1.rune3 === "" ||
        runes1.rune4 === "" ||
        runes2.name === "" ||
        runes2.rune1.index === "" ||
        runes2.rune1.rune === "" ||
        runes2.rune2.index === "" ||
        runes2.rune2.rune === "" ||
        runes3.rune1 === "" ||
        runes3.rune2 === "" ||
        runes3.rune3 === ""
      ) {
        alert("Veuillez remplir toutes les informations");
        return;
      }
    }
    if (modify === true) {
      axios
        .put(`https://uptight-tam-pig.cyclic.app/api/champion/sheet/${formData._id}`, {
          runes: runesSets,
        })
        .then((res) => {
          console.log(res.data);
          alert("Rune sauvegardé");
          navigate(`/champions/${formData._id}`);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFormData({ ...formData, runes: runesSets });
      setPage(page + 1);
    }
  }

  return (
    <div className="champions" style={{ margin: modify ? 0 : undefined }}>
      {modify === true ? "" : <h1>Quels runes utilisez-vous? </h1>}
      {runesSets.map((rune, index) => (
        <div key={index} className={modify ? 'desktop' : ''}>
          <div className="champions__input">
            <div>
              <TextField
                type="text"
                placeholder="Titre"
                value={rune.title}
                onChange={(event) => updateTitle(index, event.target.value)}
              />
              <Button
                onClick={() => {
                  if (window.confirm("Etes vous sur ?")) {
                    setRunesSets(runesSets.filter((_, i) => i !== index));
                  }
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
            <textarea
              placeholder="Notes"
              value={rune.notes}
              onChange={(event) => updateNotes(index, event.target.value)}
            />
          </div>
          <div className="champions__runes">
            {runes.map((rune) => (
              <img
                src={rune.icon}
                alt={rune.name}
                onClick={() => selectRunes(rune.name, index)}
              />
            ))}
          </div>
          <div className="champions__runesSelected">
            <div className="champions__runesSelected--rune">
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {runesSets[index].runes1.name && (
                    <img
                      alt={
                        runes.find(
                          (rune) => rune.name === runesSets[index].runes1.name
                        ).name
                      }
                      src={
                        runes.find(
                          (rune) => rune.name === runesSets[index].runes1.name
                        ).icon
                      }
                      onClick={() => removeRune1(index)}
                    />
                  )}
                </div>
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {Number.isInteger(runesSets[index].runes1.rune1) && (
                    <div>
                      <img
                        alt={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[0].runes[runesSets[index].runes1.rune1].name
                        }
                        src={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[0].runes[runesSets[index].runes1.rune1].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes1.name &&
                  runes
                    .find((rune) => rune.name === runesSets[index].runes1.name)
                    .slots[0].runes.map((rune, iRune) => (
                      <img
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet1(index, iRune, (rune = "rune1"))
                        }
                      />
                    ))}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {Number.isInteger(runesSets[index].runes1.rune2) && (
                    <div>
                      <img
                        alt={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[1].runes[runesSets[index].runes1.rune2].name
                        }
                        src={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[1].runes[runesSets[index].runes1.rune2].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes1.name &&
                  runes
                    .find((rune) => rune.name === runesSets[index].runes1.name)
                    .slots[1].runes.map((rune, iRune) => (
                      <img
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet1(index, iRune, (rune = "rune2"))
                        }
                      />
                    ))}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {Number.isInteger(runesSets[index].runes1.rune3) && (
                    <div>
                      <img
                        alt={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[2].runes[runesSets[index].runes1.rune3].name
                        }
                        src={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[2].runes[runesSets[index].runes1.rune3].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes1.name &&
                  runes
                    .find((rune) => rune.name === runesSets[index].runes1.name)
                    .slots[2].runes.map((rune, iRune) => (
                      <img
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet1(index, iRune, (rune = "rune3"))
                        }
                      />
                    ))}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {Number.isInteger(runesSets[index].runes1.rune4) && (
                    <div>
                      <img
                        alt={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[3].runes[runesSets[index].runes1.rune4].name
                        }
                        src={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes1.name
                          ).slots[3].runes[runesSets[index].runes1.rune4].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes1.name &&
                  runes
                    .find((rune) => rune.name === runesSets[index].runes1.name)
                    .slots[3].runes.map((rune, iRune) => (
                      <img
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet1(index, iRune, (rune = "rune4"))
                        }
                      />
                    ))}
              </div>
            </div>
          </div>
          <div className="champions__runesSelected">
            <div className="champions__runesSelected--rune">
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {runesSets[index].runes2.name && (
                    <img
                      alt={
                        runes.find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        ).name
                      }
                      src={
                        runes.find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        ).icon
                      }
                      onClick={() => removeRune2(index)}
                    />
                  )}
                </div>
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {Number.isInteger(runesSets[index].runes2.rune1.index) && (
                    <div>
                      <img
                        alt={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes2.name
                          ).slots[runesSets[index].runes2.rune1.index].runes[
                            runesSets[index].runes2.rune1.rune
                          ].name
                        }
                        src={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes2.name
                          ).slots[runesSets[index].runes2.rune1.index].runes[
                            runesSets[index].runes2.rune1.rune
                          ].icon
                        }
                      />
                    </div>
                  )}
                </div>
                <div className="runes2">
                  <div>
                    {runesSets[index].runes2.name &&
                      runesSets[index].runes2.rune2.index !== 1 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[1].runes.map((rune, iRune) => (
                          <img
                            alt={rune.name}
                            src={rune.icon}
                            onClick={() =>
                              addRuneToSet2(index, iRune, (rune = "rune1"), 1)
                            }
                          />
                        ))}
                    {runesSets[index].runes2.rune2.index === 1 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[1].runes.map((rune, iRune) => (
                          <img
                            className="runes2__salut"
                            alt={rune.name}
                            src={rune.icon}
                          />
                        ))}
                  </div>
                  <div>
                    {runesSets[index].runes2.name &&
                      runesSets[index].runes2.rune2.index !== 2 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[2].runes.map((rune, iRune) => (
                          <img
                            alt={rune.name}
                            src={rune.icon}
                            onClick={() =>
                              addRuneToSet2(index, iRune, (rune = "rune1"), 2)
                            }
                          />
                        ))}
                    {runesSets[index].runes2.rune2.index === 2 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[2].runes.map((rune, iRune) => (
                          <img
                            className="runes2__salut"
                            alt={rune.name}
                            src={rune.icon}
                          />
                        ))}
                  </div>
                  <div>
                    {runesSets[index].runes2.name &&
                      runesSets[index].runes2.rune2.index !== 3 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[3].runes.map((rune, iRune) => (
                          <img
                            alt={rune.name}
                            src={rune.icon}
                            onClick={() =>
                              addRuneToSet2(index, iRune, (rune = "rune1"), 3)
                            }
                          />
                        ))}
                    {runesSets[index].runes2.rune2.index === 3 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[3].runes.map((rune, iRune) => (
                          <img
                            className="runes2__salut"
                            alt={rune.name}
                            src={rune.icon}
                          />
                        ))}
                  </div>
                </div>
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {Number.isInteger(runesSets[index].runes2.rune2.index) && (
                    <div>
                      <img
                        alt={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes2.name
                          ).slots[runesSets[index].runes2.rune2.index].runes[
                            runesSets[index].runes2.rune2.rune
                          ].name
                        }
                        src={
                          runes.find(
                            (rune) => rune.name === runesSets[index].runes2.name
                          ).slots[runesSets[index].runes2.rune2.index].runes[
                            runesSets[index].runes2.rune2.rune
                          ].icon
                        }
                      />
                    </div>
                  )}
                </div>
                <div className="runes2">
                  <div>
                    {runesSets[index].runes2.name &&
                      runesSets[index].runes2.rune1.index !== 1 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[1].runes.map((rune, iRune) => (
                          <img
                            alt={rune.name}
                            src={rune.icon}
                            onClick={() =>
                              addRuneToSet2(index, iRune, (rune = "rune2"), 1)
                            }
                          />
                        ))}
                    {runesSets[index].runes2.rune1.index === 1 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[1].runes.map((rune, iRune) => (
                          <img
                            className="runes2__salut"
                            alt={rune.name}
                            src={rune.icon}
                          />
                        ))}
                  </div>
                  <div>
                    {runesSets[index].runes2.name &&
                      runesSets[index].runes2.rune1.index !== 2 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[2].runes.map((rune, iRune) => (
                          <img
                            alt={rune.name}
                            src={rune.icon}
                            onClick={() =>
                              addRuneToSet2(index, iRune, (rune = "rune2"), 2)
                            }
                          />
                        ))}
                    {runesSets[index].runes2.rune1.index === 2 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[2].runes.map((rune, iRune) => (
                          <img
                            className="runes2__salut"
                            alt={rune.name}
                            src={rune.icon}
                          />
                        ))}
                  </div>
                  <div>
                    {runesSets[index].runes2.name &&
                      runesSets[index].runes2.rune1.index !== 3 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[3].runes.map((rune, iRune) => (
                          <img
                            alt={rune.name}
                            src={rune.icon}
                            onClick={() =>
                              addRuneToSet2(index, iRune, (rune = "rune2"), 3)
                            }
                          />
                        ))}
                    {runesSets[index].runes2.rune1.index === 3 &&
                      runes
                        .find(
                          (rune) => rune.name === runesSets[index].runes2.name
                        )
                        .slots[3].runes.map((rune, iRune) => (
                          <img
                            className="runes2__salut"
                            alt={rune.name}
                            src={rune.icon}
                          />
                        ))}
                  </div>
                </div>
              </div>
              <div className="champions__runesSelected--row little">
                <div className="champions__runesSelected--circle little">
                  {Number.isInteger(runesSets[index].runes3.rune1) && (
                    <div>
                      <img
                        alt={
                          sousrunes[0].runes[runesSets[index].runes3.rune1].icon
                        }
                        src={
                          sousrunes[0].runes[runesSets[index].runes3.rune1].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes2.name &&
                  sousrunes[0].runes.map((rune, iRune) => (
                    <div className="sousrunes">
                      <img
                        key={iRune}
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet3(index, iRune, (rune = "rune1"))
                        }
                      />
                    </div>
                  ))}
              </div>
              <div className="champions__runesSelected--row little">
                <div className="champions__runesSelected--circle little">
                  {Number.isInteger(runesSets[index].runes3.rune2) && (
                    <div>
                      <img
                        alt={
                          sousrunes[1].runes[runesSets[index].runes3.rune2].icon
                        }
                        src={
                          sousrunes[1].runes[runesSets[index].runes3.rune2].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes2.name &&
                  sousrunes[1].runes.map((rune, iRune) => (
                    <div className="sousrunes">
                      <img
                        key={iRune}
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet3(index, iRune, (rune = "rune2"))
                        }
                      />
                    </div>
                  ))}
              </div>
              <div className="champions__runesSelected--row little">
                <div className="champions__runesSelected--circle little">
                  {Number.isInteger(runesSets[index].runes3.rune3) && (
                    <div>
                      <img
                        alt={
                          sousrunes[2].runes[runesSets[index].runes3.rune3].icon
                        }
                        src={
                          sousrunes[2].runes[runesSets[index].runes3.rune3].icon
                        }
                      />
                    </div>
                  )}
                </div>
                {runesSets[index].runes2.name &&
                  sousrunes[2].runes.map((rune, iRune) => (
                    <div className="sousrunes">
                      <img
                        key={iRune}
                        alt={rune.name}
                        src={rune.icon}
                        onClick={() =>
                          addRuneToSet3(index, iRune, (rune = "rune3"))
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button variant="contained" onClick={addRuneSet}>
        Ajouter un ensemble de rune
      </Button>
      {modify === true ? (
        <Button variant="contained" sx={{ m: 2 }} onClick={onSubmit}>
          Enregistrer
        </Button>
      ) : (
        <>
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
              sx={{ margin : '0 auto',  height: "100%" }}
              onClick={onSubmit}
            >
              Suivant
            </Button>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default ChooseRunes;
