import { motion } from 'framer-motion';
import architecture from '../assets/architecture.png';



const Hero = () => {
  return (
    <section className="relative w-[95%] mx-auto text-[#E9EEF5] overflow-hidden py-10 md:py-20 md:px-[3%]">
        <div className="relative z-10">
        <h1 className="text-6xl font-bold text-left lg:text-7xl lg:inline-block"><span className="hidden md:block">I AM A </span>FULL-STACK <span className='md:block'>DEV<span className='hidden md:inline'>ELOPER</span></span></h1>
        <h2 className="text-4xl font-bold text-left my-3 md:hidden xl:block">building seamless digital experiences</h2>
        <p className="text-2xl text-[#94A3B8] text-left mr-6 md:my-3 md:w-[60%]">React | Django | Cloud Architectures. Making complexity intuitive.</p>
        <div className='md:w-[45%] xl:flex xl:gap-8'>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-7 text-3xl block py-3 w-full font-bold rounded-full bg-[#8B5CF6] shadow-[0_0_30px_#8B5CF6] md:py-5">
            <span className='hidden md:inline'>SEE MY </span>WORK
        </motion.button>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-7 text-3xl block py-3 w-full font-bold rounded-full text-[#40E0FF] border-[#40E0FF] border-3 md:py-5">
            <span className='hidden md:inline'>LET'S </span>TALK
        </motion.button>
        </div>
        </div>

        {/* Architecture Image - Adjusted left offset for lg and xl screens to maintain visual balance */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-full pointer-events-none z-0 lg:w-[70%] lg:right-4 xl:w-[50%] xl:h-full xl:right-5 xl:top-10">
            <img 
                src={architecture} 
                alt="Architecture" 
                className="w-full h-full object-cover opacity-30 brightness-125 rounded-l-3xl" 
            />
        </div>
    </section>
  )
}

export default Hero