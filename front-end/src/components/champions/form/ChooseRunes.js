import Allrunes from "../../utils/Allrunes"
import { useState } from "react"

const ChooseRunes = ({page, setPage, formData, setFormData}) => {

    const [selectedRune, setSelectedRune] = useState([])
    console.log(selectedRune)
    const [RuneSets, setRuneSets] = useState([{
      title: '',
      runes: [],
      notes: ''
  }]);

    const runes = Allrunes()

    function addRunesSelected (rune) {
      if(selectedRune[0] === rune || selectedRune[1] === rune) {
        return;
      }
      if(selectedRune.length < 2) {
        setSelectedRune([...selectedRune, rune])
      } 

    }

    return (
        <div className="champions">
          <h1>Quels runes utilisez-vous? </h1>
          <div className="champions__runes">
          {runes.map((rune) => (
            <img src={rune.icon} onClick={() => addRunesSelected(rune.name)} />
          ))}
          </div>
          <input type="text" placeholder="Titre"/>
          <div className="champions__runesSelected">
            <div className="champions__runesSelected--rune">
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {selectedRune[0] !== undefined && (
                  <img src={runes.find(rune => rune.name === selectedRune[0]).icon}/>
                  )}
                  </div>
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[0] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[0]).slots[0].runes.map((rune) => (
                      <img src={rune.icon} onClick={() => console.log(rune.name)}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[0] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[0]).slots[1].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[0] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[0]).slots[2].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[0] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[0]).slots[3].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
            </div>
            <div className="champions__runesSelected--rune">
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {selectedRune[1] !== undefined && (
                  <img src={runes.find(rune => rune.name === selectedRune[1]).icon}/>
                  )}
                  </div>
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[1] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[1]).slots[0].runes.map((rune) => (
                      <img src={rune.icon} onClick={() => console.log(rune.name)}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[1] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[1]).slots[1].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[1] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[1]).slots[2].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune[1] !== undefined && (
                    runes.find(rune => rune.name === selectedRune[1]).slots[3].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
            </div>
          </div>
        </div>
    )
}



export default ChooseRunes