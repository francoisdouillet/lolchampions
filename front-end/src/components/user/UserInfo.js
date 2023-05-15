import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const UserInfo = () => {

    const username = localStorage.getItem('username')
    const navigate = useNavigate()

    function handleClick() {
        localStorage.clear()
        alert('vous avez bien été déconnecté')
        navigate('/')
    }

    return (
        <div>
            <h1>Bonjour {username}</h1>
            <Button variant="contained" onClick={() => handleClick()}>Se déconnecter</Button>
        </div>
    )
}

export default UserInfo