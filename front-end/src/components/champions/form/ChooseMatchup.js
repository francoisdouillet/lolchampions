import Searchchamp from "../../add/Searchchamp"

const ChooseMatchup = ({formData}) => {
    return (
        <div className="champions">
            <h1>Enregistre les matchups contre {formData.champions}</h1>
            {/* <Searchchamp className="champions__matchups"/> */}
        </div>
    )
}

export default ChooseMatchup