export default function Home() {
  return (
    <>
      
<header className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-50 border-b border-soft-peach">
<div className="container mx-auto px-6 flex items-center justify-between">
<div className="flex items-center">
<svg className="w-12 h-12 text-terracotta" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 10C55.3043 10 60.3914 12.1071 64.1421 15.8579C67.8929 19.6086 70 24.6957 70 30C70 41.0457 61.0457 50 50 50C38.9543 50 30 41.0457 30 30C30 18.9543 38.9543 10 50 10Z" stroke="currentColor" strokeWidth="2.5"></path>
<path d="M75 53.3C80.3043 53.3 85.3914 55.4071 89.1421 59.1579C92.8929 62.9086 95 67.9957 95 73.3C95 84.3457 86.0457 93.3 75 93.3C63.9543 93.3 55 84.3457 55 73.3C55 62.2543 63.9543 53.3 75 53.3Z" stroke="currentColor" strokeWidth="2.5"></path>
<path d="M25 53.3C30.3043 53.3 35.3914 55.4071 39.1421 59.1579C42.8929 62.9086 45 67.9957 45 73.3C45 84.3457 36.0457 93.3 25 93.3C13.9543 93.3 5 84.3457 5 73.3C5 62.2543 13.9543 53.3 25 53.3Z" stroke="currentColor" strokeWidth="2.5"></path>
</svg>
<span className="ml-3 font-display font-bold text-2xl text-earthy-brown tracking-tight" >Heal Your Home</span>
</div>
<nav className="hidden lg:flex space-x-8 text-sm font-semibold text-warm-text/80 uppercase tracking-widest">
<a className="hover:text-terracotta transition-colors" href="#" >Home</a>
<a className="hover:text-terracotta transition-colors" href="#" >About</a>
<a className="hover:text-terracotta transition-colors" href="#" >My Services</a>
<a className="hover:text-terracotta transition-colors" href="#" >Workshops</a>
<a className="hover:text-terracotta transition-colors" href="#" >Blog</a>
<a className="hover:text-terracotta transition-colors" href="#" >Contact</a>
</nav>
<div className="hidden md:flex items-center">
<a className="bg-gentle-sage hover:bg-opacity-80 text-earthy-brown px-6 py-2 rounded-full font-bold text-sm transition-all" href="#" >Donate</a>
</div>
<button className="lg:hidden text-earthy-brown" >
<span className="material-symbols-outlined" >menu</span>
</button>
</div>
</header>
<section className="hero-gradient pt-20 pb-28">
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 text-center md:text-left">
<span className="inline-block px-4 py-1 bg-terracotta/10 text-terracotta rounded-full text-sm font-bold uppercase tracking-widest mb-6" >Welcome Home</span>
<h1 className="text-5xl md:text-7xl font-bold text-earthy-brown mb-6 leading-tight" >House Healing</h1>
<p className="text-2xl md:text-3xl font-serif italic text-warm-text/70 mb-10" >Spirit of place – a path to well being</p>
<div className="space-y-4 text-lg text-warm-text/80 mb-10 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
<p className="" >Geopathic stress removal:</p>
<p className="" >reduce unwanted effects from your subtle environment:</p>
<p className="" >high sensitivity, anxiety, poor sleep, EMF issues...</p>
<p className="font-medium text-terracotta" >...and more</p>
</div>
<a className="inline-block bg-terracotta text-white font-bold py-4 px-10 rounded-full hover:scale-105 hover:shadow-lg transition-all uppercase tracking-widest" href="#" >Learn More</a>
</div>
<div className="md:w-1/2 flex flex-col items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-gentle-sage rounded-3xl rotate-3 transition-transform group-hover:rotate-6"></div>
<img alt="Atmospheric photograph of a solitary standing stone in a misty landscape" className="relative w-72 shadow-2xl rounded-2xl object-cover transform transition-transform group-hover:-rotate-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYDL4bo5dMQqP5kOm987Asjaxt4RYuJkleLYQVCSA5flFdwqWnfp8x0jDzToxo7hJURdlSGxZ-moWPZG8VL0_Aub3klOWhE-BBBjG7oq0Xh4Lk3uqTbqUb4MQ868fWGHTF8VpObwmY53GPtcl-slk8ypRkVTsPJqqKuvM2n8nB7GI4DRPjofEvAzmdxbcphePSTWOLoYWLpfcadvYGC0w_8p3ZLCiDvQSXlMH5ULEIiKlfpTY4Yy21HOxoLirLVGDRnPSqcNWzVEp"  />
</div>
<p className="mt-12 text-warm-text font-medium text-lg text-center" >Discover the ancient power of sacred landscapes and energetic resonance.</p>
</div>
</div>
</section>
<section className="py-24 bg-white relative">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
<div className="group">
<div className="w-32 h-32 rounded-3xl bg-soft-peach flex items-center justify-center mx-auto mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
<img alt="House Healing Icon" className="w-20 h-20 object-contain mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ79GFi73XQbpk7iwOTI3p37CWrPZoJGMLwiXv1RdY9-vr3_gejowjOlHhwcYjKBqGYLh_2DmFIA5HXW1wEHOVydyJeNzLGdULztjjTf6vDeHfAC8DYckeoJ20PY6IaPGzZbOISO76aQqKjZ0TVDPxACAUeVj0Vw3rzEAt6uJD-hC6kaYtNAiZQLRSDnF2rJ0RXfwDVDukST-ykmgktAfSwqu6hjKtKwPDWOOFwonLVNUagScJx6MUphGKnAVpTLetAoy0S6dymWVQ"  />
</div>
<h3 className="text-2xl font-bold mb-4 text-earthy-brown" >House Healing</h3>
<p className="text-warm-text/70 text-base leading-relaxed px-4" >Feel more at ease in a newly created healing environment</p>
</div>
<div className="group">
<div className="w-32 h-32 rounded-3xl bg-gentle-sage flex items-center justify-center mx-auto mb-8 transform transition-transform group-hover:scale-110 group-hover:-rotate-3 overflow-hidden">
<img alt="Mentoring Icon" className="w-20 h-20 object-contain mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0H1zubHX3IbqL8XzopjICXaIDkOSBweO95xstyfWrGZP7GFEEsFYQCs5y4pTqYI4vAP6oNQPkvCVVhAyJGspxJjK_Ca5F1IyHmolBQKeqmVwWqjBIZUFoHhgKngE2V5eJJjCyE2w_RToAogPtWPI7m4-xmkX3e4CzfGpAxP_zIRzCj_VuLershMkE5tP7lopeu28txX5_Y0F0wknG5NBt7tc503Mv4zemdLFO6oJqjTehGvMaJ7cw_dnRPaYwxCqyFtXRqITU2NnM"  />
</div>
<h3 className="text-2xl font-bold mb-4 text-earthy-brown" >Mentoring</h3>
<p className="text-warm-text/70 text-base leading-relaxed px-4" >Integrate subtle energy into your home &amp; work life</p>
</div>
<div className="group">
<div className="w-32 h-32 rounded-3xl bg-warm-grey flex items-center justify-center mx-auto mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
<img alt="Workshops Icon" className="w-20 h-20 object-contain mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQI1HLk8YZzQ-8qOXDGcM6L8xzuBynllp8D5dzxl9bicu2P8nSGpIzvY5na8M48Z79byQk6hlysr28eamk987AQ-3XUoM_T4lnTikX7yTuivtHvzP_USxTV9hRMWr_WaJPns3phenc_pNGGx2jA4UL3o6rxa4tGu24wJ0osAdZJJXfcVr4yRoe03Cd8Vv12PrIptWZWiQDNEBPwopK2KjJu0UuuMUxtjIXpEhpSWxEppuVyZDxoA0Q019eUY9I_TmkLiil5iPcWReZ"  />
</div>
<h3 className="text-2xl font-bold mb-4 text-earthy-brown" >Workshops</h3>
<p className="text-warm-text/70 text-base leading-relaxed px-4" >'Join the dots' in the company of others</p>
</div>
</div>
</div>
</section>
<section className="bg-warm-cream flex flex-col md:flex-row items-center">
<div className="md:w-1/2 h-[600px] overflow-hidden">
<img alt="Lush Garden Imagery" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2PWwcUsLYfff1Gr7bbSwBwHM6uN6HjOUkLj-4o5_MgzXXMIRnm1mPTo1-qgm4d3dDQ9IyEpvpmCj-tb7ve-ssKDIkSN0LdDjVo5F9eZzJF98r3cgJN27WAOTDg49MWMhDyRDeBU5nhQuFKl0_bDfZTk-6nevqSdS2W-rjXk2hifRTNDcnbzJZ3zo3Nt2bxByhouQUYxDZoVobDc64CElf-x5DmBexWLAdt1Z1nz2hIqhBHgmHgcZkyKzKDbP0yXYz58akCrVMb50e"  />
</div>
<div className="md:w-1/2 p-12 md:p-24">
<div className="w-20 h-1.5 bg-terracotta rounded-full mb-10"></div>
<h2 className="text-4xl md:text-5xl font-bold mb-8 text-earthy-brown leading-tight" >Are you affected by<br />Geopathic Stress?</h2>
<p className="text-warm-text/80 mb-10 text-lg leading-relaxed font-light" >
            Geopathic stress is a collection of ill-defined symptoms that can range from mild to severe. You may have some or all of these making your life difficult: anxiety, headaches, nausea, tingling or soreness, mind-fog... Crucially, though these symptoms improve when you are away from home
        </p>
<a className="inline-block bg-gentle-sage text-earthy-brown font-bold py-4 px-10 rounded-full hover:bg-soft-peach transition-colors uppercase tracking-widest text-sm mb-12" href="#" >Read More</a>
<div className="relative">
<span className="material-symbols-outlined absolute -top-4 -left-6 text-4xl text-soft-peach opacity-50" >format_quote</span>
<blockquote className="italic font-serif text-lg text-warm-text/70 pl-6 py-2" >
                "Today is the first day (in over a year) that I've been able to complete my full breathing routine – there is literally more prana to breathe in this house and my motivation is returning. I feel like my creative energy stores are slowly replenishing—they've been depleted for so long. It's as if an enormous invisible weight has been lifted from the house, one that kept me coiled tight and small, and now I'm unfurling back into my own shape and remembering what it's like to move freely again."
                <footer className="mt-6 font-display font-bold text-earthy-brown not-italic">— Kyren Regehr</footer>
</blockquote>
</div>
</div>
</section>
<section className="bg-earthy-brown py-28 text-center text-warm-cream">
<div className="container mx-auto px-6 max-w-3xl">
<div className="inline-block p-4 rounded-full bg-terracotta/20 mb-8">
<span className="material-symbols-outlined text-4xl text-soft-peach" >mail</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold mb-8" >Keep in Touch</h2>
<p className="text-lg opacity-80 mb-14 leading-relaxed font-light" >
            Tim's newsletter contains details about his workshops in the UK and online and includes practical, philosophical blogs on the nature of reality, balanced with information about emerging fields of consciousness and healing.
        </p>
<form className="space-y-4 max-w-lg mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full px-6 py-4 rounded-3xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-terracotta focus:bg-white/20 transition-all outline-none" placeholder="First Name" type="text" />
<input className="w-full px-6 py-4 rounded-3xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-terracotta focus:bg-white/20 transition-all outline-none" placeholder="Last Name" type="text" />
</div>
<input className="w-full px-6 py-4 rounded-3xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-terracotta focus:bg-white/20 transition-all outline-none" placeholder="Your Email Address" type="email" />
<button className="w-full bg-terracotta text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-widest mt-4" type="submit" >Subscribe to Newsletter</button>
</form>
</div>
</section>
<section className="relative py-28 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Natural Wood Grain Texture" className="w-full h-full object-cover opacity-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvJnzR87g-0ypKSxGVyG3fKa9uQQZnffCzEY8aj9_HfBWWaeHTQyHaUIp16BB2ep961O4B0FajEVOeBnhlTtT85vVRW4liQfZQ0AhTUULhPGxGNdWl51DS8XmH-yaGFTQwvDPao45igVYuT1aUbheRpgmd08CNMJmMiPem9ePT9rccA7qDQ6X8LwV5lxybPd_GKY4VJNSlxoQzVeOc1kGMCYjlXci7B34KZS8nCA6-5v4CggCU23rv__my5OY-76qwxzvs79OfG0g1"  />
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
<div className="bg-white/60 backdrop-blur-lg rounded-3xl soft-shadow p-12 lg:w-1/3 border border-white">
<h3 className="text-2xl font-bold mb-8 text-earthy-brown" >Reach Us</h3>
<p className="text-warm-text/70 mb-10 leading-relaxed font-light" >Please use this contact form for initial enquiries and questions</p>
<div className="space-y-8">
<div className="flex items-start">
<span className="material-symbols-outlined text-terracotta mr-4" >location_on</span>
<p className="text-warm-text/80 text-sm leading-relaxed" >Storthwaite Hall,<br />Arkengarthdale, Richmond,<br />North Yorkshire DL11 6EX</p>
</div>
<div className="flex items-center">
<span className="material-symbols-outlined text-terracotta mr-4" >smartphone</span>
<p className="text-warm-text/80" >07973 640 844</p>
</div>
<div className="flex items-center">
<span className="material-symbols-outlined text-terracotta mr-4" >alternate_email</span>
<p className="text-warm-text/80" >tim.walter@knightsrose.com</p>
</div>
</div>
<div className="flex space-x-4 mt-12">
<a className="w-10 h-10 rounded-full bg-warm-grey/30 flex items-center justify-center text-earthy-brown hover:bg-terracotta hover:text-white transition-all" href="#" >
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-warm-grey/30 flex items-center justify-center text-earthy-brown hover:bg-terracotta hover:text-white transition-all" href="#" >
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path></svg>
</a>
</div>
</div>
<div className="bg-white rounded-3xl soft-shadow p-12 lg:w-2/3 border border-soft-peach">
<h3 className="text-2xl font-bold mb-10 text-earthy-brown" >Leave A Message</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-warm-text/50 mb-2 ml-1" >Name</label>
<input className="w-full px-6 py-4 border border-warm-grey rounded-2xl bg-warm-cream/30 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-warm-text/50 mb-2 ml-1" >Email</label>
<input className="w-full px-6 py-4 border border-warm-grey rounded-2xl bg-warm-cream/30 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all" placeholder="Your email" type="email" />
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-warm-text/50 mb-2 ml-1" >Message</label>
<textarea className="w-full px-6 py-4 border border-warm-grey rounded-2xl bg-warm-cream/30 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none resize-none transition-all" placeholder="How can we help you?" rows={5}></textarea>
</div>
<div className="flex justify-between items-center flex-wrap gap-4">
<div className="text-sm text-warm-text/60 italic font-serif" >
                            All <a className="text-terracotta font-bold hover:underline" href="#" >donations</a> valued &amp; appreciated
                        </div>
<button className="bg-terracotta text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all uppercase tracking-widest text-sm" type="submit" >Send Message</button>
</div>
</form>
</div>
</div>
</div>
</section>

    </>
  );
}
