import { createBrowserRouter } from "react-router-dom";
import Nopage from "./pages/Nopage";
import Test1 from "./pages/test1";
import Test2 from "./pages/test2";
import Home from "./pages/Home";

const routers = createBrowserRouter([
    {
        path: '*',
        element: <Nopage />
    },{
        path: '/',
        element: <Home />
    },
    {
        path: '/test1',
        element: <Test1 />
    },
    {
        path: '/test2',
        element: <Test2 />
    }
])

export default routers