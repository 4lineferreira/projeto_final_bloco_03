import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriasProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <header className="py-2 px-6 bg-teal-900 text-white font-major-mono text-2xl">
                Categoria
            </header>
            <p className="p-8 text-3xl font-major-mono bg-white h-full text-teal-900">
                {categoria.descricao}
            </p>

            <div className="flex">
                <Link 
                    to={`/editarcategoria/${categoria.id}`} 
                    className="w-full text-slate-100 font-major-mono bg-teal-900 hover:bg-teal-300
                        flex items-center justify-center py-2 rounded-bl-2xl transition-colors"
                >
                    <button>Editar</button>
                </Link>

                <Link 
                    to={`/deletarcategoria/${categoria.id}`} 
                    className="w-full text-slate-100 font-major-mono  bg-teal-900 hover:bg-teal-300
                        flex items-center justify-center rounded-br-2xl transition-colors"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;