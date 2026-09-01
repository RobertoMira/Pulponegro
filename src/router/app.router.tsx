import { createBrowserRouter } from "react-router-dom";
import HomePageMain from "../pages/mains/Home/HomePageMain";
import RootLayout from "../pages/layouts/RootLayout";
import NosotrosPageMain from "../pages/mains/nosotros/NosotrosPageMain";






export const router = createBrowserRouter([
    {
        path : "/",
        element : <RootLayout />,
        children : [
            {
                index: true,
                element : <HomePageMain />
            },
            {
                path: "nosotros",
                element: <NosotrosPageMain />
            },
        ]
    }
])
