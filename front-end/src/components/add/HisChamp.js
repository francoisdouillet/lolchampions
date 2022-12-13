import Searchchamp from "./Searchchamp"

function Hischamp({formData, setFormData, setDisabled, page, setPage}){
    function champ(champ) {
        setFormData({...formData, hisChamp: champ})
        setDisabled(false)
    }
    
    return (
        <div>
           <h1>Quels champions jouais l'ennemis ?</h1>
            <Searchchamp champ={champ} page={page} setPage={setPage}/>
        </div>
    )
}

export default Hischamp