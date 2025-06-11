// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const HIGHLIGHTS = [
  {
    title: "400+ Merge Requests Merged",
    subTitle:
      "Actively contributed to feature development, bug fixes, and code improvements",
  },
  {
    title: "90% Approval Rate on Code Reviews",
    subTitle:
      "Maintained high-quality code and strong collaboration standards.",
  },
  {
    title: "Theme Customization for 10+ Brands",
    subTitle: "Developed dynamic theming systems for multi-brand applications",
  },
  {
    title: "100+ End-to-End & 40+ Unit Tests Written",
    subTitle: "Ensured code reliability and regression-free releases",
  },
]

const PROJECTS = [
  {
    title: "Payment Gateway App",
    subTitle:
      "Maintaining and enhancing a multi-currency platform; improved UX and performance.",
  },
  {
    title: "Operations Backoffice App",
    subTitle:
      "Support internal tooling through enhancements, optimizations, and bug fixes.",
  },
  {
    title: "Merchant Backoffice App",
    subTitle: "Maintain a portal for merchants with role-based access.",
  },
  {
    title: "Demo App",
    subTitle: "Update and manage a sandbox app for showcasing payment flows.",
  },
  {
    title: "Brand Login Page",
    subTitle: "Developed login screens for multiple brands.",
  },
]

function Work() {
  return (
    <motion.section
      id="work"
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
          In the Field
        </motion.h1>
        <motion.p
          className="text-sm text-subtext"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Here’s a look at my work experience and the projects I’ve contributed
          to.
        </motion.p>
      </div>

      <div className="w-full flex flex-col items-center 2xl:flex-row gap-10">
        <div className="flex-1">
          <motion.div
            className="mb-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <h2 className="text-lg font-bold">Front-end Developer</h2>
            <p className="text-md">TDH International Inc.</p>
            <p className="text-sm text-subtext">2023 - Present</p>
          </motion.div>

          <div className="md:max-w-md flex flex-col gap-4">
            <h3 className="mt-4">KEY PROJECTS</h3>
            {PROJECTS.map(({ title, subTitle }) => (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <p className="text-sm ml-4">{title}</p>
                <p className="text-xs ml-4 text-subtext">{subTitle}</p>
              </motion.div>
            ))}
            <p className="text-xs italic text-subtext">
              Tech Stacks: React.js, MUI, i18n, Immutable.js, Cypress, custom
              libraries
            </p>

            {/* <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <h3 className="mb-2">Achievements</h3>
              <ul className="text-sm ml-8 list-disc text-subtext">
                <li>
                  Migrated codebase from an older version of Material UI (MUI)
                  to the latest, ensuring design consistency and leveraging
                  updated component APIs.
                </li>
                <li>
                  Implemented a scalable dark mode feature across multiple
                  applications, enhancing user accessibility and visual
                  experience.
                </li>
              </ul>
            </motion.div> */}
          </div>

          <motion.div
            className="mt-10 flex gap-4"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <a
              href="https://www.linkedin.com/in/jeromemanset22/"
              target="_blank"
              className="text-primary underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kujerocoding"
              target="_blank"
              className="text-primary underline"
            >
              Github
            </a>
          </motion.div>
        </div>

        <div className="flex gap-4 flex-col">
          {HIGHLIGHTS.map(({ title, subTitle }, i) => (
            <motion.div
              className="p-6 bg-mobile-menu rounded-md shadow-md text-center"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h3 className="text-primary text-md font-bold">{title}</h3>
              <p className="text-subtext text-xs">{subTitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Work
