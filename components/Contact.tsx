import SectionWrapper from "./SectionWrapper"
import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl">Get In Touch</h2>

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex flex-col md:flex-row justify-between rounded-xl gap-6">
        {/* Left side image */}
        <Image
          unoptimized={true}
          quality={100}
          alt="contact"
          src="/contact.png"
          className="w-full md:w-1/2 h-full object-cover rounded-xl"
          width={1000}
          height={1000}
        />

        {/* Right side cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* LinkedIn */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
            <FaLinkedin className="text-3xl text-blue-600 mb-2" />
            <h3 className="font-semibold">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-1"
            >
              Vinod Darapu
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
            <FaEnvelope className="text-3xl text-red-500 mb-2" />
            <h3 className="font-semibold">Email</h3>
            <a
              href="mailto:vinod.darapu11801@gmail.com"
              className="text-blue-500 mt-1 break-words"
            >
              vinod.darapu11801@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
            <FaGithub className="text-3xl text-gray-800 dark:text-white mb-2" />
            <h3 className="font-semibold">GitHub</h3>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-1"
            >
              Vinod Darapu
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
            <FaPhone className="text-3xl text-green-500 mb-2" />
            <h3 className="font-semibold">Phone</h3>
            <a href="tel:+19013199865" className="text-blue-500 mt-1">
              +1 (911) 123-4562
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact