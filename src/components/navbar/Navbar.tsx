import { Link } from 'react-router-dom';
import farmacialogo from '../../assets/logo farMarcia.png';

function Navbar() {
    return (
        <div className="w-full flex justify-center bg-gradient-to-r from-teal-950 to-teal-300 py-4 text-white">
            <div className="container flex justify-between items-center px-4">
                <div className="flex items-center">
                    <img src={farmacialogo} alt="Logo" className="h-12 mr-3" />
                    <span className="font-bold text-xl">FarMarcia</span>
                </div>
                
                <div className="flex gap-6 text-base">
                    <Link to="/" className="hover:underline"> Home </Link>
                    <Link to="/produto" className="hover:underline"> Produto  </Link>
                    <Link to="/categoria" className="hover:underline"> Categoria </Link>
                    <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
