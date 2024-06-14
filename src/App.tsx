import Navbar from "@/scences/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "./shared/types";
import Home from "./scences/home";
import Benefits from "@/scences/benefits";
import OurClasses from "@/scences/ourClasses";
import ContactUs from "@/scences/contactUs";
import Footer from "@/scences/footer";
enum SelectedPage{
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",

}
function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <div className="app bg-gray-20 w-56">
      <Navbar 
     isTopOfPage={isTopOfPage}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}/>
     <Home setSelectedPage={setSelectedPage}/>
     <Benefits setSelectedPage={setSelectedPage}/>
     <OurClasses setSelectedPage={setSelectedPage}/>
     <ContactUs setSelectedPage={setSelectedPage}/>
     <Footer setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App