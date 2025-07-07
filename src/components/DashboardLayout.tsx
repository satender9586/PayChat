import backgroundImg from "../assests/backgoundImg.png";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import DashboardLeftHeader from "./DashboardLeftHeader";
import DashboardMainHeader from "./DashboardMainHeader";
import SideBaarChatUsers from "./SideBaarChatUsers";


const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-90 bg-[#F0F2F5] flex flex-col">
       <DashboardLeftHeader/>
        <nav className="flex-1 overflow-y-auto  bg-[#ffff]">
          <div className="flex flex-col justify-center min-h-15 max-h-15 px-6 border-b border-[#E9EDEF]">
            <div className="flex gap-3 items-center justify-between">
              <div className="w-[90%] relative">
                <input
                  type="text"
                  placeholder="Search or start new chat"
                  className="w-full bg-[#E9EDEF] py-2 p-1.5 pl-10 rounded-md text-[14px] outline-none font-sans"
                />
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              </div>
              <button><IoFilter className="text-[22px] text-[#54656F]" /></button>
            </div>
          </div>
         {/* Chat users List */}
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
         <SideBaarChatUsers/>
        </nav>
      </aside>

      <main className="flex-1 bg-[#FFFFFF] overflow-y-auto flex flex-col">
        {/* Dashboard Header */}
        <DashboardMainHeader />

        <section
          className="flex-1 p-6 bg-cover bg-center bg-[#e8e8e8]"
          style={{ backgroundImage: `url(${backgroundImg})`, objectFit: "contain" }}
        >
          <p className=" text-2xl font-bold">
            Welcome to your dashboard!
          </p>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
