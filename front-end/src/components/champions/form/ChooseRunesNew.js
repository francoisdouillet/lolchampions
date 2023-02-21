import Allrunes from "../../utils/Allrunes"
import { useState } from "react";

const ChooseRuneNew = () => {
    const runes = Allrunes();
    const [runesSets, setRunesSets] = useState([{
        runes1: {
            name: '',
            rune1: '',
            rune2: '',
            rune3: '',
            rune4: ''
        },
        runes2: {
            name: '',
            rune1: {
                index: '',
                rune: '',
            },
            rune2: {
                index: '',
                rune: '',
            },
        }
    }]);


    function selectRunes(rune, index) {
        if (runesSets[index].runes1.name === rune || runesSets[index].runes2.name === rune) {
            return;
        }
        if (!runesSets[index].runes1.name) {
            setRunesSets([{
                runes1: {
                    name: rune,
                    rune1: '',
                    rune2: '',
                    rune3: '',
                    rune4: ''
                },
                runes2: {
                    name: runesSets[index].runes2.name,
                    rune1: runesSets[index].runes2.rune1,
                    rune2: runesSets[index].runes2.rune2,
                }
            }])
            return;
        }
        if (!runesSets[index].runes2.name) {
            setRunesSets([{
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
                        index: '',
                        rune: '',
                    },
                    rune2: {
                        index: '',
                        rune: '',
                    },
                }
            }])
            return;
        }
    }

    function addRuneToSet1(index, iRune, rune) {
        const updatedRuneSet = [...runesSets]
        const selectedRuneSet = updatedRuneSet[index]
        selectedRuneSet.runes1[rune] = iRune;
        setRunesSets(updatedRuneSet)
        console.log(runesSets)
    }

    function addRuneToSet2(index, iRune, rune, iSlot) {
        const updatedRuneSet = [...runesSets]
        const selectedRuneSet = updatedRuneSet[index]
        selectedRuneSet.runes2[rune] = {index: iSlot, rune: iRune};
        setRunesSets(updatedRuneSet)
        console.log(runesSets)
    }



    return (
        <div className="champions">
            <h1>Quels runes utilisez-vous? </h1>
            {runesSets.map((rune, index) => (
                <div key={index}>
                    <div className="champions__runes">
                        {runes.map((rune) => (
                            <img src={rune.icon} alt={rune.name} onClick={() => selectRunes(rune.name, index)} />
                        ))}
                    </div>
                    <input type="text" placeholder="Titre" />
                    <div className="champions__runesSelected">
                        <div className="champions__runesSelected--rune">
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {runesSets[index].runes1.name && (
                                        <img alt={runes.find((rune) => rune.name === runesSets[index].runes1.name).name}
                                            src={runes.find((rune) => rune.name === runesSets[index].runes1.name).icon} />
                                    )}
                                </div>
                            </div>
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {Number.isInteger(runesSets[index].runes1.rune1) && (
                                        <div>
                                            <img alt={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[0].runes[runesSets[index].runes1.rune1].name}
                                                src={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[0].runes[runesSets[index].runes1.rune1].icon} />
                                        </div>
                                    )}
                                </div>
                                {runesSets[index].runes1.name && (
                                    runes.find(rune => rune.name === runesSets[index].runes1.name).slots[0].runes.map((rune, iRune) => (
                                        <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet1(index, iRune, rune = 'rune1')} />
                                    ))
                                )}
                            </div>
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {Number.isInteger(runesSets[index].runes1.rune2) && (
                                        <div>
                                            <img alt={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[1].runes[runesSets[index].runes1.rune2].name}
                                                src={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[1].runes[runesSets[index].runes1.rune2].icon} />
                                        </div>
                                    )}
                                </div>
                                {runesSets[index].runes1.name && (
                                    runes.find(rune => rune.name === runesSets[index].runes1.name).slots[1].runes.map((rune, iRune) => (
                                        <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet1(index, iRune, rune = 'rune2')} />
                                    ))
                                )}
                            </div>
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {Number.isInteger(runesSets[index].runes1.rune3) && (
                                        <div>
                                            <img alt={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[2].runes[runesSets[index].runes1.rune3].name}
                                                src={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[2].runes[runesSets[index].runes1.rune3].icon} />
                                        </div>
                                    )}
                                </div>
                                {runesSets[index].runes1.name && (
                                    runes.find(rune => rune.name === runesSets[index].runes1.name).slots[2].runes.map((rune, iRune) => (
                                        <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet1(index, iRune, rune = 'rune3')} />
                                    ))
                                )}
                            </div>
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {Number.isInteger(runesSets[index].runes1.rune4) && (
                                        <div>
                                            <img alt={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[3].runes[runesSets[index].runes1.rune4].name}
                                                src={runes.find((rune) => rune.name === runesSets[index].runes1.name).slots[3].runes[runesSets[index].runes1.rune4].icon} />
                                        </div>
                                    )}
                                </div>
                                {runesSets[index].runes1.name && (
                                    runes.find(rune => rune.name === runesSets[index].runes1.name).slots[3].runes.map((rune, iRune) => (
                                        <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet1(index, iRune, rune = 'rune4')} />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="champions__runesSelected">
                        <div className="champions__runesSelected--rune">
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {runesSets[index].runes2.name && (
                                        <img alt={runes.find((rune) => rune.name === runesSets[index].runes2.name).name}
                                            src={runes.find((rune) => rune.name === runesSets[index].runes2.name).icon} />
                                    )}
                                </div>
                            </div>
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {Number.isInteger(runesSets[index].runes2.rune1.index) && (
                                        <div>
                                            <img alt={runes.find((rune) => rune.name === runesSets[index].runes2.name).slots[runesSets[index].runes2.rune1.index].runes[runesSets[index].runes2.rune1.rune].name}
                                                src={runes.find((rune) => rune.name === runesSets[index].runes2.name).slots[runesSets[index].runes2.rune1.index].runes[runesSets[index].runes2.rune1.rune].icon} />
                                        </div>
                                    )}
                                </div>
                                <div className="runes2">
                                    <div>
                                        {runesSets[index].runes2.name && (
                                            runes.find(rune => rune.name === runesSets[index].runes2.name).slots[1].runes.map((rune, iRune) => (
                                                <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet2(index, iRune, rune = 'rune1', 1)} />
                                            ))
                                        )}
                                    </div>
                                    <div>
                                        {runesSets[index].runes2.name && (
                                            runes.find(rune => rune.name === runesSets[index].runes2.name).slots[2].runes.map((rune, iRune) => (
                                                <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet2(index, iRune, rune = 'rune1', 2)} />
                                            ))
                                        )}
                                    </div>
                                    <div>
                                        {runesSets[index].runes2.name && (
                                            runes.find(rune => rune.name === runesSets[index].runes2.name).slots[3].runes.map((rune, iRune) => (
                                                <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet2(index, iRune, rune = 'rune1', 3)} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="champions__runesSelected--row">
                                <div className="champions__runesSelected--circle">
                                    {Number.isInteger(runesSets[index].runes2.rune2.index) && (
                                        <div>
                                            <img alt={runes.find((rune) => rune.name === runesSets[index].runes2.name).slots[runesSets[index].runes2.rune2.index].runes[runesSets[index].runes2.rune2.rune].name}
                                                src={runes.find((rune) => rune.name === runesSets[index].runes2.name).slots[runesSets[index].runes2.rune2.index].runes[runesSets[index].runes2.rune2.rune].icon} />
                                        </div>
                                    )}
                                </div>
                                <div className="runes2">
                                    <div>
                                        {runesSets[index].runes2.name && (
                                            runes.find(rune => rune.name === runesSets[index].runes2.name).slots[1].runes.map((rune, iRune) => (
                                                <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet2(index, iRune, rune = 'rune2', 1)} />
                                            ))
                                        )}
                                    </div>
                                    <div>
                                        {runesSets[index].runes2.name && (
                                            runes.find(rune => rune.name === runesSets[index].runes2.name).slots[2].runes.map((rune, iRune) => (
                                                <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet2(index, iRune, rune = 'rune2',2)} />
                                            ))
                                        )}
                                    </div>
                                    <div>
                                        {runesSets[index].runes2.name && (
                                            runes.find(rune => rune.name === runesSets[index].runes2.name).slots[3].runes.map((rune, iRune) => (
                                                <img alt={rune.name} src={rune.icon} onClick={() => addRuneToSet2(index, iRune, rune = 'rune2',3)} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChooseRuneNew