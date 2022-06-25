import style from "./styles/About.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const cardImageUrl = {
    "slide-1": "/mecca-hero.jpg",
    "slide-2": "/istanbul-hero.jpg",
    "slide-3": "/mecca-2.jpg",
  };
  return (
    <div className={style["about"]} id="tentang">
      <div className={style["content-wrapper"]}>
        <div className={style["text-content"]}>
          <div className="relative h-12 w-32 mb-4">
            <Image
              src="/navbar-logo.png"
              alt="logo"
              layout="fill"
              className="object-fit"
            />
          </div>
          <h2 className="text-xl">Tentang Kami</h2>
          <h1 className="font-semibold text-4xl mt-4">
            PT. Mitra Cakrawala Wisata
          </h1>
          <h2 className="font-semibold text-4xl mt-4">Tour & Travel</h2>
          <div className={style["visi-misi-wrapper"]}>
            <div
              className={style["visi"]}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className={style["title"]}>Visi</div>
              <div className={style["visi-misi-list"]}>
                <div className={style["list"]}>
                  <div className="w-1 font-bold text-3xl">
                    <div className="bg-black rounded-full w-1.5 h-1.5 mt-2"></div>
                  </div>
                  <div className="flex-grow-1">
                    Menjadi Biro Perjalanan Wisata Yang Mampu Mengakomodir
                    Setiap Kebutuhan Jamaah
                  </div>
                </div>
              </div>
            </div>
            <div
              className={style["misi"]}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={windowWidth > 1080 ? "800" : false}
            >
              <div className={style["title"]}>Misi</div>
              <div className={style["visi-misi-list"]}>
                <div className={style["list"]}>
                  <div className="w-1 font-bold text-3xl">
                    <div className="bg-black rounded-full w-1.5 h-1.5 mt-2"></div>
                  </div>
                  <div className="flex-grow-1">
                    Berorientasi Pada Pelayanan Yang Memuaskan
                  </div>
                </div>
                <div className={style["list"]}>
                  <div className="w-1 font-bold text-3xl">
                    <div className="bg-black rounded-full w-1.5 h-1.5 mt-2"></div>
                  </div>
                  <div className="flex-grow-1">
                    Meningkatkan SDM Yang Profes ional
                  </div>
                </div>
                <div className={style["list"]}>
                  <div className="w-1 font-bold text-3xl">
                    <div className="bg-black rounded-full w-1.5 h-1.5 mt-2"></div>
                  </div>
                  <div className="flex-grow-1">
                    Menerapkan Manajemen Perusahaan Yang Baik
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={style["image-content"]}
          data-aos={windowWidth > 1080 ? "fade-left" : "fade-up"}
          data-aos-duration="800"
          data-aos-delay={windowWidth > 1080 ? "1600" : false}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".about-btn-prev",
              nextEl: ".about-btn-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ padding: "1.2rem" }}
          >
            {Object.keys(cardImageUrl || []).map((item, index) => (
              <SwiperSlide key={index}>
                <div className={style["card-image"]}>
                  <Image
                    src={cardImageUrl[item]}
                    alt="card-1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`${style["btn-chevron"]} ${style["btn-chevron-prev"]} about-btn-prev`}
          >
            <Image
              src="/chevron-left.svg"
              alt="btn-left"
              width={24}
              height={24}
            />
          </button>
          <button
            className={`${style["btn-chevron"]} ${style["btn-chevron-next"]} about-btn-next`}
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
  );
}
