import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ServicesDisplay from "../Layout/ServicesDisplay";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServicesAll from "../Pages/ServicesAll/ServicesAll";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/add-service',
        element: <AddService/>
      },
      {
        path: '/services',
        element: <ServicesDisplay/>,
        children: [
          {
            path: '/services',
            element: <ServicesAll/>
          },
          {
            path: '/services/:id',
            element: <ServiceDetails/>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          }
        ]
      },
    ]
  }
])

export default router;