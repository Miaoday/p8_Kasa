import { Link } from 'react-router-dom';
import './error.scss';

function Error () {
  return(
    <div className='error'>
      <h1 className='error_title'>404</h1> 
      <div className='error_txt'>Oups! La page que vous demandez n'existe pas.</div>
      <Link className='error_link' to="/"> Retourner sur la page d’accueil </Link>
    </div>
  )
}
export default Error