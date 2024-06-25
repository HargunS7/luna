import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lunaLetter from '../../assets/logos/luna-letter.png';

const SignUp = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for elements
  const textMotion = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
  };

  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerMotion}
    >
      {/* Logo + Title */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <motion.span variants={textMotion}>
          <Link to="/luna-demo/">
            <img
              className="mx-auto h-12 w-auto"
              src={lunaLetter}
              alt="Company Logo"
            />
          </Link>
        </motion.span>
        <motion.h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" variants={textMotion}>
          Create an Account
        </motion.h2>
      </div>

      {/* Input Section */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">

          {/* First Name and Last Name */}
          <motion.div variants={textMotion}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </motion.div>

          {/* Email Address */}
          <motion.div variants={textMotion}>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={textMotion}>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </motion.div>

          {/* Re-enter Password */}
          <motion.div variants={textMotion}>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Re-enter Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div variants={textMotion}>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={textMotion}>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Account
            </button>
          </motion.div>

        </form>

        {/* Sign In Link */}
        <motion.p className="mt-10 text-center text-sm text-gray-500" variants={textMotion}>
          Already have an account?{' '}
          <Link to="/luna-demo/sign-in" className="font-semibold leading-6 text-indigo-600 hover:text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500">
            Sign in here.
          </Link>
        </motion.p>

      </div>

    </motion.div>
  );
};

export default SignUp;
