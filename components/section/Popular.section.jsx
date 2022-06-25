import Image from "next/image";
import style from "./styles/Popular.module.css";

export default function Popular() {
  const cardPopular = [
    "Umrah Berkah",
    "Haji Plus",
    "Haji Regular",
    "Umrah 9 Hari",
    "Liburan Eropa",
    "Turki",
  ];
  return (
    <div className={style["popular"]} id="destinasi">
      <div className={style["popular-wrapper"]}>
        <div className={style["header"]}>
          <h1 className="font-semibold text-2xl">Our Popular Products</h1>
          <a
            href="javascript:void"
            rel="noopener noreferrer"
            data-tooltip="more product"
            data-flow="top"
          >
            See more
          </a>
        </div>
        <div className={style["card-wrapper"]}>
          {cardPopular.map((item, index) => (
            <div className={style["card"]} key={index}>
              <div className={style["image-wrapper"]}>
                <Image
                  src="/mecca-hero.jpg"
                  alt="card"
                  layout="fill"
                  className="object-cover"
                />
                <div className={style["overlay"]}>
                  <span className="text-white font-semibold text-2xl">
                    IDR 29,000,000
                  </span>
                </div>
              </div>
              <span className="text-xl font-semibold">{item}</span>
              <span>Mekkah - Madinah</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
