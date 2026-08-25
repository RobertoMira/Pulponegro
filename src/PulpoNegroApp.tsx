import { RouterProvider } from "react-router-dom";
import { router } from "./router/app.router";



export default function PulpoNegroApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
