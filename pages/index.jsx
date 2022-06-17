import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import style from "../styles/modules/Home.module.css";
import Button from "../components/Button";
import Image from "next/image";

export default function Home() {
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
      <div className={style["hero"]}>
        <div className={style["hero-body"]}>
          <div className={style["hero-description"]}>
            <div className={style["desc1"]}>
              MELAYANI ADALAH PRIORITAS KEPUASAN TUJUAN UTAMA
            </div>
            <h1 className={style["headline"]}>
              Mitra Cakrawala Wisata Tour & Travel
            </h1>
            <div className={style["desc2"]}>
              Didirikan dengan semangat dan dedikasi tinggi dalam memenuhi serta
              melayani para tamu Allah yang hendak menunaikan ibadah umrah dan
              haji ke tanah suci
            </div>
            <Button className={style["btn-cta-hero"]}>Pesan Sekarang</Button>
          </div>
          <div className={style["hero-image"]}>
            <div className={style["group-card-1"]}>
              <div className={style["card-1"]}>
                <h4 className=" text-green-800 font-semibold mb-2">
                  Destination
                </h4>
                <h2 className="font-bold text-lg mb-1">Paket Umrah 12 Hari</h2>
                <div className="flex gap-2 items-center">
                  <Image src="/location.svg" alt="loc" height={20} width={20} />
                  <span>Mekkah, Saudi Arabia</span>
                </div>
              </div>
              <div className={style["card-2"]}>
                <div className="h-72 relative">
                  <Image
                    src="/mecca-hero.jpg"
                    alt="mecca"
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className={style["group-card-2"]}>
              <div className={style["card-1"]}>
                <h4 className="font-semibold">Deals</h4>
                <h2 className="font-bold text-3xl mb-2">
                  29.000 <span className="font-light text-lg"> .000</span>
                </h2>
                <Button className="w-full">Take Deals</Button>
              </div>
              <div className={style["card-2"]}>
                <h4 className="text-center mb-1">Another offers</h4>
                <button className={style["another-offers"]}>
                  <h2 className="font-bold">Liburan Berkah 1</h2>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/location.svg"
                      alt="loc"
                      height={18}
                      width={18}
                    />
                    <span className="text-xs">Istanbul, Turki</span>
                  </div>
                </button>
                <button className={style["another-offers"]}>
                  <h2 className="font-bold">Liburan Berkah 2</h2>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/location.svg"
                      alt="loc"
                      height={18}
                      width={18}
                    />
                    <span className="text-xs">Dubai, Uni Emirat Arab</span>
                  </div>
                </button>
                <Button className="w-full">See More Offers</Button>
              </div>
            </div>
          </div>
          <div className={style["mouse-animation-wrapper"]}>
            <div className={style["mouse-animation"]}>
              <div className={style["dot"]}></div>
            </div>
            <div>Scroll for more</div>
          </div>
        </div>
      </div>
    </>
  );
}
