import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import About from "../pages/Home/About/About";
import Process from "../pages/Home/Process/Process";
import Services from "../pages/Home/Service/Services";
import Contact from "../pages/Home/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element: <HomePage></HomePage>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/process',
            element: <Process></Process>
        },
        {
            path:'/services',
            element: <Services></Services>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },

    ]
  },
]);