import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{
            background: 'radial-gradient(circle at center, #A2E9EE 0%, #107373 100%)',
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 rounded-lg w-1/3 shadow-2xl"
          >
            <h2 className="text-xl mb-4">Login</h2>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                >
                  Login
                </button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-red-500 text-sm hover:underline"
                >
                  Close
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;