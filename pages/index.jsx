import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/section/Hero.section";
import Promo from "../components/section/Promo.section";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [menuState, setMenuState] = useState("home");
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <>
      <Header
        pageTitle="Travel Agent"
        description="Travel Partner Agent for Everyone"
        keyword="Travel, Haji, Umrah, Staycation, Holiday"
      />
      <Navbar menuState={menuState} setSidebarState={setSidebarState} />
      <Sidebar
        menuState={menuState}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
      <Hero />
      <Promo />
    </>
  );
}
