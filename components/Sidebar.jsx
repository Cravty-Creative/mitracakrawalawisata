import style from "./styles/Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Sidebar({ sidebarState, setSidebarState, menuState }) {
  return (
    <div
      className={`${style["sidebar"]} ${sidebarState ? style["open"] : ""}`}
      onClick={() => setSidebarState(false)}
    >
      <div
        className={`${style["sidebar-wrapper"]} ${
          sidebarState ? style["open"] : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style["sidebar-head"]}>
          <Link href="/">
            <a>
              <Image
                src="/navbar-logo.png"
                alt="logo"
                width={120}
                height={40}
              />
            </a>
          </Link>
          <button onClick={() => setSidebarState(false)}>
            <Image src="/x.svg" alt="close" width={24} height={24} />
          </button>
        </div>
        <div className={style["sidebar-body"]}>
          <div className={style["menu"]}>
            <Link href="#">
              <a
                className={`${style["menu-list"]} ${
                  menuState === "home" ? style["active"] : ""
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="#">
              <a
                className={`${style["menu-list"]} ${
                  menuState === "promo" ? style["active"] : ""
                }`}
              >
                Promo
              </a>
            </Link>
            <Link href="#">
              <a
                className={`${style["menu-list"]} ${
                  menuState === "destinasi" ? style["active"] : ""
                }`}
              >
                Destinasi
              </a>
            </Link>
            <Link href="#">
              <a
                className={`${style["menu-list"]} ${
                  menuState === "layanan" ? style["active"] : ""
                }`}
              >
                Layanan
              </a>
            </Link>
            <Link href="#">
              <a
                className={`${style["menu-list"]} ${
                  menuState === "tentang" ? style["active"] : ""
                }`}
              >
                Tentang
              </a>
            </Link>
          </div>
          <div className={style["btn-cta-group"]}>
            <Button>Contact us</Button>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/6282189471427?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel"
              className={style["link-to-center"]}
              data-tooltip="Start chat"
              data-flow="right"
            >
              <Image
                src="/whatsapp-icon.png"
                alt="whatsapp-icon"
                width={34}
                height={34}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
