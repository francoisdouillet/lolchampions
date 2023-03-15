import Searchchamp from "../../utils/Searchchamp"

const ChooseChampion = ({formData, setFormData, page, setPage }) => {
    function champ(champ) {
        setFormData({...formData, champions: champ})
    }
    return (
        <div className="champions">
            <h1>Choisis le champion</h1>
         <Searchchamp champ={champ} page={page} setPage={setPage}/>
         {/* <div className='champions__navigation'>
                <Button sx={{padding: '6px 0px'}}>
                    <ArrowBackIcon
                        onClick={() => {
                            setPage((page) => page - 1);
                        }}
                        sx={{
                            width: '100vw',
                            height: '8vh'
                        }}
                    />
                </Button>
            </div> */}
        </div>
    )
}

export default ChooseChampion