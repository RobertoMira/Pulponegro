import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToAnchor from "../../components/ui/utiles/ScrollToAnchor";





export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col"> 
        <ScrollToAnchor />
        <Header/>

        <main className="flex-1">
            <Outlet />
        </main>

        <Footer/>

    </div>
  )
}
