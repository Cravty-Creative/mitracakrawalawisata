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
      customerOrder: "Haji Plus",
      review:
        "Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Libero nunc consequat interdum varius sit amet mattis vulputate. Tristique senectus et netus et malesuada fames ac. Volutpat maecenas volutpat blandit aliquam.",
      date: "8 June 2022",
    },
    {
      customerName: "Dinda",
      customerOrder: "Umrah Berkah",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "8 June 2022",
    },
    {
      customerName: "Komariah",
      customerOrder: "Haji Plus",
      review:
        "Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Libero nunc consequat interdum varius sit amet mattis vulputate. Tristique senectus et netus et malesuada fames ac. Volutpat maecenas volutpat blandit aliquam.",
      date: "8 June 2022",
    },
    {
      customerName: "Jaenulatif",
      customerOrder: "Umrah Berkah",
      review:
        "Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Sit amet tellus cras adipiscing enim. Purus ut faucibus pulvinar elementum integer enim. In massa tempor nec feugiat nisl pretium fusce id velit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quam quisque id diam vel quam. At elementum eu facilisis sed odio morbi. Eleifend mi in nulla posuere sollicitudin aliquam.",
      date: "8 June 2022",
    },
    {
      customerName: "Widya",
      customerOrder: "Turki",
      review:
        "Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Libero nunc consequat interdum varius sit amet mattis vulputate. Tristique senectus et netus et malesuada fames ac. Volutpat maecenas volutpat blandit aliquam.",
      date: "8 June 2022",
    },
    {
      customerName: "Komariah",
      customerOrder: "Haji Plus",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "8 June 2022",
    },
    {
      customerName: "Jaenulatif",
      customerOrder: "Umrah Berkah",
      review:
        "Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Libero nunc consequat interdum varius sit amet mattis vulputate. Tristique senectus et netus et malesuada fames ac. Volutpat maecenas volutpat blandit aliquam.",
      date: "8 June 2022",
    },
    {
      customerName: "Widya",
      customerOrder: "Turki",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "8 June 2022",
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
                        src="/user.svg"
                        alt="card-image"
                        height={32}
                        width={32}
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
