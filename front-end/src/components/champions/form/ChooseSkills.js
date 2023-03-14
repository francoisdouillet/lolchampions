import Allchamp from "../../utils/Allchamp"
import AllSkillschamp from "../../utils/Allskillschamp"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"

const ChooseSkills = ({ formData }) => {
    const champion = formData.champions
    const skills = AllSkillschamp(champion)
    const [selectedSkills, setSelectedSkills] = useState([])

    const handleButtonClick = (index, skillName) => {
        setSelectedSkills(prevSkills => {
            const newSkills = [...prevSkills]
            newSkills[index] = skillName
            return newSkills
        })
    };

    console.log(selectedSkills)

    return (
        <div className="champions">
            <h1>Quels runes choisissez-vous ?</h1>
            <input type='text' placeholder="Titre"/>
            {skills !== undefined && (<div className="champions__skills">
                <div>
                    <img alt={skills[0].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[0].id}.png`} />
                    <span>Q</span>
                    <div>
                        {[...Array(18)].map((_, index) => (
                            <button key={index} onClick={() => handleButtonClick(index, 'Q')} className={selectedSkills[index] === 'Q' ? 'selected' : ''}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <img alt={skills[1].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[1].id}.png`} />
                    <span>W</span>
                    <div>
                        {[...Array(18)].map((_, index) => (
                            <button key={index} onClick={() => handleButtonClick(index, 'W')} className={selectedSkills[index] === 'W' ? 'selected' : ''}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <img alt={skills[2].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[2].id}.png`} />
                    <span>E</span>
                    <div>
                        {[...Array(18)].map((_, index) => (
                            <button key={index} onClick={() => handleButtonClick(index, 'E')} className={selectedSkills[index] === 'E' ? 'selected' : ''}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <img alt={skills[3].name} src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[3].id}.png`} />
                    <span>R</span>
                    <div>
                        {[...Array(18)].map((_, index) => (
                            <button key={index} onClick={() => handleButtonClick(index, 'R')} className={selectedSkills[index] === 'R' ? 'selected' : ''}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>)}
            <Button variant="contained">
                Ajoutez un ensemble de compétences
            </Button>
        </div>
    )
}

export default ChooseSkills
