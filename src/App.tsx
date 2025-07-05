import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "about",
        element: <About />
      }
      ,
      {
        path: "login",
        element: <Login />
      }
      ,
      {
        path: "singup",
        element: <SignUp />
      }
      ,
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
])

const App = () => (
  <RouterProvider router={routes} />
)

export default App



