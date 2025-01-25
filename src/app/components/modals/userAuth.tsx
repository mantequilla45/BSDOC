import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

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
            <div className="flex mb-4 border-b">
              <button 
                onClick={() => setActiveTab('login')}
                className={`w-1/2 pb-2 ${activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setActiveTab('signup')}
                className={`w-1/2 pb-2 ${activeTab === 'signup' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              >
                Signup
              </button>
            </div>

            {activeTab === 'login' ? (
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
              </form>
            ) : (
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

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

                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                  >
                    Signup
                  </button>
                </div>
              </form>
            )}

            <div className="text-center">
              <button
                type="button"
                onClick={onClose}
                className="text-red-500 text-sm hover:underline"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;