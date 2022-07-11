import './Header.css';
import { Link } from 'react-router-dom';

const Encabezado = () => {
    return (
        <header className='header'>
            <h1>Titulo de Pagina 2</h1>
            <nav className='nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/enlace1'>Enlace 1</Link></li>
                    <li><Link to='/enlace2'>Enlace 2</Link></li>                    
                </ul>
            </nav>

        </header>
    )
}

export default Encabezado;