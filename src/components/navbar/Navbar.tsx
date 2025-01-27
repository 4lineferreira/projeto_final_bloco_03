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
                    <a href="#" className="hover:underline">Produto</a>
                    <a href="#" className="hover:underline">Categoria</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

