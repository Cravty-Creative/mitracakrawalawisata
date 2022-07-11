import style from "./styles/Modal.module.css";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Modal({ modal, setModal }) {
  const closeModal = () => {
    setModal({
      isOpen: false,
      photo: null,
      video: null,
      title: null,
      desc: null,
      price: null,
    });
  };

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  if (modal?.isOpen)
    switch (modal?.variant) {
      case "galery":
        return (
          <div className={style["modal"]} onClick={closeModal}>
            <div className={style["modal-body-galery"]} onClick={(e) => e.stopPropagation()}>
              <button className={style["btn-close"]} onClick={closeModal}>
                <Image src="/x.svg" alt="close" width={24} height={24} />
              </button>
              <Image src={modal.photo} alt="galery" layout="fill" objectFit="contain" />
            </div>
          </div>
        );

      case "galery-video":
        return (
          <div className={style["modal"]} onClick={closeModal}>
            <div className={style["modal-body-video"]} onClick={(e) => e.stopPropagation()}>
              <button className={style["btn-close"]} onClick={closeModal}>
                <Image src="/x.svg" alt="close" width={24} height={24} />
              </button>
              <iframe
                width={windowWidth > 1080 ? "560" : "auto"}
                height={windowWidth > 1080 ? "315" : "auto"}
                src={`${modal?.video}?autoplay=1`}
                title="Video Galery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );

      default:
        return (
          <div className={style["modal"]} onClick={closeModal}>
            <div className={style["modal-body"]} onClick={(e) => e.stopPropagation()}>
              <button className={style["btn-close"]} onClick={closeModal}>
                <Image src="/x.svg" alt="close" width={24} height={24} />
              </button>
              <div className={style["modal-image"]}>
                <Image src={modal.photo ? modal.photo : "/mecca-hero.jpg"} alt="modal image" layout="fill" className="object-cover" />
              </div>
              <div className={style["modal-desc"]}>
                <h1 className="font-semibold text-xl pr-8">{modal.title}</h1>
                <div className="flex flex-col gap-1">
                  <span className="font-sm">Price</span>
                  <span className="font-bold text-2xl">{modal.price.toLowerCase() === "contact sales" || modal.price.toLowerCase() === "contact us" ? modal.price : "IDR " + modal.price}</span>
                </div>
                <span>{modal.desc}</span>
                <Button
                  onClick={() => {
                    window.open("https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya");
                  }}
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </div>
        );
    }
}
