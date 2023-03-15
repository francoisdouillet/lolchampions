import Searchchamp from "../utils/Searchchamp"

function Hischamp({formData, setFormData, page, setPage}){
    function champ(champ) {
        setFormData({...formData, hisChamp: champ})
    }
    
    return (
        <div>
           <h1>Quel champion jouait l'ennemi ?</h1>
            <Searchchamp champ={champ} page={page} setPage={setPage}/>
        </div>
    )
}

export default Hischamp