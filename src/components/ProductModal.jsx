// src/components/ProductModal.jsx
import { X } from 'lucide-react';

export default function ProductModal({ producto, onClose }) {
  // Función para cerrar el modal al hacer clic en el fondo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Fondo rosa claro semitransparente con opacidad 0.9 (90% opaco)
    <div 
      className="fixed inset-0 z-50 bg-[rgba(255,246,246,0.9)] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      {/* Contenedor del Modal (tamaño máximo en escritorio) */}
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative">
        
        {/* Botón de Cierre (la 'X') */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 z-10 transition shadow"
          aria-label="Cerrar detalles del producto"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          
          {/* Columna de la Imagen Grande */}
          <div className="w-full md:w-1/2 p-6 bg-rose-50 rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex items-center justify-center">
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="max-h-80 w-auto object-contain rounded-lg"
            />
          </div>
          
          {/* Columna de la Información */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-pink-700 mb-2">{producto.nombre}</h2>
            
            <p className="text-xl text-pink-600 font-semibold mb-4">${producto.precio.toLocaleString()}</p>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {producto.descripcion || "¡Este jabón natural es perfecto para tu piel! Elaborado con aceites botánicos de coco y oliva, contiene extractos puros de rosas y un toque de lavanda. Ideal para pieles sensibles y un baño relajante."}
            </p>
            
            <p className="text-sm text-gray-500 mt-4">
              Para agregar a tu pedido, usa el botón "Agregar al carrito" que está debajo del producto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}