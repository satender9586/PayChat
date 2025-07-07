import groupImg from "../assests/group.png"
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="pt-14 relative z-0 h-screen bg-gradient-to-r from-[#fadff5] via-[#f7ecec] to-[#faf3ff] overflow-hidden">
      <div className="container mx-auto px-3 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-5 ">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-[5xl] tracking-[4px]  font-serif text-[#AF0D5A] mb-4">
              Connect. Chat. Grow.
            </h1>
            <p className="tracking-[1.5px] text-[15px] md:text-xl text-[#3B0764]/80  font-serif">
              Welcome to <span className="font-bold">PayTalk</span> — your all-in-one team chat
              solution that keeps conversations secure, fast, and easy.
            </p>
            <button className="tracking-[1.5px] rounded-full flex mt-6  items-center  gap-2  px-6 py-3 bg-[#AF0D5A] text-white font-serif  hover:bg-[#9b0c50] transition-colors w-fit">
              Get Started <span><FaArrowRight /></span>
            </button>
          </div>
          <div className="flex justify-center md:justify-end items-center ">
            <img
              src={groupImg}
              alt="Chat illustration"
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
