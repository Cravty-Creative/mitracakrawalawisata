import style from "./styles/Navbar.module.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar({ menuState, setMenuState, setSidebarState }) {
  return (
    <div className={style["navbar"]}>
      <div className={style["navbar-body"]}>
        <Link href="/">
          <a className={style["link-to-center"]}>
            <Image
              src="/navbar-logo.png"
              alt="navbar-logo"
              height={60}
              width={180}
            />
          </a>
        </Link>
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
        <div className={style["navbar-cta-wrapper"]}>
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
        <button
          className={style["btn-menu-resp"]}
          onClick={() => setSidebarState(true)}
        >
          <Image src="/menu.svg" alt="menu" height={24} width={24} />
        </button>
      </div>
    </div>
  );
}
