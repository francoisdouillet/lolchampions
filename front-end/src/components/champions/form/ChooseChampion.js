import Searchchamp from "../../add/Searchchamp"

const ChooseChampion = ({formData, setFormData, page, setPage }) => {
    function champ(champ) {
        setFormData({...formData, champions: champ})
    }
    return (
        <div className="champions">
            <h1>Choisis le champion</h1>
         <Searchchamp champ={champ} page={page} setPage={setPage}/>
        </div>
    )
}

export default ChooseChampion