/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, Star, ShoppingBag, 
  Leaf, Truck, Store, MessageCircle, ChevronRight 
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_NUMBER = "50671120257";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

  const navLinks = [
    { name: 'Nosotros', href: '#about' },
    { name: 'Productos', href: '#products' },
    { name: 'Comprar', href: '#how-to-buy' },
    { name: 'Distribuidores', href: '#distribuidores' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans bg-brand-cream text-brand-brown overflow-x-hidden selection:bg-brand-olive selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-brand-cream/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 z-50 relative group">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-14 w-auto rounded-full bg-white object-contain shadow-sm border border-brand-cream hidden sm:block" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
              La Quesería <span className="text-brand-terracotta">D' Guachipelín</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium hover:text-brand-terracotta transition-colors ${
                  isScrolled ? 'text-brand-brown' : 'text-brand-cream drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-olive text-brand-cream px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition shadow-sm flex items-center gap-2"
            >
              Pedir Ahora
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-brand-brown bg-brand-cream/80 p-2 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-cream flex flex-col items-center justify-center gap-8 -z-10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl font-medium text-brand-brown hover:text-brand-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-neutral-900/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80" 
            alt="Bodegón de queso artesanal" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/logo.png" 
              alt="La Quesería D' Guachipelín Logo" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain bg-white rounded-full p-2 shadow-2xl" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-cream font-bold leading-tight drop-shadow-lg"
          >
            La Quesería D' Guachipelín
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-brand-cream/90 text-xl md:text-3xl mt-6 font-medium italic drop-shadow-md"
          >
            "Queso artesanal, sabor de nuestra tierra"
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a 
              href="#products" 
              className="inline-flex items-center gap-2 bg-brand-terracotta text-brand-cream hover:bg-brand-terracotta/90 px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-xl"
            >
              Ver Productos <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="/2024.png" 
              alt="La Quesería D' Guachipelín Local" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const fallback = "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80";
                if (target.src !== fallback) {
                  target.src = fallback;
                }
              }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="inline-block bg-brand-olive-light text-brand-olive px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              Nuestra Historia
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Tradición en Cada Bocado</h2>
            <p className="text-lg text-brand-light-brown leading-relaxed">
              Nacimos del amor por el campo y el trabajo honesto. En La Quesería D' Guachipelín 
              elaboramos nuestros productos con esmero, utilizando leche cruda en quesos seleccionados 
              y siempre con leche proveniente de vacas que pastan libremente en las verdes laderas de Costa Rica.
            </p>
            <p className="text-lg text-brand-light-brown leading-relaxed">
              Respetamos los procesos artesanales que nuestros abuelos nos enseñaron, 
              garantizando un producto fresco, sin preservantes artificiales y lleno 
              del orgullo costarricense. Del campo, directo a su mesa.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Leaf className="text-brand-olive" size={32} />
                <h4 className="font-semibold text-xl">100% Natural</h4>
                <p className="text-sm text-brand-light-brown">Sin aditivos ni químicos.</p>
              </div>
              <div className="flex flex-col gap-2">
                <ShoppingBag className="text-brand-terracotta" size={32} />
                <h4 className="font-semibold text-xl">Hecho a Mano</h4>
                <p className="text-sm text-brand-light-brown">Moldeado diariamente.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6 bg-brand-olive-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nuestros Quesos</h2>
            <p className="text-lg text-brand-light-brown">
              Frescura garantizada. Elaborados todas las mañanas para ofrecerle 
              la mejor calidad del mercado artesanal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'tierno',
                name: 'Queso Tierno',
                desc: 'Fresco, blanco y de textura suave. Tradición costarricense ideal para el desayuno o acompañar con café.',
                sizes: 'Precio por Kilogramo',
                price: '₡4,650',
                img: '/queso-turrialba.png',
                fallback: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80',
              },
              {
                id: 'palmito',
                name: 'Queso Palmito',
                desc: 'El favorito de muchos. Técnica artesanal de arrollado tipo trenza, perfecto para derretir o comer solo.',
                sizes: 'Precio por Kilogramo',
                price: '₡9,500',
                img: '/queso-palmito.png',
                fallback: 'https://images.unsplash.com/photo-1628198759520-21e1fe0e9e4f?auto=format&fit=crop&q=80',
              },
              {
                id: 'ahumado',
                name: 'Queso Ahumado',
                desc: 'Lentamente curado y ahumado con maderas de roble y café. Sabor robusto e inolvidable.',
                sizes: 'Precio por Kilogramo',
                price: '₡6,950',
                img: '/queso-ahumado.png',
                fallback: 'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?auto=format&fit=crop&q=80',
              },
              {
                id: 'semiduro',
                name: 'Queso Semiduro',
                desc: 'El clásico de finca. Salado, firme y delicioso; no puede faltar sobre un buen gallo pinto.',
                sizes: 'Precio por Kilogramo',
                price: '₡5,400',
                img: '/queso-fresco.png',
                fallback: 'https://images.unsplash.com/photo-1589881133595-a1c72cb63eb7?auto=format&fit=crop&q=80',
              }
            ].map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-brand-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== product.fallback) {
                        target.src = product.fallback;
                      }
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-brand-cream/90 text-brand-brown px-3 py-1 rounded-full text-sm font-bold shadow">
                    {product.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-brand-light-brown text-sm mb-4 flex-grow">{product.desc}</p>
                  <hr className="border-brand-olive-light mb-4" />
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-brand-olive">{product.sizes}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-cream">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center"
            >
              <div className="inline-block bg-brand-olive-light text-brand-olive px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 self-start">
                Producto Estrella
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Leche Cruda de Pastoreo</h3>
              <p className="text-brand-light-brown text-lg mb-6 leading-relaxed">
                Disfrute del sabor auténtico y todos los beneficios naturales de nuestra leche cruda. 
                Recién ordeñada de vacas de pastoreo libre, manteniendo intactos sus nutrientes y su insuperable cremosidad.
              </p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-terracotta"></span>
                  100% Pura y fresca del día
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-terracotta"></span>
                  Rica en proteínas y vitaminas naturales
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-terracotta"></span>
                  Ideal para sus propias recetas y probióticos
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="md:w-1/2 h-80 md:h-auto"
            >
              <img 
                src="/leche-cruda.png" 
                alt="Leche cruda de campo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  const fallback = 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80';
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />
            </motion.div>
          </div>

          <div className="mt-24 bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brand-olive-light shadow-xl">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-brand-brown">Toda Nuestra Variedad</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="flex items-center gap-3 font-bold text-xl mb-6 text-brand-terracotta border-b border-brand-olive-light pb-3">
                  <span className="w-10 h-10 rounded-full bg-brand-olive-light flex items-center justify-center text-brand-olive text-lg">🧀</span>
                  Tipos de Quesos
                </h4>
                <ul className="grid grid-cols-1 gap-y-3 font-medium">
                  {[
                    { name: 'Tierno (Vaca, Cabra, Búfala)', price: '₡4,650 / kg' },
                    { name: 'Semiduro', price: '₡5,400 / kg' },
                    { name: 'Semiduro Especies', price: '₡5,750 / kg' },
                    { name: 'Maduro', price: '₡6,500 / kg' },
                    { name: 'Poroso', price: '₡5,750 / kg' },
                    { name: 'Mozzarella', price: '₡6,300 / kg' },
                    { name: 'Palmito', price: '₡9,500 / kg' },
                    { name: 'Palmito Especies', price: '₡9,750 / kg' },
                    { name: 'Molido', price: '₡6,400 / kg' },
                    { name: 'Ahumado', price: '₡6,950 / kg' }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center bg-white p-3 rounded-xl border border-brand-cream shadow-sm">
                      <span className="flex items-center gap-3 text-brand-brown">
                        <span className="w-2 h-2 rounded-full bg-brand-terracotta"></span>
                        {item.name}
                      </span>
                      <span className="text-brand-olive font-bold text-sm bg-brand-olive-light px-3 py-1 rounded-full">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-3 font-bold text-xl mb-6 text-brand-olive border-b border-brand-olive-light pb-3">
                  <span className="w-10 h-10 rounded-full bg-brand-olive-light flex items-center justify-center text-brand-terracotta text-lg">🍯</span>
                  Otros Productos
                </h4>
                <ul className="grid grid-cols-1 gap-y-3 font-medium">
                  {[
                    'Leche cruda', 'Yogurts', 'Helados artesanales', 'Miel', 
                    'Cuajada cruda', 'Leche agria', 'Arepas', 'Mantequilla'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center bg-white p-3 rounded-xl border border-brand-cream shadow-sm text-brand-brown">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-olive"></span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Local */}
      <section className="py-24 px-6 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="inline-block bg-brand-olive-light text-brand-olive px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              Economía Local
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Apoyo al Productor Nacional</h2>
            <p className="text-lg text-brand-light-brown leading-relaxed mb-6">
              En La Quesería D' Guachipelín patrocinamos a productores nacionales, apoyando directamente la economía local de nuestras maravillosas comunidades. 
            </p>
            <p className="text-lg text-brand-light-brown leading-relaxed">
              Trabajamos de la mano con quienes cultivan y producen con esfuerzo, asegurando excelencia y calidad, mientras promovemos y celebramos la cultura de Costa Rica en cada producto que le ofrecemos.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Store className="text-brand-olive" size={32} />
                <h4 className="font-semibold text-xl">Comercio Justo</h4>
                <p className="text-sm text-brand-light-brown">Apoyo directo que beneficia a familias productoras.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Star className="text-brand-terracotta" size={32} />
                <h4 className="font-semibold text-xl">100% Tico</h4>
                <p className="text-sm text-brand-light-brown">Impulsando lo nuestro con orgullo y tradición.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-brand-cream aspect-[4/5] md:aspect-auto md:h-[600px] flex items-center justify-center relative w-full lg:w-4/5 mx-auto"
          >
             <iframe 
               src="https://www.instagram.com/reel/DG5rpWHNXbN/embed/" 
               className="absolute inset-0 w-full h-full border-0 bg-transparent" 
               scrolling="no" 
               allow="encrypted-media"
               title="Instagram TV Reel"
             ></iframe>
          </motion.div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center">¿Cómo comprar?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-cream flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-olive-light rounded-full flex items-center justify-center mb-6 text-brand-olive">
                <Truck size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Envío a Domicilio</h3>
              <p className="text-brand-light-brown text-sm leading-relaxed">
                Enviamos a toda el área metropolitana de San José. Haga su pedido y reciba producto fresco en la puerta de su casa.<br />
                <span className="font-medium mt-2 block text-brand-olive">Todos los envíos a domicilio se realizan mediante Uber Flash.</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-cream flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-olive-light rounded-full flex items-center justify-center mb-6 text-brand-olive">
                <Store size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Retiro en Local</h3>
              <p className="text-brand-light-brown">
                Visítenos en Escazú para encargar y retirar directamente en nuestra bodega. Siempre será bienvenido.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-8 py-4 rounded-full text-xl font-bold transition-transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Distribuidores */}
      <section id="distribuidores" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Puntos de Venta Autorizados</h2>
            <p className="text-lg text-brand-light-brown">
              Además de nuestro local y envíos a domicilio, puede encontrar nuestra calidad artesanal en los siguientes comercios:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Lechería Las Lapas",
              "Deli Bon",
              "Hircus",
              "Quesos Biamonte",
              "Hacienda Santa Paula",
              "El Torito",
              "Lácteos Tío Luis",
              "LACTOA",
              "CAFANO Lácteos"
            ].map((name, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-brand-cream/30 p-6 rounded-2xl shadow-sm border border-brand-olive-light/50 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-shadow hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-terracotta shadow-sm shrink-0">
                  <Store size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-brown">{name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-brand-brown text-brand-cream relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute opacity-5 -top-24 -right-24">
          <Star size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">Lo que dicen en casa</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-brand-brown">
            {[
              {
                text: "El mejor queso Turrialba que he probado. El sabor, la textura y el olor me recuerdan al queso que hacía mi abuela en la finca.",
                name: "María J.",
                place: "Escazú"
              },
              {
                text: "Siempre pido el queso palmito para los chiquitos y es un éxito rotundo en casa. Súper recomendado el servicio exprés, llega fresquito.",
                name: "Carlos A.",
                place: "Santa Ana"
              },
              {
                text: "Llevamos el queso ahumado para unas boquitas con vino el fin de semana y quedó espectacular. Nos hicimos clientes fieles.",
                name: "Laura y Diego",
                place: "San José"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-brand-cream p-8 rounded-2xl shadow-xl flex flex-col relative"
              >
                <div className="flex text-yellow-500 mb-4 drop-shadow-sm">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="mt-auto border-t border-brand-olive-light pt-4">
                  <p className="font-bold font-serif text-xl">{review.name}</p>
                  <p className="text-brand-light-brown text-sm">{review.place}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-24 px-6 bg-brand-olive-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-10 md:p-14">
            <h2 className="font-serif text-4xl font-bold mb-8">Visítenos o contáctenos</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center shrink-0 text-brand-terracotta">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Teléfono y WhatsApp</h4>
                  <a href={WHATSAPP_LINK} className="text-lg text-brand-light-brown hover:text-brand-terracotta transition-colors">
                    +506 7112 0257
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center shrink-0 text-brand-terracotta">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Dirección</h4>
                  <p className="text-brand-light-brown">
                    800 metros norte de Construplaza, Oficentro Loma Real<br />
                    San Rafael, Guachipelí, Escazú, 10203<br />
                    San José, Costa Rica<br />
                    <span className="text-sm italic mt-1 block">*Contamos con amplio parqueo</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center shrink-0 text-brand-terracotta">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif mb-2">Horario de Atención</h4>
                  <ul className="text-brand-light-brown space-y-1 text-sm bg-brand-cream/50 p-4 rounded-xl border border-brand-olive-light">
                    <li className="flex justify-between"><span>Lunes a Viernes:</span> <span className="font-medium">9:00 am - 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Sábado:</span> <span className="font-medium">10:00 am - 4:00 pm</span></li>
                    <li className="flex justify-between text-brand-terracotta font-medium"><span>Domingo:</span> <span>Cerrado</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto w-full bg-neutral-200">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Oficentro%20Loma%20Real,%20San%20Rafael,%20Guachipel%C3%AD,%20Escaz%C3%BA,%20Costa%20Rica&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación La Quesería D' Guachipelín"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-brown text-brand-olive-light py-10 px-6 border-t border-brand-light-brown/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-brand-cream">La Quesería D' Guachipelín</h3>
            <p className="mt-2 text-brand-olive-light/70 text-sm">Orgullo costarricense directo a su mesa.</p>
          </div>
          <p className="text-sm text-brand-olive-light/60">
            &copy; {new Date().getFullYear()} La Quesería D' Guachipelín. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-brand-whatsapp text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:bg-brand-whatsapp-hover hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-brand-brown px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden sm:block">
          ¡Ordene Aquí!
        </span>
        <MessageCircle size={32} />
      </a>

    </div>
  );
}
