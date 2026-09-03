import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToAnchor from "../../components/ui/utiles/ScrollToAnchor";





export default function RootLayout() {
  return (
    <> 
        <ScrollToAnchor />
        <Header/>

        <main className="flex-1">
            <Outlet />
        </main>

        <Footer/>

    </>
  )
}
