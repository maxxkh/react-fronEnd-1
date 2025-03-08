import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-600 py-24">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get exclusive insights and the latest tech trends delivered straight to your inbox
          </p>
          
          {isSubmitted ? (
            <div className="flex items-center justify-center space-x-3 text-white">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 text-base rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Subscribe</span>
                <Send className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}