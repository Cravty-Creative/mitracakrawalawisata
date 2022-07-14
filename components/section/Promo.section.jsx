import style from "./styles/Promo.module.css";
import Image from "next/image";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useLayoutEffect } from "react";
import Link from "next/link";

export default function Promo({ setModal }) {
  const [slides, setSlides] = useState(2);

  useLayoutEffect(() => {
    function updateSlides() {
      let dimension = window.innerWidth;
      let totalSlidesRender = 1;
      if (dimension < 992) {
        totalSlidesRender = 1;
      } else if (dimension <= 1280 && dimension >= 992) {
        totalSlidesRender = 2;
      } else {
        totalSlidesRender = 3;
      }
      setSlides(totalSlidesRender);
    }
    window.addEventListener("resize", updateSlides);
    updateSlides();
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const cardImageUrl = [
    {
      title: "Umroh Berkah 9 Hari",
      price: "IDR 27,5 jt",
      desc: "Saudia Airlines dengan Hotel bintang 4 di Nozol Royal IN Madinah dan Al-Masa di Mekkah program selama 9 Hari",
      photo: "/paket-",
    },
    {
      title: "Explore Turkey 9 Hari",
      price: "IDR 14,9 jt",
      desc: "Turkish Airlines di periode Januari 2023 - Maret 2023 program selama 9 Hari",
      photo: "/paket-",
    },
    {
      title: "Umroh Berkah 12 Hari",
      price: "IDR 28,5 jt",
      desc: "Etihad Airlines dengan Hotel bintang 3 di Mirrage Salam Madinah dan Mathwer Jiwar di Mekkah program selama 12 Hari",
      photo: "/paket-",
    },
    {
      title: "Umroh Turkey 12 Hari",
      price: "IDR 34,5 jt",
      desc: "Turkish Airlines dengan Hotel bintang 5 di Mileniumal Aqeeq di Madinah, Swiss Al-Maqom di Mekkah & Radison Blu di Istanbul program selama 12 Hari",
      photo: "/paket-",
    },
    {
      title: "Umroh Exlcusive",
      price: "By Request",
      desc: "Paket umroh exlcusive dengan harga, fasilitas, dan maskapai sesuai permintaan anda",
      photo: "/paket-",
    },
    {
      title: "Umroh VVIP",
      price: "IDR 55,5 jt",
      desc: "Saudi Airlines (Business Class) dengan Hotel bintang 5 di Mileniumal Aqeeq di Madinah & Swiss Al-Maqom di Mekkah program selama 9 Hari",
      photo: "/paket-",
    },
  ];
  return (
    <>
      <div className={style["promo-wrapper"]} id="promo">
        <div className={style["promo"]}>
          <div data-aos="fade-right" data-aos-duration="800" className={style["promo-title"]}>
            <div className="font-semibold text-5xl mb-4">Promo Spesial Untuk Anda</div>
            <div>
              Dapatkan paket perjalanan mewah dengan harga terbaik hanya di{" "}
              <span>
                <Image src="/logo.png" alt="logo" width={16} height={16} />
              </span>
              <b> Mitra Cakrawala Wisata</b>
            </div>
            <div className={style["promo-cta-wrapper"]}>
              <Link href="#layanan">
                <a>
                  <Button className={style["btn-cta-hero"]}>Pesan Sekarang</Button>
                </a>
              </Link>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya"
                className={style["link-to-center"]}
                data-tooltip="Mulai percakapan"
                data-flow="right"
              >
                <Image src="/whatsapp-icon.png" alt="whatsapp-icon" width={34} height={34} />
              </a>
            </div>
          </div>
          <div className={style["promo-slider"]} data-aos="fade-up" data-aos-duration="1000">
            <Swiper
              spaceBetween={30}
              slidesPerView={slides}
              loop={true}
              observer={true}
              observeParents={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".promo-btn-prev",
                nextEl: ".promo-btn-next",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              style={{ padding: "1.2rem" }}
            >
              {(cardImageUrl || []).map((item, index) => (
                <SwiperSlide key={index}>
                  <a
                    className={style["card"]}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        photo: `${item.photo}${index + 1}.png`,
                        price: item.price,
                        title: item.title,
                        desc: item.desc,
                      });
                    }}
                  >
                    <div className={style["card-image"]}>
                      <Image src={`${item.photo}${index + 1}.png`} alt="card-1" layout="fill" />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className={`${style["btn-chevron"]} ${style["btn-chevron-prev"]} promo-btn-prev`}>
              <Image src="/chevron-left.svg" alt="btn-left" width={24} height={24} />
            </button>
            <button className={`${style["btn-chevron"]} ${style["btn-chevron-next"]} promo-btn-next`}>
              <Image src="/chevron-right.svg" alt="btn-left" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
