import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ChoiceFournisseurLivreur: FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-950/75 flex items-center justify-center z-50">
      <div className="bg-amber-50 rounded-lg shadow-lg w-full max-w-md relative p-6 animate-scale">

        {/* Fermer */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Titre */}
        <h2 className="text-sm font-semibold mb-4">{title}</h2>

        {/* Contenu */}
        <div className="text-gray-600 mb-6 mx-auto w-full flex justify-center gap-4">
            <Link to='/create_fournisseur' className=' px-4 py-2 text-white rounded-lg border  focus:border-gray-300 focus:bg-white focus:text-gray-600  bg-amber-600  cursor-pointer'>Fournisseur</Link>
            <Link to='/create_livreur' className=' px-4 py-2 text-white rounded-lg border  focus:border-gray-300 focus:bg-white focus:text-gray-600  bg-amber-600  cursor-pointer'>Livreur</Link>
        </div>

      </div>
    </div>
  );
};

export default ChoiceFournisseurLivreur;
