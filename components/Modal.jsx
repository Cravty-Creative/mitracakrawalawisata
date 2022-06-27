import style from "./styles/Modal.module.css";
import Image from "next/image";
import Button from "./Button";

export default function Modal({ modal, setModal }) {
  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  if (modal?.isOpen)
    return (
      <div className={style["modal"]} onClick={closeModal}>
        <div
          className={style["modal-body"]}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={style["btn-close"]} onClick={closeModal}>
            <Image src="/x.svg" alt="close" width={24} height={24} />
          </button>
          <div className={style["modal-image"]}>
            <Image
              src={modal.photo ? modal.photo : "/mecca-hero.jpg"}
              alt="modal image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className={style["modal-desc"]}>
            <h1 className="font-semibold text-xl pr-8">{modal.title}</h1>
            <div className="flex flex-col gap-1">
              <span className="font-sm">Price</span>
              <span className="font-bold text-2xl">IDR {modal.price}</span>
            </div>
            <span>{modal.desc}</span>
            <Button
              onClick={() => {
                window.open(
                  "https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel"
                );
              }}
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    );
}
