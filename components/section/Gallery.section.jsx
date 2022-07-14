import Image from "next/image";
import style from "./styles/Gallery.module.css";
import { useEffect, useState } from "react";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

export default function Gallery({ setModal }) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const slideOne = ["/gallery-1.jpeg", "/mecca-2.jpg", "/gallery-4.jpeg"];
  const slideTwo = ["/gallery-3.jpeg", "/gallery-2.jpeg", "/gallery-5.jpeg"];
  const slideThree = ["/gallery-6.jpeg", "/gallery-7.jpeg", "/gallery-8.jpeg"];

  return (
    <div className={style["bg-galery"]} id="galery">
      <div className={style["galery"]}>
        <div className={style["title"]}>
          <div className="font-semibold text-4xl text-center lg:w-1/3 text-white">Momen Perjalanan Yang Telah Kami Lakukan</div>
          <div className="lg:w-1/3 font-light text-center text-white">Perjalanan Ibadah terbaik akan anda temukan bersama kami Mitra Cakrawala Wisata</div>
        </div>
        <div className={style["content"]}>
          <div className={style["slide-one"]}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-offset="-145" data-aos-delay={windowWidth > 1080 ? "200" : false}>
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
                modules={[Autoplay]}
                style={{ height: "100%" }}
              >
                {(slideOne || []).map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        variant: "galery",
                        photo: item,
                      });
                    }}
                  >
                    <div className={style["overlay"]}>
                      <span className={style["overlay-click"]}>click anywhere</span>
                    </div>
                    <Image src={item} alt="slide one" layout="fill" objectFit="cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={style["slide-two"]}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-offset="-240" data-aos-delay={windowWidth > 1080 ? "600" : false}>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                observer={true}
                observeParents={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                style={{ height: "100%" }}
              >
                {(slideTwo || []).map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        variant: "galery",
                        photo: item,
                      });
                    }}
                  >
                    <div className={style["overlay"]}>
                      <span className={style["overlay-click"]}>click anywhere</span>
                    </div>
                    <Image src={item} alt="slide one" layout="fill" objectFit="cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={style["slide-three"]}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-offset="-30" data-aos-delay={windowWidth > 1080 ? "400" : false}>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                observer={true}
                observeParents={true}
                autoplay={{
                  delay: 2700,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                style={{ height: "100%" }}
              >
                {(slideThree || []).map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        variant: "galery",
                        photo: item,
                      });
                    }}
                  >
                    <div className={style["overlay"]}>
                      <span className={style["overlay-click"]}>click anywhere</span>
                    </div>
                    <Image src={item} alt="slide one" layout="fill" objectFit="cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Button
            variant="play-animation"
            onClick={() => {
              setModal({
                isOpen: true,
                variant: "galery-video",
                video: "https://www.youtube.com/embed/PeaLEHzazWM",
              });
            }}
          >
            LIHAT PERJALANAN KAMI-
          </Button>
        </div>
      </div>
    </div>
  );
}
