import groupImg from "../assests/group.png"

const Header = () => {
  return (
    <header className="px-20 pt-14 relative z-0 h-screen bg-gradient-to-r from-[#fadff5] via-[#f7ecec] to-[#faf3ff] overflow-hidden">
      <div className="container mx-auto px-3 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-5xl font-serif text-[#AF0D5A] mb-4">
              Connect. Chat. Grow.
            </h1>
            <p className="text-lg md:text-xl text-[#3B0764]/80 max-w-md font-sans">
              Welcome to <span className="font-bold">PayTalk</span> — your all-in-one team chat
              solution that keeps conversations secure, fast, and easy.
            </p>
            <button className="mt-6 inline-block px-6 py-3 bg-[#AF0D5A] text-white font-semibold rounded-md hover:bg-[#9b0c50] transition-colors w-fit">
              Get Started
            </button>
          </div>
          <div className="flex justify-center md:justify-end items-center">
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
