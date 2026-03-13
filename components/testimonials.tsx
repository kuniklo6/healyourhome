import React from 'react';

const testimonials = [
  {
    text: "Bertie did energy healing of our home, garage and garden. It was an incredible experience as the energy of our home has significantly improved since the healing. I sent him a copy of the plan of the house, garage and garden and he cleared all negative areas using his unique skills. Bertie also came to our home and did further in-depth energy healing work in our garden which was really special. I highly recommend Bertie he is professional, discreet and above all He really knows his stuff. Thank you.",
    author: "Monica Hennelly, Galway."
  },
  {
    text: "Bertie Walsh and I learned the intricacies of House Healing together. Collaborating closely on several team projects gave me firsthand insight into his process. Bertie is an incredibly genuine individual with a gentle, calming presence—essential qualities for subtle energy work. He possesses a natural talent for property harmonization and maintains a highly effective, grounded approach. Anyone who chooses to work with him will be in excellent hands and can expect great results.",
    author: "A Colleague"
  },
  {
    text: "Bertie is a kind intuitive spiritual man that listens to your concerns no matter how crazy they sound. Before Bertie’s intervention our home was heavy and tense everybody was exhausted, cranky, experiencing headaches, migraines, nightmares, feelings of confusion, disorientation, dark thoughts with unexplained things occurring in and around the home, noises, freezing cold rooms, light bulbs flashing or blowing, smoke coming into the house rather than leaving, household appliances even when new, suddenly not working, arguments occurring. Plans going awry or something always getting in the way. Now there’s a peaceful harmonious feeling in our home with much improved family dynamics. I haven’t had a headache in over a year. No one has slammed a single door. Everyone is more motivated and things that were put on the long finger are dealt with more efficiently. Moody teenagers gone now they discuss rather than argue. It’s hard to explain how life changing this experience has been. I would and do recommend Bertie to anyone and will forever be grateful for his help. When things are occurring in your life that have no man-made explanation, time to look outside the box to things we cannot see.",
    author: "Della C."
  },
  {
    text: "I had tried to sell a piece of land a few times over the years, something always prevented the sale then finally last year I had gone ‘sale agreed’ straight forward deal no strings, no waiting for loans etc. But then the delays started, crazy things, estate agent got sick, solicitors were unavailable, contracts got lost. After about 6 weeks of zero movement and my gut feeling that the place was cursed. I rang Bertie and explained my predicament unbelievably within 10 minutes of speaking to him I got a phone call from my solicitor saying he had just received the contracts the whole thing moved very fast after that. Bertie discovered many historical issues with the property that had passed down through the generations of my family, from the previous owners, tenants in the late 1800s. He successfully cleared the land and I have peace of mind knowing that I have sold the land and the new owner is starting with a clean slate. Thank you Bertie.",
    author: "John C."
  },
  {
    text: "Bertie provides a unique and confidential service that helped bring peace to our home. It was a very simple process but I was amazed by his accuracy and what he could pick up and identify even from a distance. Bertie took a genuine interest in our home and resolving issues within it long after he had completed his work showing his genuine care and interest for this work. Bertie went above and beyond and returned to our home to ensure everything he could possibly do was done and we are still reaping the benefits. I would highly recommend him and his work.",
    author: "Sinead McG."
  },
  {
    text: "In June 2025 I met Bertie at my friend’s house and he talked to us about his work as a House Healer. I was fascinated by this conversation as I am very interested in energy healing and am very aware of the unpleasant effects that geopathic stress and electro-magnetic frequencies can have on the body. Bertie explained about other sources of negative house energy which may give rise to health issues both physical and psychological. I asked Bertie to check out our house and my adjacent therapy room for any possible issues. These buildings are just over 20 years old. I drew an outline of the floor plans on a sheet of A4 paper. I labelled the different rooms and where the doors are. Using this basic sketch Bertie was able to identify quite a few adverse energy lines running through our house and therapy room. He then worked on clearing this negative energy and he notified me in a few days when the job was complete. Almost immediately I could sense a lighter feeling in our home and some of my friends also commented on this. Over the next few weeks I noticed that my own energy levels improved and I was less stressed and more relaxed in general. This very positive feeling has stayed with me and it is now almost 8 months since the healing took place. Bertie is very knowledgeable and passionate about the subject of House Healing. He explains the whole process very clearly and in simple terms. He has truly done amazing work for myself, my family and for other friends that I have referred to him for House Healing.",
    author: "Patricia Co Sligo"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-earthy-brown">
          Client Experiences
        </h2>
        <div className="flex flex-col items-center gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-soft-peach w-full max-w-4xl transform transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative mb-6">
                <span className="material-symbols-outlined absolute -top-6 -left-8 text-5xl text-soft-peach opacity-60">
                  format_quote
                </span>
                <p className="italic font-serif text-lg md:text-xl text-warm-text/80 leading-relaxed relative z-10 pl-2">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center mt-10 border-t border-soft-peach/50 pt-6">
                <div className="w-14 h-14 rounded-full bg-gentle-sage flex items-center justify-center text-earthy-brown font-bold text-2xl mr-5 shadow-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-earthy-brown text-xl">{testimonial.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
