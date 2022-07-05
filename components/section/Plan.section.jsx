import Image from "next/image";
import Button from "../Button";
import style from "./styles/Plan.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function Plan() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const cardContent = [
    {
      title: "Umrah",
      price: "29,000,000",
      features: ["Transportation", "Food", "Hotel", "Tour Guide"],
    },
    {
      title: "Umrah",
      price: "29,000,000",
      features: ["Transportation", "Food", "Hotel", "Tour Guide"],
    },
    {
      title: "Umrah",
      price: "29,000,000",
      features: ["Transportation", "Food", "Hotel", "Tour Guide"],
    },
  ];
  return (
    <div className={style["plan"]} id="plan">
      <div className={style["plan-wrapper"]}>
        <h2>Choose the Plan</h2>
        <h1 className="font-semibold text-4xl text-center">Worship to the Holy Land of Mecca</h1>
        <div className={style["card-wrapper"]}>
          {(cardContent || []).map((item, index) => (
            <div
              className={`${style["card"]} ${index === 1 ? style["middle"] : ""}`}
              key={index}
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay={windowWidth > 1080 ? 800 * index : false}
            >
              <div className="flex flex-col gap-6 items-center">
                <span className="font-semibold text-lg">{item.title}</span>
                <span className="font-bold text-2xl">IDR {item.price}</span>
                <span>Features</span>
                <div className="flex flex-col gap-3">
                  {(item.features || []).map((feature, indexFeature) => (
                    <div className="flex gap-3 items-center" key={indexFeature}>
                      <div className={style["dot"]}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={() => {
                  window.open("https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel");
                }}
              >
                Contact Us
              </Button>
            </div>
          ))}
        </div>
        <div className={style["image-content"]}>
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
              prevEl: ".plan-btn-prev",
              nextEl: ".plan-btn-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ padding: "1.2rem" }}
          >
            {(cardContent || []).map((item, index) => (
              <SwiperSlide key={index}>
                <div className={style["card"]} key={index}>
                  <div className="flex flex-col gap-6 items-center">
                    <span className="font-semibold text-lg">{item.title}</span>
                    <span className="font-bold text-2xl">IDR {item.price}</span>
                    <span>Features</span>
                    <div className="flex flex-col gap-3">
                      {(item.features || []).map((feature, indexFeature) => (
                        <div className="flex gap-3 items-center" key={indexFeature}>
                          <div className={style["dot"]}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      window.open("https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel");
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={`${style["btn-chevron"]} ${style["btn-chevron-prev"]} plan-btn-prev`}>
            <Image src="/chevron-left.svg" alt="btn-left" width={24} height={24} />
          </button>
          <button className={`${style["btn-chevron"]} ${style["btn-chevron-next"]} plan-btn-next`}>
            <Image src="/chevron-right.svg" alt="btn-left" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
