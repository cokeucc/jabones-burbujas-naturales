import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AccordionItem({ pregunta, respuesta }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Define el color de fondo para el acordeón (rosa pálido de tu sitio)
  const headerBg = isOpen ? 'bg-pink-100/70' : 'bg-pink-50';
  const headerText = isOpen ? 'text-pink-700' : 'text-pink-600';
  const icon = isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />;

  return (
    <div className="border border-pink-200 rounded-xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      
      {/* Encabezado de la Pregunta (Visible Siempre) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-5 font-semibold text-left ${headerBg} ${headerText} focus:outline-none`}
        aria-expanded={isOpen}
      >
        <span>
          <span className="mr-2 text-xl">❓</span>
          {pregunta}
        </span>
        {icon}
      </button>

      {/* Contenido de la Respuesta (Visible solo cuando isOpen es true) */}
      {isOpen && (
        <div className="p-5 text-gray-700 bg-white border-t border-pink-100 animate-slideDown">
          {respuesta}
        </div>
      )}

      {/* Estilo para que se vea la animación (añadir al final del archivo si no usas un archivo CSS global) */}
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}