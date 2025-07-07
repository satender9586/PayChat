import Logo from "../assests/Logo.png"
import Button from "./Button"
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { NAVBAR_TABS } from "@/constants/paths";

const Navbaar = () => {
  return (
    <div className="absolute w-full z-[999] border-b border-[#ED837A]">
      <div className="container mx-auto px-3 md:px-10 lg:px-20 grid grid-cols-4 py-2 lg:py-2 text-white items-center">
        <div className="col-span-2 sm:col-span-1  flex items-center ">
          <div>
            <img src={Logo} alt="logo" className="object-cover w-10 h-auto" />
          </div>
          <h1 className=" font-semibold  text-[#111828] text-[18px]">
            Pay<span className="text-[#AF0D5A]">Talk</span>
          </h1>
        </div>
        <div className=" sm:col-span-2 hidden sm:flex  justify-center ">
          <ul className="flex gap-3 md:gap-4 justify-center text-[#6D6D6E] font-sans text-[18px]">
           {
            NAVBAR_TABS.map(({PATH,TABNAME})=>(
                <Link to={PATH}><li >{TABNAME}</li></Link>
            ))
           }
           
          </ul>
        </div>
        <div className="hidden sm:flex justify-end   gap-2 col-span-2 sm:col-span-1 ">
          <Button bgColor={"#4CAF4F"} textColor={"white"}>Login</Button>
          <Button bgColor={"#4CAF4F"} textColor={"white"}>Login</Button>
  
        </div>
        <div className="flex sm:hidden justify-end gap-2 col-span-2 sm:col-span-1 ">
          <IoMdMenu className="size-[22px] text-black"/>
        </div>
      </div>
    </div>
  )
}

export default Navbaar

