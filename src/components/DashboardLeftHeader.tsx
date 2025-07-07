import authUserImg from "../assests/authUser.png"
import UsersImg from "../assests/Users.png"
import statusImg from "../assests/status.png"
import messageImg from "../assests/Message.png"
import menuImg from "../assests/Menu.png"

const DashboardLeftHeader = () => {
  return (
    <>
      <div className="h-16 grid grid-cols-3 px-6 items-center">
        <div className="border-2 border-white col-span-1 w-12 h-12 rounded-full"><img src={authUserImg} alt="user" className="object-cover" /></div>
        <div className="flex items-center justify-end gap-5 w-full col-span-2">
          <div className="flex items-center justify-end "><img src={UsersImg} alt="user" className="object-cover w-[24px]" /></div>
          <div className="flex items-center justify-end "><img src={statusImg} alt="user" className="object-cover w-[23px] h-[23px]" /></div>
          <div className="flex items-center justify-end "><img src={messageImg} alt="user" className="object-cover w-[19px] h-[19px]" /></div>
          <div className="flex items-center justify-end "><img src={menuImg} alt="user" className="object-cover w-[23px] h-[23px]" /></div>
        </div>
      </div>
    </>
  )
}

export default DashboardLeftHeader