import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function ScrollToAnchor() {

    const { hash }  = useLocation();

    useEffect(() => {
        if(hash) {
            const elementId = hash.replace("#","");
            const element = document.getElementById(elementId);

            if(element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start"})
                }, 100);
            }
        }
    }, [hash]);

  return null;
}
