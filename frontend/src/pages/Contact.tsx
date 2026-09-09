import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      setStatus('submitting');

      const formData = new FormData(form);
      const object = Object.fromEntries(Array.from(formData.entries()));
      const json = JSON.stringify(object);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        });
        const result = await response.json();
        if (result.success) {
          setStatus('idle');
          alert("Message sent successfully! I'll get back to you soon.");
          form.reset();
        } else {
          setStatus('idle');
          alert("Something went wrong. Please try again.");
        }
      } catch {
        setStatus('error');
        alert("Network error. Please check your connection and try again.");
      }
    };

  return (
    <section className="relative w-[95%] mx-auto text-[#E9EEF5] overflow-hidden py-10 md:py-10 md:px-[3%]">
    <h1 className="text-6xl font-bold text-left">CONTACT</h1>      
      <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto mt-10 md:text-xl lg:text-3xl xl:text-4xl">
        {/* Web3Forms access key — this is a public-facing token, not a secret */}
        <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
        <div className='space-y-4 md:space-y-0 md:flex gap-5'>
        <input 
          required 
          name="name"
          type="text" 
          placeholder="Name" 
          className="w-full bg-[#151A21] border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-[#8B5CF6] transition-colors md:p-5 lg:p-7 xl:p-9"
        />
        <input 
          required 
          name="email"
          type="email" 
          placeholder="Email" 
          className="w-full bg-[#151A21] border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-[#8B5CF6] transition-colors md:p-5 lg:p-7 xl:p-9"
        />
        </div>
        <input 
          required 
          name="subject"
          type="text" 
          placeholder="Subject" 
          className="w-full bg-[#151A21] border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-[#8B5CF6] transition-colors md:p-5 lg:p-7 xl:p-9"
        />
        <textarea 
          required 
          name="message"
          rows={4} 
          placeholder="Message" 
          className="w-full bg-[#151A21] border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-[#40E0FF] transition-colors md:p-5 lg:p-7 xl:p-9"
        />
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#8B5CF6] text-white font-bold py-3 rounded-lg transition-colors md:p-5 lg:p-7 xl:p-9"
        >
          {status === 'submitting' ? 'Sending...' : status === 'error' ? 'RETRY' : 'SEND MESSAGE'}
        </motion.button>
      </form>
    </section>
  );
};


export default Contact