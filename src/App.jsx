import './App.css'
import Error from './pages/Error';
import Notes from './pages/Notes';
import Body from './pages/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import { Element } from "react-scroll";
import { createBrowserRouter,Outlet,Link } from "react-router-dom";


function App() {

  return (
    <div className="flex flex-col justify-center gap-y-32">
      <Navbar />
      <Outlet />
      <Element name="testimonials">
        <section id="testimonials">
          <Testimonial/>
        </section>
      </Element>
      <Element name="contact">
        <section id="contact">
          <Contact/>
        </section>
      </Element>
      <Footer />
    </div>
  );
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
