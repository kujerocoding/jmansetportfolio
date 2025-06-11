// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { Tooltip } from "react-tooltip"

import htmlIcon from "../assets/html5.svg"
import motionIcon from "../assets/motion.svg"
import tailwindIcon from "../assets/tailwind.svg"
import vscodeIcon from "../assets/vscode.svg"
import reactIcon from "../assets/react.svg"
import nodejsIcon from "../assets/nodejs.svg"
import jiraIcon from "../assets/jira.svg"
import gitlabIcon from "../assets/gitlab.svg"
import gitIcon from "../assets/git.svg"
import figmaIcon from "../assets/figma.svg"

const ICONS = [
  { icon: tailwindIcon, tooltip: "Tailwind CSS" },
  { icon: gitlabIcon, tooltip: "Gitlab" },
  { icon: motionIcon, tooltip: "Framer-motion" },
  { icon: vscodeIcon, tooltip: "VSCode" },
  { icon: reactIcon, tooltip: "Reactjs" },
  { icon: htmlIcon, tooltip: "HTML 5" },
  { icon: jiraIcon, tooltip: "Jira" },
  { icon: nodejsIcon, tooltip: "Nodejs" },
  { icon: gitIcon, tooltip: "Git" },
  { icon: figmaIcon, tooltip: "Figma" },
]

//vitejs
//mui
//cypress

export default function IconCircle() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full">
      {ICONS.map(({ icon, tooltip }, i) => {
        const angle = i * 36
        return (
          <motion.span
            data-tooltip-id={tooltip}
            data-tooltip-content={tooltip}
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotate(${angle}deg) translateY(-8rem) rotate(-${angle}deg)`,
              transformOrigin: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={icon}
              className="w-10 h-10"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3 }}
            />
            <Tooltip
              id={tooltip}
              place="top"
              className="!bg-primary !text-xs"
              motion={{
                initial: { opacity: 0, scale: 0 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0 },
                transition: { duration: 0.5 },
              }}
            />
          </motion.span>
        )
      })}
    </div>
  )
}
