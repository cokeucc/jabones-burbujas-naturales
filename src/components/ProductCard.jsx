// src/components/ProductCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

export default function ProductCard({ producto }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(producto);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  return (
    <motion.article
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      aria-labelledby={`producto-${producto.id}`}
    >
      {/* imagen */}
      <div className="w-full h-44 bg-rose-50 flex items-center justify-center overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* contenido */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div className="text-center">
          <h3 id={`producto-${producto.id}`} className="text-base font-medium text-rose-700 mb-1">
            {producto.nombre}
          </h3>
          <p className="text-sm text-rose-600 font-semibold">${producto.precio.toLocaleString()}</p>
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
  );
}
