import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';


function Auth() {
  return (
    <div className="auth">
      <h1>LOL CHAMPIONS</h1>
      <Button sx={{width:'70%',height:'10%', mb:2, mt:2}} variant="contained"><Link  to="/signup">S'inscrire</Link></Button>
      <Button sx={{width:'70%',height:'10%', mb:2, mt:2}} variant="contained"><Link to="/signin">Se connecter</Link></Button>
    </div>
  );
}

export default Auth;