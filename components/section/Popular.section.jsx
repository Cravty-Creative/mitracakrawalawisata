import Image from "next/image";
import style from "./styles/Popular.module.css";

export default function Popular() {
  // const cardPopular = [
  //   "Umroh ke Tanah Suci",
  //   "Explore Turkey",
  //   "Explore Mesir",
  //   "Explore Malaysia",
  //   "Explore Singapore",
  //   "Explore Yordania",
  // ];
  const dataPopular = [
    {
      title: "Umroh ke Tanah Suci",
      img: "/mecca-1.jpg",
      price: "Start From 27,5 Jt",
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
          <h1 className="font-semibold text-2xl">Our Popular Products</h1>
          <a
            href="javascript:void"
            rel="noopener noreferrer"
            data-tooltip="more product"
            data-flow="top"
          >
            See more
          </a>
        </div>
        <div className={style["card-wrapper"]}>
          {dataPopular.map((item, index) => (
            <div className={style["card"]} key={index}>
              <div className={style["image-wrapper"]}>
                <Image
                  src={item.img}
                  alt="card"
                  layout="fill"
                  className="object-cover"
                />
                <div className={style["overlay"]}>
                  <span className="text-white font-semibold text-2xl">
                    {item.price}
                  </span>
                </div>
              </div>
              <span className="text-xl font-semibold">{item.title}</span>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
