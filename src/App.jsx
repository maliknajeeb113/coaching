import "./App.css";
import Error from "./pages/Error";
import Notes from "./components/Notes";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Body />
            <Notes />
            <Testimonial />
            <Contact />
          </>
        ),
      },
      // {
      //   path: "/notes",
      //   element: <Notes />,
      // },
    ],
  },
]);

export default App;
