import style from "./styles/Navbar.module.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar({ menuState, setMenuState, setSidebarState }) {
  const menu = ["promo", "tentang", "layanan", "destinasi", "galery", "testimoni"];
  return (
    <div className={style["navbar"]}>
      <div className={style["navbar-body"]}>
        <Link href="/">
          <a className={style["link-to-center"]}>
            <Image src="/navbar-logo.png" alt="navbar-logo" height={60} width={180} />
          </a>
        </Link>
        <div className={style["menu"]}>
          {menu.map((item, index) => (
            <Link href={item === "home" ? "/" : `#${item}`} key={index}>
              <a className={`${style["menu-list"]} ${menuState === item ? style["active"] : ""}`} onClick={() => setMenuState(item)}>
                {item}
              </a>
            </Link>
          ))}
        </div>
        <div className={style["navbar-cta-wrapper"]}>
          <Button
            onClick={() => {
              window.open(
                "https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya"
              );
            }}
          >
            Hubungi Kami
          </Button>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya"
            className={style["link-to-center"]}
            data-tooltip="Start chat"
            data-flow="right"
          >
            <Image src="/whatsapp-icon.png" alt="whatsapp-icon" width={34} height={34} />
          </a>
        </div>
        <button className={style["btn-menu-resp"]} onClick={() => setSidebarState(true)}>
          <Image src="/menu.svg" alt="menu" height={24} width={24} />
        </button>
      </div>
    </div>
  );
}
