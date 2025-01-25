import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(true);
  }, [isOpen]);

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    })
  };

  const UseBodyScrollLock = () => {
    useEffect(() => {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);

    return null;
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 flex justify-center items-center z-50 p-10 py-12 overflow-hidden overscroll-none"
          style={{
            background: 'linear-gradient(to bottom right, #107373, #63B6B9, #55B7BE)',
          }}
        >
          {/* Use useEffect for body scroll management */}
          <UseBodyScrollLock />
          <div className="bg-[#9ED8D2] w-full h-full rounded-[30px] overflow-hidden relative">
            <div className="absolute inset-0 flex justify-between">

              <button
                onClick={onClose}
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 duration-300"
              >
                <IoIosCloseCircle className="w-[40px] h-[40px]" />
              </button>
              <div className="w-[60%] relative">
                <Image
                  alt="Login Background"
                  fill
                  src="/graphics/loginbg.svg"
                  className="object-cover"
                />
                <div className="absolute inset-0 z-10 flex flex-col pt-[160px] pl-[80px]">
                  <div className="flex flex-row items-center">
                    <h1 className="text-7xl text-[#62B6B8] mt-10">
                      Hello,
                    </h1>
                    <Image
                      alt="Login Graphic"
                      width={200}
                      height={200}
                      src="/graphics/logingraphic.svg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-5xl">
                      Welcome to <span className="text-[#62B6B8]">BSDOC</span>
                    </h2>
                    <h3 className="text-3xl">
                      Your Personal Guide to Self-Care for Common Ailments
                    </h3>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[25px] w-1/3 shadow-2xl z-10 flex flex-col justify-center m-10 relative overflow-hidden"
              >
                <Image
                  alt="Login"
                  src="/graphics/login.svg"
                  className="absolute object-cover w-[100%] h-[100%] z-0"
                  width={0}
                  height={0}
                />
                <motion.div
                  className="flex justify-center items-center z-50 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="relative w-[800px] h-[600px] overflow-hidden">
                    <AnimatePresence custom={isLogin ? 1 : -1}>
                      {isLogin ? (
                        <motion.div
                          key="login"
                          custom={1}
                          variants={slideVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="absolute w-full h-full flex flex-col justify-center items-center p-12 bg-white/90 gap-6"
                        >
                          <h2 className="text-3xl mb-3">Welcome Back!</h2>
                          <button className="py-3 w-full border-[1px] bg-white rounded-full font-light flex justify-center items-center gap-6 active:scale-95 duration-300">
                            <FcGoogle className="w-[25px] h-[25px]" />Login with Google
                          </button>
                          <div className="w-full border-t border-gray-300" />
                          <div className="space-y-4">
                            <input
                              placeholder="Email"
                              className="py-3 px-5 w-full border-[1px] rounded-full font-light focus:outline-none focus:ring-2 focus:ring-[#62B6B8] focus:border-transparent"
                            />
                            <input
                              placeholder="Password"
                              type="password"
                              className="py-3 px-5 w-full border-[1px] rounded-full font-light focus:outline-none focus:ring-2 focus:ring-[#62B6B8] focus:border-transparent"
                            />
                          </div>

                          <button
                            className="py-3 px-5 w-full rounded-full bg-[#9ED8D2] text-white hover:bg-[#8DE3DA] active:bg-[#7CD1C8] active:scale-95 duration-300 "
                          >
                            Login
                          </button>
                          <p
                            className="text-center mt-4 cursor-pointer text-[#2D383D] flex flex-row items-center gap-3"
                            onClick={() => setIsLogin(false)}
                          >
                            Create an account
                            <FaArrowRightLong />
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="signup"
                          custom={-1}
                          variants={slideVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="absolute w-full h-full flex flex-col justify-center p-12 bg-white"
                        >
                          <h2 className="text-2xl mb-6">Sign Up</h2>
                          <input
                            placeholder="Full Name"
                            className="w-full p-3 mb-4 border rounded"
                          />
                          <input
                            placeholder="Email"
                            className="w-full p-3 mb-4 border rounded"
                          />
                          <input
                            placeholder="Password"
                            type="password"
                            className="w-full p-3 mb-4 border rounded"
                          />
                          <input
                            placeholder="Confirm Password"
                            type="password"
                            className="w-full p-3 mb-4 border rounded"
                          />
                          <button
                            className="w-full p-3 bg-blue-500 text-white rounded"
                          >
                            Sign Up
                          </button>
                          <p
                            className="text-center mt-4 cursor-pointer text-blue-500"
                            onClick={() => setIsLogin(true)}
                          >
                            Already have an account?
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;