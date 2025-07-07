import authUserImg from "../assests/authUser.png"
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdVideocam } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const DashboardMainHeader = () => {
    return (
        <>
            <header className="h-16 bg-[#F0F2F5] flex items-center px-6 ">
                <div className="w-[100%] flex items-center gap-2">
                    <div className="border-2 text-[#6B7C85] border-white w-12 h-12 rounded-full">
                        <img src={authUserImg} alt="user" className="object-cover" />
                    </div>
                    <h1 className="text-[#6B7C85] text-[18px] font-sans ">Daniel Kalio</h1>
                </div>

                <div className="flex items-center justify-end gap-5 w-full">
                    <div className="flex items-center justify-end "><IoCall className=" size-[18px] text-[#6B7C85]" /></div>
                    <div className="flex items-center justify-end "><IoMdVideocam className=" size-[20px] text-[#6B7C85]" /></div>
                    <div className="flex items-center justify-end "><CiSearch className=" size-[20px] text-[#6B7C85]" /></div>
                    <div className="flex items-center justify-end "><CiMenuKebab className=" size-[19px] text-[#6B7C85]" /></div>
                </div>

            </header>
        </>
    )
}

export default DashboardMainHeader