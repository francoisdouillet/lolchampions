import AllSkillschamp from "../../utils/Allskillschamp"
import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChooseSkills = ({ setFormData, formData, page, setPage }) => {
    const champion = formData.champions
    const skills = AllSkillschamp(champion)
    const [skillsSets, setSkillsSets] = useState([])

    useEffect(() => {
        if (formData.skills.length === 0) {
            setSkillsSets([{
                title: '',
                skills: [''],
            }])
        } else {
            setSkillsSets(formData.skills)
        }
    }, [formData.skills])

    function addSkillsToSet(index, i, skillName) {
        const newSkillsSet = {
            ...skillsSets[index],
            skills: [...skillsSets[index].skills],
        };
        newSkillsSet.skills[i] = skillName;
        const newSkillsSets = [...skillsSets];
        newSkillsSets[index] = newSkillsSet;
        setSkillsSets(newSkillsSets);
    };

    function addSkillsSet() {
        setSkillsSets([...skillsSets, {
            title: '',
            skills: ['']
        }]);
    }

    function updateTitle(index, title) {
        const newSkillsSet = {
            ...skillsSets[index],
            title: title
        };
        const newSkillsSets = [...skillsSets];
        newSkillsSets[index] = newSkillsSet;
        setSkillsSets(newSkillsSets);
    }

    function onSubmit() {
        // 
        // console.log(skillsSets)
        // Parcourir chaque ensemble de compétences (skillsSet)
        for (let i = 0; i < skillsSets.length; i++) {
            const skills = skillsSets[i].skills;

            // Vérifier chaque tableau de compétences
            for (let j = 0; j < skills.length; j++) {
                const skill = skills[j];

                // Vérifier si le tableau est vide ou si une entrée est undefined
                if (!skill || skills.length < 18 || skill.includes(undefined)) {
                    alert('pas bon')
                    return
                }
            }
        }

        // Si toutes les validations passent, retourner true
        setFormData({ ...formData, skills: skillsSets })
        setPage(page + 1)
    }

    console.log(skillsSets)

    return (
        <div className="champions">
            <h1>Quels runes choisissez-vous ?</h1>
            {skillsSets.map((skill, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Titre"
                        value={skill.title}
                        onChange={(event) => updateTitle(index, event.target.value)}
                    />
                    <Button onClick={() => { if (window.confirm('Etes vous sur ?')) { setSkillsSets(skillsSets.filter((_, i) => i !== index)) } }}>
                        <DeleteIcon />
                    </Button>
                    {skills !== undefined && (<div className="champions__skills">
                        <div>
                            <img alt={skills[0].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[0].id}.png`} />
                            <span>Q</span>
                            <div>
                                {[...Array(18)].map((_, i) => (
                                    <button key={i} onClick={() => addSkillsToSet(index, i, 'Q')} className={skillsSets[index].skills[i] === 'Q' ? 'selected' : ''}>
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img alt={skills[1].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[1].id}.png`} />
                            <span>W</span>
                            <div>
                                {[...Array(18)].map((_, i) => (
                                    <button key={i} onClick={() => addSkillsToSet(index, i, 'W')} className={skillsSets[index].skills[i] === 'W' ? 'selected' : ''}>
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img alt={skills[2].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[2].id}.png`} />
                            <span>E</span>
                            <div>
                                {[...Array(18)].map((_, i) => (
                                    <button key={i} onClick={() => addSkillsToSet(index, i, 'E')} className={skillsSets[index].skills[i] === 'E' ? 'selected' : ''}>
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img alt={skills[3].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[3].id}.png`} />
                            <span>R</span>
                            <div>
                                {[...Array(18)].map((_, i) => (
                                    <button key={i} onClick={() => addSkillsToSet(index, i, 'R')} className={skillsSets[index].skills[i] === 'R' ? 'selected' : ''}>
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>)}
                </div>
            ))}
            <Button variant="contained" onClick={addSkillsSet}>
                Ajoutez un ensemble de compétences
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
                <Button variant='contained' sx={{ marginRight: '8vw', height: '100%' }} onClick={onSubmit}>
                    Suivant
                </Button>
            </div>
        </div>
    )
}

export default ChooseSkills
