// src/components/CartDrawer.jsx
import { useState } from "react";
import { useCart } from "./CartContext";
import { WHATSAPP_NUMBER } from "../config";

export default function CartDrawer() {
  const {
    cart = [],
    total = 0,
    removeFromCart = () => {},
    clearCart = () => {},
    isOpen = false,
    setIsOpen = () => {},
  } = useCart() || {};

  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen) return null;

  // --- eliminar un item (si es el último, cerrar drawer) ---
  const handleRemove = (id) => {
    if (cart.length === 1) {
      // si es el único elemento, quitarlo y cerrar el carrito
      removeFromCart(id);
      setIsOpen(false);
    } else {
      removeFromCart(id);
    }
  };

  // --- confirmar y vaciar (ya cierra) ---
  const handleConfirmVaciar = () => {
    setShowConfirm(false);
    clearCart();
    setIsOpen(false);
  };

  const handleVaciarClick = () => {
    if (cart.length === 0) return;
    setShowConfirm(true);
  };

  // --- comprar: abrir WhatsApp, vaciar carrito y cerrar drawer ---
  const handleComprar = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío 🛒");
      return;
    }

    const lineas = cart.map(
      (p) => `• ${p.nombre} x${p.cantidad} — $${(p.precio * p.cantidad).toLocaleString()}`
    );

    const mensaje = encodeURIComponent(
      `Hola 👋\nQuiero comprar estos productos:\n\n${lineas.join(
        "\n"
      )}\n\nTotal: $${total.toLocaleString()}\n\nPor favor, indícame cómo proceder con el pago y envío.`
    );

    // abrir WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");

    // vaciar carrito y cerrar drawer para que el header muestre 0
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Fondo semi-transparente */}
      <div
        className="fixed inset-0 bg-black/40 flex justify-end z-50"
        onClick={() => setIsOpen(false)}
      >
        {/* Drawer */}
        <div
          className="bg-white w-80 h-full shadow-lg p-4 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Tu carrito</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-pink-500 font-bold text-lg"
              aria-label="Cerrar carrito"
            >
              ✖
            </button>
          </div>

          {/* Contenido */}
          {cart.length === 0 ? (
            <p className="text-gray-500 flex-grow flex items-center justify-center">
              El carrito está vacío
            </p>
          ) : (
            <div className="flex-grow overflow-y-auto space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium text-sm">{item.nombre}</p>
                    <p className="text-gray-500 text-xs">
                      {item.cantidad} × ${item.precio.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-sm font-semibold">
                      ${(item.precio * item.cantidad).toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700 text-xs"
                      aria-label={`Quitar ${item.nombre}`}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Total y acciones — solo si hay items */}
          {cart.length > 0 && (
            <div className="mt-4 border-t pt-4 space-y-2">
              <div className="flex justify-between font-semibold text-pink-700">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>

              <button
                onClick={handleComprar}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
              >
                Comprar
              </button>

              <button
                onClick={handleVaciarClick}
                className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de confirmación */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[9999]">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80 mx-4">
            <p className="text-gray-800 text-lg mb-4">¿Seguro que deseas vaciar el carrito?</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmVaciar}
                className="px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
