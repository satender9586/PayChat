import Logo from "../assests/Logo.png"
import Button from "./Button"



const Navbaar = () => {
  return (
    <div className="absolute w-full z-[999] border-b border-[#ED837A]">
      <div className=" container mx-auto px-3 md:px-20 grid grid-cols-4 py-2 lg:py-2 text-white items-center">
        <div className="col-span-2 sm:col-span-1 flex items-center">
          <div>
            <img src={Logo} alt="logo" className="object-cover w-10 h-auto" />
          </div>
          <h1 className=" font-semibold  text-[#111828] text-[18px]">
            Pay<span className="text-[#AF0D5A]">Talk</span>
          </h1>
        </div>
        <div className="col-span-1 sm:col-span-2 hidden sm:flex  justify-center">
          <ul className="flex gap-4 justify-center text-[#6D6D6E] font-sans text-[18px]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="flex justify-end gap-2">
          <Button>Login</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbaar

