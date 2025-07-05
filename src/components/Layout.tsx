import { Outlet } from "react-router-dom"
import Navbaar from "./Navbaar"
import Footer from "./Footer"


const Layout = () => {
  return (
    <div>
      <Navbaar/>
        <main >
           <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout