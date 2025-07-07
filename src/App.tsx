import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {PATHS} from "./constants/paths"
import Landing from './pages/landing/Landing'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import PageNotFound from './components/PageNotFound'
import Layout from './components/Layout'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

const routes = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: PATHS.ABOUT.slice(1),
        element: <About />
      }
      ,
      {
        path: PATHS.LOGIN.slice(1),
        element: <Login />
      }
      ,
      {
        path: PATHS.SIGNUP.slice(1),
        element: <SignUp />
      }
      ,
      {
        path: PATHS.CONTACT.slice(1),
        element: <Contact />
      }
    ]
  },
  {
    path: PATHS.DASHBOARD,
    element:<Dashboard/>
  }
])


const App = () => (
  <RouterProvider router={routes} />
)

export default App



