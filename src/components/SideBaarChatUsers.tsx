import authUserImg from "../assests/authUser.png"

const SideBaarChatUsers = () => {
  return (
    <>
          <div className="px-6">
            <div className="border-b border-[#E9EDEF] flex flex-col justify-center  min-h-15 max-h-15">
              <div className="flex gap-2">
                <div className="col-span-1 w-10 h-10 rounded-full">
                  <img src={authUserImg} alt="user" className="object-cover" />
                </div>
                <div className="flex-1 text-[10px]">
                  <div className="flex justify-between items-center">
                    <h1 className="text-[13px] font-semibold text-[#6B7C85]">Designers Corner</h1>
                    <span className="text-[11px] font-semibold text-[#6B7C85]">3:11 pm</span>
                  </div>
                  <div className="flex items-center justify-between mt-[2px]">
                    <h1 className="text-[11px] font-sans text-[#6B7C85]">2348128225 </h1>
                    <p className="text-[10px] font-sans text-[#6B7C85]"> That’s a great news! Congratulations...</p>
                    <span className="text-[6px] font-sans text-[#ffff] bg-[#25D366] p-[3px] rounded-full">197</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SideBaarChatUsers