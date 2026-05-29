import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg"
      >
        Click me!
      </motion.button>
    </div>
  );
}

export default App;