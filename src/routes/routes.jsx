import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
      
    },
    {
        path: '/auth',
        element: <h2>authentication layout</h2>,
        
    }
])

export default router;