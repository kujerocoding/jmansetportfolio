// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

import IconCircle from "./IconCircle"

function Skills() {
  return (
    <motion.section
      id="skills"
      className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto h-screen flex flex-col justify-center items-center gap-30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          How I Build
        </motion.h1>
        <motion.p
          className="text-sm text-subtext"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          I develop clean, reusable components, and practical workflows.
        </motion.p>
      </div>

      <div className="flex flex-col xl:flex-row gap-20 xl:items-center">
        <div className="flex flex-col items-center lg:items-start gap-10">
          <motion.p
            className="max-w-xl"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            I'm a front-end developer focused on building responsive, accessible
            UIs with React.js, MUI, and modern web tooling. I collaborate
            effectively in Agile/Scrum teams, contribute to shared codebases via
            Gitlab, and write clean, detail-oriented code. While my strength is
            in front-end, I have hands-on experience integrating with Node.js
            backends and working with MongoDB.
          </motion.p>

          <motion.div
            className="bg-action font-bold px-4 py-2 cursor-pointer rounded-md shadow"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{
              backgroundColor: "#225e52",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              y: { duration: 0.3, delay: 0.9, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 0.9, ease: "easeOut" },
              backgroundColor: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <a href="/resume.pdf" download="Jerome_Resume.pdf">
              Download Resume
            </a>
          </motion.div>
        </div>

        <IconCircle />
      </div>
    </motion.section>
  )
}

export default Skills
