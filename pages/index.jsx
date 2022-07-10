import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/section/Hero.section";
import Promo from "../components/section/Promo.section";
import Statistics from "../components/section/Statistics";
import About from "../components/section/About.section";
import Layanan from "../components/section/Layanan.section";
import Popular from "../components/section/Popular.section";
import Testimoni from "../components/section/Testimoni.section";
import Plan from "../components/section/Plan.section";
import Footer from "../components/section/Footer.section";
import Footnote from "../components/section/Footnote.section";
import Modal from "../components/Modal";
import Gallery from "../components/section/Gallery.section";

export default function Home() {
  const [modal, setModal] = useState({
    isOpen: false,
    photo: null,
    title: null,
    desc: null,
    price: null,
  });

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
      <Navbar
        menuState={menuState}
        setSidebarState={setSidebarState}
        setMenuState={setMenuState}
      />
      <Sidebar
        menuState={menuState}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        setMenuState={setMenuState}
      />
      <Hero setModal={setModal} />
      <Promo setModal={setModal} />
      <Statistics />
      <About />
      <Layanan setModal={setModal} />
      <Popular setModal={setModal} />
      <Gallery />
      <Testimoni />
      <Plan />
      <Footer />
      <Footnote />
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}
