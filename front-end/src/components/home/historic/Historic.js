import NavBar from "../../navbar/Navbar"

const Historic = ({ matchups }) => {

    return (
        <div className="historic">
            <h1>Historique des derniers match-ups</h1>
            <div className="historic__container">
                {Object.entries(matchups).map(([key, value]) => {
                    return (
                        <div>
                            <div className={`historic__matchup ${value.win === true ? 'win' : 'loose'}`} key={value._id}>
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
                        </div>
                    )
                })}
            </div>
            <NavBar />
        </div>
    )
}

export default Historic