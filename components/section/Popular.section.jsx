import Image from "next/image";
import style from "./styles/Popular.module.css";

export default function Popular({ setModal }) {
  const dataPopular = [
    {
      title: "Haji ke Tanah Suci",
      img: "/mecca-1.jpg",
      price: "Start From USD 12k",
      location: "Mekkah - Madinah, Saudi Arabia",
    },
    {
      title: "Explore Turkey",
      img: "/turkey.jpg",
      price: "Start From 14,9 Jt",
      location: "Istanbul, Turkey",
    },
    {
      title: "Explore Mesir",
      img: "/egypt.jpg",
      price: "Contact Sales",
      location: "Kairo, Mesir",
    },
    {
      title: "Explore Malaysia",
      img: "/malaysia.jpg",
      price: "Contact Sales",
      location: "Kuala Lumpur, Malaysia",
    },
    {
      title: "Explore Singapore",
      img: "/singapore.jpg",
      price: "Contact Sales",
      location: "Merlion Park, Singpore",
    },
    {
      title: "Explore Yordania",
      img: "/yordania.jpg",
      price: "Contact Sales",
      location: "Amman, Yordania",
    },
  ];
  return (
    <div className={style["popular"]} id="destinasi">
      <div className={style["popular-wrapper"]}>
        <div className={style["header"]}>
          <h1 className="font-semibold text-2xl">Destinasi Terbaik Kami</h1>
          <a href="#plan" rel="noopener noreferrer" data-tooltip="lihat selengkapnya" data-flow="top">
            Selengkapnya
          </a>
        </div>
        <div className={style["card-wrapper"]}>
          {dataPopular.map((item, index) => (
            <abbr
              className={style["card"]}
              key={index}
              onClick={() => {
                setModal({
                  isOpen: true,
                  photo: item.img,
                  className: "object-cover",
                  title: item.title,
                  price: item.price,
                  desc: item.location,
                });
              }}
            >
              <div className={style["image-wrapper"]}>
                <Image src={item.img} alt="card" layout="fill" className="object-cover" />
                <div className={style["overlay"]}>
                  <span className="text-white font-semibold text-2xl">{item.price}</span>
                </div>
              </div>
              <span className="text-xl font-semibold">{item.title}</span>
              <span>{item.location}</span>
            </abbr>
          ))}
        </div>
      </div>
    </div>
  );
}
