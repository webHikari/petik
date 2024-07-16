import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "@/pages/About/About.jsx";
import Root from "@/pages/Root/Root.jsx";
import Index from "@/pages/Index/Index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

const Provider = () => {
    return <RouterProvider router={router} />;
};

export default Provider;
