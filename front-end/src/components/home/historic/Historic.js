import NavBar from "../../navbar/Navbar"
import { useState } from "react"

const Historic = ({ matchups }) => {

    const [id, setId] = useState()
    const [isOpen, setIsOpen] = useState(false)

    console.log(id)

    function handleClick(_id) {
        if(isOpen === true && id === _id) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
            setId(_id)
        }
    }

    return (
        <div className="historic">
            <h1>Historique des derniers match-ups</h1>
            <div className="historic__container">
                {Object.entries(matchups).map(([key, value]) => {
                    return (
                        <div>
                            <div className={`historic__matchup ${value.win === true ? 'win' : 'loose'}`} key={key} onClick={() => handleClick(value._id) }>
                                <img
                                    alt={value.myChamp}
                                    src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${value.myChamp}.png`}
                                />
                                <div className={`historic__matchup--hischamp ${value.winMatchup === true ? 'win' : 'loose'}`}>
                                    <img
                                        alt={value.hisChamp}
                                        src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${value.hisChamp}.png`}
                                    />
                                </div>
                            </div>
                            {id === value._id && isOpen === true && (
                                <div className="historic__matchup--commentary">
                                    <div>
                                        <p>Difficulté :</p>
                                        <p>{value.difficulty}</p>
                                    </div>
                                    <div>
                                        <p>Commentaire :</p>
                                        <p>{value.commentary}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <NavBar />
        </div>
    )
}

export default Historic