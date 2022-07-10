import style from "./styles/Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Sidebar({
  sidebarState,
  setSidebarState,
  menuState,
  setMenuState,
}) {
  const menu = [
    "home",
    "promo",
    "tentang",
    "layanan",
    "destinasi",
    "testimoni",
  ];
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
            {menu.map((item, index) => (
              <Link href={item === "home" ? "/" : `#${item}`} key={index}>
                <a
                  className={`${style["menu-list"]} ${
                    menuState === item ? style["active"] : ""
                  }`}
                  onClick={() => setMenuState(item)}
                >
                  {item}
                </a>
              </Link>
            ))}
          </div>
          <div className={style["btn-cta-group"]}>
            <Button
              onClick={() => {
                window.open(
                  "https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya"
                );
              }}
            >
              Contact us
            </Button>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya"
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
