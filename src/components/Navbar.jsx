// src/components/Navbar.jsx
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { setIsOpen, cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const faqLink = "#faq";

  return (
    <nav className="flex justify-between items-center px-3 sm:px-6 py-3 bg-pink-400 text-white shadow-md sticky top-0 z-50">
      
      {/* Logo / Marca */}
      <div className="flex items-center flex-shrink min-w-0">
        <h1 className="font-bold tracking-tight text-base xs:text-lg sm:text-xl md:text-2xl whitespace-nowrap truncate">
          Jabones Burbujas Naturales
        </h1>
      </div>

      {/* Menú Desktop */}
      <div className="hidden md:flex flex-grow justify-center gap-8 text-white/90">
        <a href="#productos" className="font-medium hover:underline hover:text-white transition">
          Productos Destacados
        </a>
        <a href="#categorias" className="font-medium hover:underline hover:text-white transition">
          Nuestras Categorías
        </a>
        <a href={faqLink} className="font-medium hover:underline hover:text-white transition">
          Preguntas Frecuentes
        </a>
      </div>

      {/* Carrito + Menú Hamburguesa */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        {/* Botón del carrito */}
        <button onClick={() => setIsOpen(true)} className="relative hover:text-pink-100 transition">
          <ShoppingCart size={22} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
              {cart.length}
            </span>
          )}
        </button>

        {/* Menú Hamburguesa (solo en mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Drawer lateral móvil */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white text-pink-700 w-3/4 h-full shadow-lg p-6 flex flex-col gap-6 animate-slideInLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-2">Menú</h2>
            <a
              href="#productos"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500 transition font-medium"
            >
              Productos Destacados
            </a>
            <a
              href="#categorias"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500 transition font-medium"
            >
              Nuestras Categorías
            </a>
            <a
              href={faqLink}
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500 transition font-medium"
            >
              Preguntas Frecuentes
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
