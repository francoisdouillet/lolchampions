import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Allspells from '../../utils/Allspells';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";

const ChooseSpells = ({setFormData, formData, page, setPage }) => {


    const [spellSets, setSpellSets] = useState([]);

    const spells = Allspells()

    useEffect(() => {
        if(formData.spells.length === 0) {
            setSpellSets([{
                title: '',
                spells: [],
                notes: ''
            }])
        } else {
            setSpellSets(formData.spells)
        }
    },[])

    function addSpellSet() {
        setSpellSets([...spellSets, {
            title: '',
            notes: '',
            spells: []
        }]);
    }

    function addSpellToSet(index, spell) {
        if (spellSets[index].spells.length === 2) {
            alert('Vous ne pouvez choisir que deux summoners')
        } else {
            console.log(spellSets[index])
            const newSpellSet = {
                ...spellSets[index],
                spells: [...spellSets[index].spells, spell]
            };
            const newSpellSets = [...spellSets];
            newSpellSets[index] = newSpellSet;
            setSpellSets(newSpellSets);
        }
    }

    function removeSpellFromSet(index, spellIndex) {
        const newSpellSet = {
            ...spellSets[index],
            spells: [
                ...spellSets[index].spells.slice(0, spellIndex),
                ...spellSets[index].spells.slice(spellIndex + 1)
            ]
        };
        const newSpellSets = [...spellSets];
        newSpellSets[index] = newSpellSet;
        setSpellSets(newSpellSets);
    }

    function updateTitle(index, title) {
        const newSpellSet = {
            ...spellSets[index],
            title: title
        };
        const newSpellSets = [...spellSets];
        newSpellSets[index] = newSpellSet;
        setSpellSets(newSpellSets);
    }

    function updateNotes(index, notes) {
        const newSpellSet = {
            ...spellSets[index],
            notes: notes
        };
        const newSpellSets = [...spellSets];
        newSpellSets[index] = newSpellSet;
        setSpellSets(newSpellSets);
    }

    function onSubmit() {
        setFormData({...formData, spells: spellSets})
        setPage(page + 1)
    }
    return (
        <div className='champions'>
            <h1>Quels summoners utilisez-vous ?</h1>
            {spellSets.map((spellSet, index) => (
                <div className="champions__spells" key={index}>
                    <div className="champions__spells--header">
                        <input
                            type="text"
                            placeholder="Titre"
                            value={spellSet.title}
                            onChange={(event) => updateTitle(index, event.target.value)}
                        />
                        <Button onClick={() => { if (window.confirm('Etes vous sur ?')) { setSpellSets(spellSets.filter((_, i) => i !== index)) } }}>
                            <DeleteIcon />
                        </Button>
                    </div>
                    <div className="champions__spells--choose">
                        <div>
                            {spells.map((spell) => {
                                return (
                                    <img
                                        key={spell.name}
                                        alt={spell.name}
                                        src={spell.image}
                                        onClick={() => addSpellToSet(index, spell)}
                                    />
                                )
                            })}
                        </div>
                        <textarea
                            placeholder="Ajoutez des notes"
                            value={spellSet.notes}
                            onChange={(event) => updateNotes(index, event.target.value)}
                        />
                        <div className='champions__spells--selected'>
                            {spellSet.spells.map((spell, spellIndex) => (
                                <img
                                    key={spellIndex}
                                    alt={spell.name}
                                    src={spell.image}
                                    onClick={() => removeSpellFromSet(index, spellIndex)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <Button variant="contained" onClick={addSpellSet}>
                Ajoutez un ensemble de summoners
            </Button>
            <div className='champions__navigation'>
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
                <Button variant='contained' sx={{marginRight: '8vw', height: '100%'}} onClick={onSubmit}>
                    Suivant
                </Button>
            </div>
        </div>
    );

}

export default ChooseSpells