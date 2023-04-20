import Searchchamp from "../utils/Searchchamp"

function Mychamp({formData, setFormData, page, setPage}){
    function champ(champ) {
        setFormData({...formData, myChamp: champ})
    }
    
    return (
        <div className="champions">
           <h1>Quel champion jouais-tu?</h1>
            <Searchchamp champ={champ} page={page} setPage={setPage}/>
        </div>
    )
}

export default Mychamp