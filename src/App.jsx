// src/App.jsx
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import WhatsAppButton from "./components/WhatsAppButton";
import { CartProvider } from "./components/CartContext";
import CartDrawer from "./components/CartDrawer";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AccordionItem from "./components/AccordionItem";
import { ArrowLeft, ArrowRight } from "lucide-react";

function App() {
  const destacadosRef = useRef(null);
  const categoriasRef = useRef(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const scrollLeft = (ref) =>
    ref.current?.scrollBy({ left: -900, behavior: "smooth" });
  const scrollRight = (ref) =>
    ref.current?.scrollBy({ left: 900, behavior: "smooth" });

  // 🧼 SEO dinámico por categoría
  const seoData = {
    Todos: {
      title:
        "Jabones Naturales y Recuerdos Personalizados | Jabones Burbujas Naturales",
      description:
        "Descubre recuerdos personalizados para baby shower, matrimonio, bautizo, graduación, cumpleaños y despedida de soltera. Jabones naturales hechos a mano en Chile.",
      keywords:
        "jabones naturales, jabones artesanales, recuerdos para eventos, recuerdos personalizados, regalos naturales, jabones Chile",
    },
    Matrimonio: {
      title:
        "Recuerdos para Matrimonio | Jabones Artesanales Personalizados | Jabones Burbujas Naturales",
      description:
        "Sorprende a tus invitados con recuerdos de matrimonio únicos: jabones artesanales personalizados con fragancias naturales y empaques elegantes.",
      keywords:
        "recuerdos para matrimonio, regalos para matrimonio, jabones personalizados, jabones naturales, recuerdos boda, souvenirs boda",
    },
    "Despedida Soltera": {
      title:
        "Recuerdos para Despedida de Soltera | Jabones Divertidos y Aromáticos | Jabones Burbujas Naturales",
      description:
        "Celebra con estilo tu despedida de soltera con jabones artesanales personalizados y fragancias irresistibles. Recuerdos únicos hechos a mano.",
      keywords:
        "recuerdos despedida de soltera, jabones despedida soltera, regalos fiesta, souvenirs despedida, jabones personalizados",
    },
    "Baby Shower": {
      title:
        "Recuerdos para Baby Shower | Jabones Naturales y Personalizados | Jabones Burbujas Naturales",
      description:
        "Dale ternura a tu baby shower con recuerdos únicos: jabones naturales con aromas suaves, diseños personalizados y presentaciones adorables.",
      keywords:
        "recuerdos baby shower, regalos baby shower, jabones baby shower, jabones personalizados, recuerdos bebé, souvenirs baby shower",
    },
    Bautizo: {
      title:
        "Recuerdos para Bautizo | Jabones Personalizados Artesanales | Jabones Burbujas Naturales",
      description:
        "Recuerdos delicados y elegantes para bautizos: jabones naturales hechos a mano con amor, perfectos para regalar a tus invitados.",
      keywords:
        "recuerdos bautizo, jabones bautizo, regalos bautizo, souvenirs bautizo, jabones personalizados, jabones naturales",
    },
    Cumpleaños: {
      title:
        "Recuerdos para Cumpleaños | Jabones Coloridos y Aromáticos | Jabones Burbujas Naturales",
      description:
        "Haz que cada cumpleaños sea especial con recuerdos personalizados: jabones naturales con aromas frutales y colores vibrantes.",
      keywords:
        "recuerdos cumpleaños, jabones cumpleaños, regalos cumpleaños, jabones personalizados, jabones naturales, souvenirs cumpleaños",
    },
    Graduacion: {
      title:
        "Recuerdos para Graduación | Jabones Artesanales Personalizados | Jabones Burbujas Naturales",
      description:
        "Celebra tu logro con recuerdos de graduación elegantes y naturales. Jabones hechos a mano para compartir con familia y amigos.",
      keywords:
        "recuerdos graduación, jabones graduación, regalos graduación, jabones personalizados, recuerdos evento, jabones Chile",
    },
  };

  const currentSEO = seoData[categoriaSeleccionada] || seoData.Todos;

  // 🧴 Productos
  const productos = [
    { id: 1, nombre: "Jabón de Lavanda", precio: 4500, imagen: "/lavanda.png", categoria: "Matrimonio" },
    { id: 2, nombre: "Jabón de Avena", precio: 4000, imagen: "/avena.png", categoria: "Matrimonio" },
    { id: 3, nombre: "Jabón de Menta", precio: 4200, imagen: "/menta.png", categoria: "Despedida Soltera" },
    { id: 4, nombre: "Jabón de Coco", precio: 4300, imagen: "/1.jpg", categoria: "Baby Shower" },
    { id: 5, nombre: "Jabón de Rosa Mosqueta", precio: 4700, imagen: "/2.jpg", categoria: "Despedida Soltera" },
    { id: 6, nombre: "Jabón de Almendra", precio: 4100, imagen: "/3.jpg", categoria: "Bautizo" },
    { id: 7, nombre: "Jabón de Miel", precio: 4400, imagen: "/4.jpg", categoria: "Matrimonio" },
    { id: 8, nombre: "Jabón de Naranja", precio: 4200, imagen: "/5.jpg", categoria: "Baby Shower" },
    { id: 9, nombre: "Jabón de Café", precio: 4600, imagen: "/6.jpg", categoria: "Bautizo" },
    { id: 10, nombre: "Jabón Especial", precio: 4800, imagen: "/7.jpg", categoria: "Cumpleaños" },
    { id: 11, nombre: "Jabón Premium", precio: 5200, imagen: "/8.jpg", categoria: "Graduacion" },
  ];

  const categorias = [
    "Todos",
    "Matrimonio",
    "Despedida Soltera",
    "Baby Shower",
    "Bautizo",
    "Cumpleaños",
    "Graduacion",
  ];

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  // 🧠 Preguntas Frecuentes
  const faqData = [
    {
      pregunta: "¿De qué están hechos sus jabones?",
      respuesta:
        "Nuestros jabones son artesanales, elaborados con aceites saponificados de coco y oliva, manteca natural, extractos botánicos y aceites esenciales. No contienen sulfatos ni parabenos.",
    },
    {
      pregunta: "¿Realizan envíos a todo Chile?",
      respuesta:
        "Sí, realizamos envíos a todo Chile a través de Correos de Chile o Chilexpress. El costo y el tiempo de envío se calculan en el carrito de compras.",
    },
    {
      pregunta:
        "¿Ofrecen pedidos personalizados para eventos (matrimonios, bautizos)?",
      respuesta:
        "¡Por supuesto! Nos especializamos en recuerdos personalizados para eventos. Contáctanos por WhatsApp con al menos 3 semanas de anticipación.",
    },
    {
      pregunta: "¿Cuál es su política de cambios y devoluciones?",
      respuesta:
        "Aceptamos devoluciones solo en caso de productos dañados durante el envío, reportados dentro de las 48 horas siguientes. Los personalizados no son elegibles para devolución.",
    },
  ];

  // 🧼 Componente Carrusel
  const Carrusel = ({ titulo, data, referencia }) => (
    <section className="relative pb-12 bg-rose-50">
      <h2
        className={`text-center mb-8 tracking-tighter ${
          titulo.includes("🧼")
            ? "text-2xl font-semibold text-pink-700"
            : "text-3xl font-extrabold text-pink-700"
        }`}
      >
        {titulo}
      </h2>

      <div className="relative max-w-7xl mx-auto px-6">
        <button
          onClick={() => scrollLeft(referencia)}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm z-20 hover:bg-rose-200 transition"
          aria-label="Anterior"
        >
          <ArrowLeft size={20} />
        </button>

        <div
          ref={referencia}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
        >
          {data.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 w-[32%] min-w-[280px] snap-center"
            >
              <ProductCard producto={p} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollRight(referencia)}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm z-20 hover:bg-rose-200 transition"
          aria-label="Siguiente"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );

  // 🔍 Datos estructurados JSON-LD para negocio y productos
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Jabones Burbujas Naturales",
    description:
      "Jabones artesanales y recuerdos personalizados para matrimonio, baby shower, bautizo, graduación y más.",
    url: "https://www.jabonesburbujasnaturales.cl",
    logo: "https://www.jabonesburbujasnaturales.cl/logo.png",
    sameAs: [
      "https://www.instagram.com/jabonesburbujasnaturales",
      "https://www.facebook.com/jabonesburbujasnaturales",
    ],
    makesOffer: productos.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p.nombre,
        image: `https://www.jabonesburbujasnaturales.cl${p.imagen}`,
        category: p.categoria,
        price: p.precio,
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <CartProvider>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta name="author" content="Jabones Burbujas Naturales" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.jabonesburbujasnaturales.cl" />

        {/* 📦 Datos estructurados para SEO */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />
      <Hero />

      {/* Productos Destacados */}
      <section id="productos" className="scroll-mt-28">
        <Carrusel
          titulo="✨ Productos Destacados ✨"
          data={productos.slice(0, 8)}
          referencia={destacadosRef}
        />
      </section>

      {/* Categorías */}
      <section id="categorias" className="bg-rose-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 text-center pt-12 pb-12">
          <h2 className="text-3xl font-extrabold text-pink-700 mb-6 tracking-tighter">
            🌿 Nuestras Categorías 🌿
          </h2>
          <div className="flex justify-center gap-6 flex-wrap mb-8">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-5 py-2 rounded-full font-medium shadow-md transition hover:scale-105 ${
                  categoriaSeleccionada === cat
                    ? "bg-pink-700 text-white"
                    : "bg-white text-rose-500 border border-rose-100 hover:bg-rose-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Carrusel
            titulo={
              categoriaSeleccionada === "Todos"
                ? "🧼 Todos los productos"
                : `🧼 ${categoriaSeleccionada}`
            }
            data={productosFiltrados}
            referencia={categoriasRef}
          />
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" className="py-8 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-pink-700 mb-2 tracking-tighter">
            ❓ Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 mb-8">
            Encuentra respuestas a tus dudas más comunes antes de comprar.
          </p>
          <div className="text-left">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                pregunta={item.pregunta}
                respuesta={item.respuesta}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </CartProvider>
  );
}

export default App;
