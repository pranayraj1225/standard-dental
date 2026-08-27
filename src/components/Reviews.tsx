import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "Best doctor I have met till date.. Soo loving and caring. The way she talks and comforts..",
      author: "Patient Review"
    },
    {
      text: "One of the best clinic I have visited.. got my teeth whitening done here which was a painless procedure... clinic is clean and staff are very friendly... Dr Arthi mam listens to her patients very patiently and handles in the most polite way.",
      author: "Patient Review"
    },
    {
      text: "Best dental clinic in Alwal. Experienced Doctor, highly recommended. Awesome treatment...",
      author: "Patient Review"
    }
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Patients Say</h2>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="text-2xl  font-bold text-brand-navy">5.0 Google Rating</div>
            <div className="text-slate-500 font-medium">Based on 6 Reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-light p-8 rounded-2xl relative border border-slate-50 hover:shadow-md transition-shadow"
            >
              <Quote className="w-10 h-10 text-brand-blue/10 absolute top-6 right-6" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10">"{review.text}"</p>
              <div className="font-semibold text-brand-navy">{review.author}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-full text-brand-navy hover:bg-slate-50 transition-colors shadow-sm">
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
