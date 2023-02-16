import { Button } from "@mui/material"
import Allspells from "../../utils/Allspells"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const ChooseSpells = () => {

    const spells = Allspells()

    const [isOpen, setIsOpen] = useState(false)

    function handleClick(event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON') {
          event.stopPropagation();
          return;
        }
        setIsOpen(!isOpen);
      }

    return (
        <div className="champions">
            <h1>Quels summoners utilisez-vous?</h1>
            <div className="champions__spells">
                <div className="champions__spells--header" onClick={handleClick}>
                    <input type="text" placeholder="Titre" />
                    <Button><DeleteIcon /></Button>
                </div>
                {isOpen &&
                    <div className="champions__spells--choose">
                        <div>
                            {spells.map((spell) => {
                                return (
                                    <img alt={spell.name} src={spell.image} />
                                )
                            })}
                        </div>
                        <textarea placeholder="Ajoutez des notes"></textarea>
                    </div>}
            </div>
            <Button variant="contained">Ajoutez un ensemble de summoners</Button>
        </div>
    )
}

export default ChooseSpells