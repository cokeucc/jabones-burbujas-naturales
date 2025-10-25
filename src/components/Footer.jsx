// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-rose-50 py-8 border-t border-rose-100"
      role="contentinfo"
      aria-label="Pie de página del sitio Jabones Burbujas Naturales"
    >
      <div className="max-w-5xl mx-auto px-6 text-center text-rose-600 font-medium">
        <p>
          © {currentYear} <span className="font-semibold">Jabones Burbujas Naturales</span> · Hecho con 💖 y React
        </p>

        <nav className="mt-3 flex justify-center gap-6 text-sm text-rose-500">
          <a
            href="#productos"
            className="hover:text-pink-600 transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
          >
            Productos
          </a>
          <a
            href="#categorias"
            className="hover:text-pink-600 transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
          >
            Categorías
          </a>
          <a
            href="#faq"
            className="hover:text-pink-600 transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="https://www.instagram.com/jabones_burbujas_naturales"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
            aria-label="Instagram Jabones Burbujas Naturales (abre en una nueva pestaña)"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
