import Searchchamp from "./Searchchamp"

function Mychamp({formData, setFormData, setDisabled, page, setPage}){
    function champ(champ) {
        setFormData({...formData, myChamp: champ})
        setDisabled(false)
    }
    
    return (
        <div>
           <h1>Quels champions jouais-tu?</h1>
            <Searchchamp champ={champ} page={page} setPage={setPage}/>
        </div>
    )
}

export default Mychamp