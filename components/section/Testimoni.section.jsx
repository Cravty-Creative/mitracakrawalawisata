import style from "./styles/Testimoni.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useLayoutEffect } from "react";

export default function Testimoni() {
  const [slides, setSlides] = useState(2);

  useLayoutEffect(() => {
    function updateSlides() {
      let dimension = window.innerWidth;
      let totalSlidesRender = 1;
      if (dimension < 992) {
        totalSlidesRender = 1;
      } else if (dimension <= 1280 && dimension >= 992) {
        totalSlidesRender = 2;
      } else if (dimension > 1280 && dimension < 1440) {
        totalSlidesRender = 4;
      } else {
        totalSlidesRender = 5;
      }
      setSlides(totalSlidesRender);
    }
    window.addEventListener("resize", updateSlides);
    updateSlides();
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const cardImageUrl = [
    {
      customerName: "Zikri",
      customerPhoto: "/gallery-1.jpeg",
      customerOrder: "Haji Ke Tanah Suci",
      review:
        "Layanannya sangat memuaskan, dengan fasilitas hotel bintang 5 dan maskapai penerbangan Saudi Airlines kelas bisnis menjadikan perjalanan haji saya jadi lebih berkesan.",
      date: "13 Juli 2022",
    },
    {
      customerName: "Dinda",
      customerPhoto: "/gallery-2.jpeg",
      customerOrder: "Umrah Berkah",
      review:
        "Layanan umroh yang memuaskan, walaupun hotelnya bintang 3 tetapi fasilitasnya lengkap dan nyaman, penerbangannya juga sangat nyaman dan aman. Mantap sekali.",
      date: "8 Juni 2022",
    },
    {
      customerName: "Jenny",
      customerPhoto: "/gallery-3.jpeg",
      customerOrder: "Explore Turkey",
      review:
        "Perjalanan yang sangat berkesan, walaupun dengan harga yang murah tetapi fasilitas dan pelayanannya sangat baik.",
      date: "21 June 2022",
    },
    {
      customerName: "Nurhasanah",
      customerPhoto: "/gallery-4.jpeg",
      customerOrder: "Wisata Halal",
      review:
        "Senang sekali bisa wisata berkeliling di negara timur tengah dengan harga murah dan fasilitas yang lengkap.",
      date: "8 June 2022",
    },
    {
      customerName: "Komariah",
      customerPhoto: "/gallery-5.jpeg",
      customerOrder: "Haji Ke Tanah Suci",
      review:
        "Layanannya sangat memuaskan, dengan fasilitas hotel bintang 5 dan maskapai penerbangan Saudi Airlines kelas bisnis menjadikan perjalanan haji saya jadi lebih berkesan.",
      date: "20 Juli 2022",
    },
    {
      customerName: "Jaenudin",
      customerPhoto: "/gallery-7.jpeg",
      customerOrder: "Umrah Berkah",
      review:
        "Layanan umroh yang memuaskan, walaupun hotelnya bintang 3 tetapi fasilitasnya lengkap dan nyaman, penerbangannya juga sangat nyaman dan aman. Mantap sekali.",
      date: "8 Maret 2022",
    },
    {
      customerName: "Hidayat",
      customerPhoto: "/gallery-8.jpeg",
      customerOrder: "Umroh VVIP",
      review:
        "Layanan umroh yang memuaskan dengan hotel bintang 5, penerbangannya juga sangat nyaman dan aman. Mantap sekali.",
      date: "9 June 2022",
    },
  ];

  return (
    <div className={style["testimoni"]} id="testimoni">
      <div className={style["testimoni-wrapper"]}>
        <div className={style["header"]}>
          <h1 className="font-semibold text-3xl">Testimoni Pelanggan</h1>
          <div className="hidden lg:flex gap-2">
            <button className={`${style["btn-chevron"]} testimoni-btn-prev`}>
              <Image
                src="/chevron-left.svg"
                alt="btn-left"
                width={24}
                height={24}
              />
            </button>
            <button className={`${style["btn-chevron"]} testimoni-btn-next`}>
              <Image
                src="/chevron-right.svg"
                alt="btn-left"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className={style["content"]}>
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
              prevEl: ".testimoni-btn-prev",
              nextEl: ".testimoni-btn-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ padding: "1.2rem" }}
          >
            {(cardImageUrl || []).map((item, index) => (
              <SwiperSlide key={index}>
                <div className={style["card"]}>
                  <div className="flex gap-4 items-center">
                    <div className={style["card-image"]}>
                      <Image
                        src={item.customerPhoto}
                        alt="card-image"
                        height={56}
                        width={56}
                        className={style["card-image"]}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span>{item.customerName}</span>
                      <span>{item.customerOrder}</span>
                    </div>
                  </div>
                  <div>{item.review}</div>
                  <div>{item.date}</div>
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
