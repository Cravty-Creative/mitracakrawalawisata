import style from "./styles/Promo.module.css";
import Image from "next/image";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useLayoutEffect } from "react";
import Link from 'next/link'

export default function Promo() {
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

  const cardImageUrl = {
    "paket-1": "/paket-1.png",
    "paket-2": "/paket-2.png",
    "paket-3": "/paket-3.png",
    "paket-4": "/paket-4.png",
    "paket-5": "/paket-5.png",
    "paket-6": "/paket-6.png",
  };
  return (
    <>
      <div className={style["promo-wrapper"]} id="promo">
        <div className={style["promo"]}>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className={style["promo-title"]}
          >
            <div className="font-semibold text-5xl mb-4">
              Promo terbatas untuk anda
            </div>
            <div>Dapatkan paket perjalanan dengan harga promo</div>
            <div className={style["promo-cta-wrapper"]}>
            <Link href="#layanan">
              <a>
                <Button className={style["btn-cta-hero"]}>Pesan Sekarang</Button>
              </a>
            </Link>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel"
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
          <div
            className={style["promo-slider"]}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
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
              {Object.keys(cardImageUrl || []).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={style["card"]}>
                    <div className={style["card-image"]}>
                      <Image
                        src={cardImageUrl[item]}
                        alt="card-1"
                        layout="fill"
                        // objectFit="cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className={`${style["btn-chevron"]} ${style["btn-chevron-prev"]} promo-btn-prev`}
            >
              <Image
                src="/chevron-left.svg"
                alt="btn-left"
                width={24}
                height={24}
              />
            </button>
            <button
              className={`${style["btn-chevron"]} ${style["btn-chevron-next"]} promo-btn-next`}
            >
              <Image
                src="/chevron-right.svg"
                alt="btn-left"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
