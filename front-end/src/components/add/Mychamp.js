import Searchchamp from "./Searchchamp"

function Mychamp({formData, setFormData, page, setPage}){
    function champ(champ) {
        setFormData({...formData, myChamp: champ})
    }
    
    return (
        <div>
           <h1>Quel champion jouais-tu?</h1>
            <Searchchamp champ={champ} page={page} setPage={setPage}/>
        </div>
    )
}

export default Mychamp