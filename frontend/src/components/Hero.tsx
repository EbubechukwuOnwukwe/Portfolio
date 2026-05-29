import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <section className="text-[#E9EEF5] my-5 mx-5">
        <h1 className="text-6xl font-bold text-left"><span className="hidden md:block">I AM A </span>FULL-STACK DEV</h1>
        <h2 className="text-4xl font-bold text-left my-3">building seamless...</h2>
        <p className="text-2xl text-[#94A3B8] text-left mr-6">React | Django | Cloud Architectures. Making complexity intuitive.</p>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-7 text-3xl block mx-auto py-3 w-[90%] font-bold rounded-4xl bg-[#8B5CF6] shadow-[0_0_40px_#8B5CF6]">
            <span className='hidden md:inline'>SEE MY </span>WORK
        </motion.button>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-7 text-3xl block mx-auto py-3 w-[90%] font-bold rounded-4xl text-[#40E0FF] border-[#40E0FF] border-3 ">
            <span className='hidden md:inline'>LET'S </span>TALK
        </motion.button>
    </section>
  )
}

export default Hero