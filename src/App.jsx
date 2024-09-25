import './App.css'
import Error from './pages/Error';
import Notes from './pages/Notes';
import Body from './pages/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet,Link } from "react-router-dom";


function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export const appRouter = createBrowserRouter([
{

  path: "/",
  element: <App/>,
  errorElement: <Error/>,
  children: [
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/notes",
      element: <Notes/>
    }
  ]

}

])

export default App
