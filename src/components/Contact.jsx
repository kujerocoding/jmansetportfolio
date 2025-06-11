import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

export default function Contact() {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const form = event.target
    const formData = new FormData(form)

    formData.append("access_key", "0e5adfe4-d80a-4ac6-b4a4-19bb5a12f109")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      form.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }
  return (
    <motion.section
      id="contact"
      className="w-11/12 md:w-10/12 mx-auto h-screen flex flex-col justify-center items-center gap-30"
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
          Let's Work Together
        </motion.h1>
        <motion.p
          className="text-sm text-subtext"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Open to freelance, full-time roles, or creative collaborations. Reach
          out and let’s get started.
        </motion.p>
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col items-center gap-5"
      >
        <motion.div
          className="flex flex-col w-full md:flex-row md:max-w-3xl gap-4"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-mobile-menu"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-mobile-menu"
          />
        </motion.div>
        <motion.textarea
          name="message"
          rows={8}
          placeholder="Enter your message"
          required
          className="w-full md:max-w-3xl  p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-mobile-menu mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        ></motion.textarea>

        <motion.div
          className=" bg-action font-bold px-4 py-2 cursor-pointer rounded-md shadow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.3, delay: 1.1 }}
          whileHover={{
            backgroundColor: "#225e52",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            y: { duration: 0.3, delay: 1.1, ease: "easeOut" },
            opacity: { duration: 0.3, delay: 1.1, ease: "easeOut" },
            backgroundColor: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <button type="submit" className="cursor-pointer">
            Submit now
          </button>
        </motion.div>
        <p className="mt-4">{result}</p>
      </form>
    </motion.section>
  )
}
