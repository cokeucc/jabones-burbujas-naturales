// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    let animationFrame;
    let x = 0;

    const animate = () => {
      if (!scroll) return;
      if (!pausedRef.current) {
        x -= 0.25; // velocidad suave
        if (Math.abs(x) >= scroll.scrollWidth / 2) x = 0;
        scroll.style.transform = `translateX(${x}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const images = ["/1.jpg", "/12.webp", "/6.jpg", "/14.webp", "/9.webp"];

  return (
    <section
      className="relative bg-gradient-to-r from-pink-100 to-pink-50 py-12 md:py-20 text-center font-sans overflow-hidden"
      aria-label="Hero - Jabones Burbujas Naturales"
    >
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-pink-600 mb-3 md:mb-6"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Productos Hechos con Amor 💕
      </motion.h1>

      <motion.p
        className="text-pink-600 text-sm md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Cuidamos tu piel y el planeta 🌿 — descubre nuestra colección artesanal
      </motion.p>

      {/* carrusel responsive; h cambia en mobile/desktop */}
      <div
        className="relative overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] mx-auto h-[12rem] md:h-[18rem] rounded-2xl"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 h-full will-change-transform transition-transform duration-300 items-center"
          style={{ transform: "translateX(0px)" }}
          aria-hidden="true"
        >
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Jabón artesanal"
              loading="lazy" // ⚡ Carga diferida
              decoding="async" // ⚙️ Decodificación asíncrona
              className="w-[16rem] md:w-[20rem] h-[12rem] md:h-[18rem] object-cover rounded-xl shadow-sm flex-shrink-0"
              draggable="false"
            />
          ))}
        </div>

        {/* degradados laterales para suavizar el corte visual */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-pink-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-pink-50 to-transparent" />
      </div>
    </section>
  );
}
