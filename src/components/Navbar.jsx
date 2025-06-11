import { useState } from "react"

// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useMotionValueEvent } from "motion/react"

import close from "../assets/close-white.png"
import menu from "../assets/menu-white.png"
import Logo from "./Logo"

const NAVLIST = [
  { navName: "Home", navLink: "top" },
  { navName: "Work", navLink: "work" },
  { navName: "Skills", navLink: "skills" },
  { navName: "Contact", navLink: "contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && latest > scrollY.getPrevious()) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 w-11/12 md:w-10/12 lg:w-8/12 py-5 mx-auto flex justify-between z-10"
      >
        <a href="">
          <div className="z-10">
            <Logo />
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-10 lg:gap-12">
          {NAVLIST.map((list) => (
            <li
              key={list.navLink}
              className="font-bold hover:text-primary transition-colors duration-300"
            >
              <a href={`#${list.navLink}`}>{list.navName}</a>
            </li>
          ))}
        </ul>

        <button
          className="block md:hidden ml-3 cursor-pointer"
          onClick={openMenu}
        >
          <img src={menu} alt="menu icon" className="w-6" />
        </button>

        {/* Mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 h-screen bg-mobile-menu z-50 transition-transform duration-500 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img src={close} alt="close icon" className="w-5 cursor-pointer" />
          </div>
          {NAVLIST.map((list) => (
            <li key={list.navLink}>
              <a href={`#${list.navLink}`} onClick={closeMenu}>
                {list.navName}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
      <div
        className={`${
          hidden && "hidden"
        } fixed w-full h-20 bg-black/10 backdrop-blur-lg z-9`}
      ></div>
    </>
  )
}

export default Navbar
