import Image from "next/image";
import style from "./styles/Layanan.module.css";
import { useEffect, useState } from "react";

export default function Layanan() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const dataLayanan = [
    {
      title: "Paket Umrah",
      img: "/mecca-night.jpg",
      desc: "Paket Umroh terbaik kami dengan harga terjangkau dan fasilitas mewah",
    },
    {
      title: "Paket Wisata Halal",
      img: "/istanbul.jpg",
      desc: "Wisata Halal dengan destinasi negara timur tengah",
    },
    {
      title: "Visa",
      img: "/visa.png",
      desc: "Memberikan kemudahan pengurusan Visa untuk kebutuhan wisata anda",
    },
    {
      title: "Passport",
      img: "/passport.png",
      desc: "Memudahkan pengurusan passport dengan harga yang terjangkau",
    },
  ];

  return (
    <div className={style["layanan"]} id="layanan">
      <div className={style["layanan-wrapper"]}>
        <h1 className="text-xl">Layanan</h1>
        <h2 className="text-4xl font-semibold text-center">
          Layanan Terbaik Kami
        </h2>
        <div className={style["card-wrapper"]}>
          {dataLayanan.map((item, index) => (
            <div
              className={style["card"]}
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={windowWidth > 1080 ? 800 * index : false}
            >
              <div className={style["image-wrapper"]}>
                <Image
                  src={item.img}
                  alt="umrah"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-center">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}