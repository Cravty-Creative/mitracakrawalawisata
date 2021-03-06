import style from "./styles/Hero.module.css";
import Button from "../Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero({ setModal }) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
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
          <Link href="#layanan">
            <a>
              <Button className={style["btn-cta-hero"]}>Pesan Sekarang</Button>
            </a>
          </Link>
        </div>
        {windowWidth && (
          <div className={style["hero-image"]}>
            <div className={style["group-card-1"]}>
              <div
                data-aos={windowWidth > 1023 ? "fade-down-right" : "fade-left"}
                data-aos-easing="ease-in-out-quad"
                data-aos-delay={windowWidth > 1023 ? "800" : false}
                data-aos-duration={windowWidth > 1023 ? "1000" : "500"}
              >
                <div className={style["card-1"]}>
                  <h4 className=" text-green-800 font-semibold mb-2">
                    Destinasi
                  </h4>
                  <h2 className="font-bold text-lg mb-1">
                    Paket Haji ke Tanah Suci
                  </h2>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/location.svg"
                      alt="loc"
                      height={20}
                      width={20}
                    />
                    <span>Mekkah, Saudi Arabia</span>
                  </div>
                </div>
              </div>
              <div
                data-aos={windowWidth > 1023 ? "fade-up-right" : "fade-up"}
                data-aos-easing="ease-in-out-quad"
                data-aos-delay={windowWidth > 1023 ? "1600" : false}
                data-aos-duration={windowWidth > 1023 ? "1000" : "500"}
              >
                <div className={`${style["card-2"]}`}>
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
            </div>
            <div className={style["group-card-2"]}>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out-quad"
                data-aos-delay={windowWidth > 1023 ? "2000" : false}
                data-aos-duration={windowWidth > 1023 ? "1000" : "500"}
              >
                <div className={style["card-1"]}>
                  <h4 className="font-semibold">Penawaran</h4>
                  <h2 className="font-bold text-3xl mb-2">
                    $12k <span className="font-light text-lg"> ~ $33k</span>
                  </h2>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        photo: "/mecca-hero.jpg",
                        className: "object-cover",
                        title: "Paket Haji ke Tanah Suci",
                        price: "$12k ~ $33k",
                        desc: "Paket Haji terbaik kami dengan harga terjangkau dan fasilitas mewah",
                      });
                    }}
                  >
                    Ambil
                  </Button>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out-quad"
                data-aos-delay={windowWidth > 1023 ? "2600" : false}
                data-aos-duration={windowWidth > 1023 ? "1000" : "500"}
              >
                <div className={style["card-2"]}>
                  <h4 className="text-center mb-1">Penawaran lain</h4>
                  <Link href="#destinasi">
                    <a>
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
                    </a>
                  </Link>
                  <Link href="#destinasi">
                    <a>
                      <button className={style["another-offers"]}>
                        <h2 className="font-bold">Liburan Berkah 2</h2>
                        <div className="flex gap-2 items-center">
                          <Image
                            src="/location.svg"
                            alt="loc"
                            height={18}
                            width={18}
                          />
                          <span className="text-xs">
                            Dubai, Uni Emirat Arab
                          </span>
                        </div>
                      </button>
                    </a>
                  </Link>
                  <Link href="#destinasi">
                    <a>
                      <Button className="w-full">Penawaran Lainnya</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={style["mouse-animation-wrapper"]}>
          <div className={style["mouse-animation"]}>
            <div className={style["dot"]}></div>
          </div>
          <div>geser untuk selengkapnya</div>
        </div>
      </div>
    </div>
  );
}
