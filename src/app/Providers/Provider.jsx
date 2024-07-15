import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "@/pages/About/About.jsx";
import Root from "@/pages/Root/Root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
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
