// src/components/ProductCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";
// 1. Importar el nuevo componente Modal
import ProductModal from "./ProductModal";

export default function ProductCard({ producto }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  // 2. CREAR el estado para abrir/cerrar el Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    addToCart(producto);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  return (
    <>
    <motion.article
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      aria-labelledby={`producto-${producto.id}`}
    >
      {/* imagen - CON EL EVENTO onClick */}
      <div 
        className="w-full h-48 bg-rose-50 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)} // 3. ABRIR MODAL AL CLIC
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          loading="lazy" 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* contenido */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div className="text-center">
          <h3
            id={`producto-${producto.id}`}
            className="text-base font-medium text-rose-700 mb-1"
          >
            {producto.nombre}
          </h3>
          <p className="text-sm text-rose-600 font-semibold">
            ${producto.precio.toLocaleString()}
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="mt-3 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full shadow-sm transition text-sm"
          aria-label={`Agregar ${producto.nombre} al carrito`}
        >
          Agregar al carrito
        </button>
      </div>

      {/* Toast local */}
      {showToast && (
        <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 bottom-6 bg-rose-700 text-white px-3 py-1.5 rounded-full text-sm shadow">
          Añadido ✔
        </div>
      )}
    </motion.article>

    {/* 4. RENDERIZAR el Modal si está abierto */}
    {isModalOpen && (
        <ProductModal 
            producto={producto} 
            onClose={() => setIsModalOpen(false)} 
        />
    )}
    </>
  );
}