import Allrunes from "../../utils/Allrunes"
import { useState } from "react"

const ChooseRunes = ({page, setPage, formData, setFormData}) => {

    const [selectedRune, setSelectedRune] = useState()
    const [RuneSets, setRuneSets] = useState([{
      title: '',
      runes: [],
      notes: ''
  }]);

    const runes = Allrunes()


    return (
        <div className="champions">
          <h1>Quels runes utilisez-vous? </h1>
          <div className="champions__runes">
          {runes.map((rune) => (
            <img src={rune.icon} onClick={() => setSelectedRune(rune.name)} />
          ))}
          </div>
          <input type="text" placeholder="Titre"/>
          <div className="champions__runesSelected">
            <div className="champions__runesSelected--left">
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle">
                  {selectedRune !== undefined && (
                  <img src={runes.find(rune => rune.name === selectedRune).icon}/>
                  )}
                  </div>
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune !== undefined && (
                    runes.find(rune => rune.name === selectedRune).slots[0].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune !== undefined && (
                    runes.find(rune => rune.name === selectedRune).slots[1].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune !== undefined && (
                    runes.find(rune => rune.name === selectedRune).slots[2].runes.map((rune) => (
                      <img src={rune.icon}/>
                    ))
                  )}
              </div>
              <div className="champions__runesSelected--row">
                <div className="champions__runesSelected--circle"></div>
                {selectedRune !== undefined && (
                    runes.find(rune => rune.name === selectedRune).slots[3].runes.map((rune) => (
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