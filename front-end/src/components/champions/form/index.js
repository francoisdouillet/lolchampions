import { useState } from "react"
import NavBar from "../../navbar/Navbar"
import ChooseChampion from "./ChooseChampion"
import ChooseRole from "./ChooseRole"
import ChooseRunes from "./ChooseRunes"
import ChooseRuneNew from "./ChooseRunesNew"
import ChooseSpells from "./ChooseSpells"

const ChampionsForm = () => {
    const [page, setPage] = useState(0)

    const userId = localStorage.getItem('userId')
    const [formData, setFormData] = useState({
        userId: userId,
        role: "",
        champions: "",
        spells: []
    });
    console.log(formData)
    const PageDisplay = () => {
        if (page === 0) {
            return (
                <ChooseRole
                    formData={formData}
                    setFormData={setFormData}
                    page={page}
                    setPage={setPage}
                />
            )
        } else if (page === 1) {
            return (
                <ChooseChampion
                    formData={formData}
                    setFormData={setFormData}
                    page={page}
                    setPage={setPage}
                />
            )
        } else if (page === 2) {
            return (
                <ChooseSpells
                    formData={formData}
                    setFormData={setFormData}
                    page={page}
                    setPage={setPage}
                />
            )
        } else if (page === 3) {
            return (
                // <ChooseRunes
                //     formData={formData}
                //     setFormData={setFormData}
                //     page={page}
                //     setPage={setPage} />
                <ChooseRuneNew />
            )
        }
    }
    return (
        <>
            <PageDisplay />
            <NavBar />
        </>
    )
}

export default ChampionsForm