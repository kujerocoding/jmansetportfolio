// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

import profile from "../assets/profile-img.png"
import Logo from "./Logo"

const FEATURES = [
  "UI DEVELOPMENT & COMPONENT DESIGN",
  "RESPONSIVE & MOBILE-FIRST DESIGN",
  "ACCESSIBILITY (WCAG COMPLIANCE)",
  "CODE MAINTAINABILITY",
  "API INTEGRATION & DATA HANDLING",
  "CROSS-BROWSER COMPATIBILITY ",
  "AUTOMATED TESTING (UNIT, E2E)",
  "VERSION CONTROL (GIT & CI/CD)",
]

function Hero() {
  return (
    <motion.section
      id="top"
      className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto h-screen flex flex-col gap-30 justify-center items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col items-center gap-10 md:flex-row  p-4 lg:max-w-3xl">
        <motion.img
          src={profile}
          alt="profile-picture"
          className="w-40"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        />
        <div className="flex flex-1 flex-col gap-4 items-center md:items-start">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JEROME MANSET
          </motion.h2>
          <motion.p
            className="text-subtext max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Frontend developer with over 2 years crafting smooth, responsive
            sites—now expanding into full-stack to deliver seamless, end-to-end
            solutions.
          </motion.p>
          <motion.div
            className="text-right md:self-end bg-action font-bold px-4 py-2 cursor-pointer rounded-md shadow"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{
              backgroundColor: "#225e52",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              y: { duration: 0.8, delay: 0.7, ease: "easeOut" },
              opacity: { duration: 0.8, delay: 0.7, ease: "easeOut" },
              backgroundColor: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <a href="#contact">Let's build together</a>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <motion.p
            className="italic text-sm text-subtext"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            The expertise I bring to every project
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6 ">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="bg-mobile-menu p-2 flex justify-center items-center text-center rounded-md shadow"
            >
              <p className="text-xs text-subtext">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
