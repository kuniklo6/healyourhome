import React from 'react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md py-11 sticky top-0 z-50 border-b border-soft-peach">
      <div className="container mx-auto px-6 flex items-center justify-between flex-wrap">
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto justify-center md:justify-start">
          <img src="/logo.webp" alt="Heal Your Home" className="h-32 w-auto transform scale-150 origin-center md:origin-left" />
          <div className="flex flex-col justify-center items-center md:items-start mt-8 md:mt-0 md:ml-24" style={{ fontFamily: "'Eagle Lake', serif" }}>
            <span className="text-4xl leading-none" style={{ lineHeight: '1.1', color: '#cd9f7b' }}>Heal</span>
            <span className="text-4xl leading-none" style={{ lineHeight: '1.1', color: '#cd9f7b' }}>Your</span>
            <span className="text-4xl leading-none" style={{ lineHeight: '1.1', color: '#cd9f7b' }}>Home</span>
          </div>
        </div>
        <nav className="hidden lg:flex space-x-8 text-sm font-semibold text-warm-text/80 uppercase tracking-widest">
          <a className="hover:text-terracotta transition-colors" href="/" >Home</a>
          <a className="hover:text-terracotta transition-colors" href="#" >About</a>
          <a className="hover:text-terracotta transition-colors" href="#" >Services</a>
          <a className="hover:text-terracotta transition-colors" href="#" >Workshops</a>
          <a className="hover:text-terracotta transition-colors" href="/testimonials" >Testimonials</a>
          <a className="hover:text-terracotta transition-colors" href="#" >Blog</a>

        </nav>
        <div className="hidden md:flex items-center">
          <a className="bg-gentle-sage hover:bg-opacity-80 text-earthy-brown px-6 py-2 rounded-full font-bold text-sm transition-all" href="#" >Contact</a>
        </div>
        <button className="lg:hidden text-earthy-brown ml-auto mt-4 md:mt-0" >
          <span className="material-symbols-outlined" >menu</span>
        </button>
      </div>
    </header>
  );
}
