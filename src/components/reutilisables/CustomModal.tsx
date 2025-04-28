import { ReactNode, FC } from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = "Confirmer",
  cancelText = "Annuler",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-950/75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6 animate-scale">

        {/* Fermer */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Titre */}
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        {/* Contenu */}
        <div className="text-gray-600 mb-6">
          {children}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomModal;
