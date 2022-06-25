import style from "./styles/Statistics.module.css";
import { useEffect, useState } from "react";

export default function Statistics({}) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const constantStats = [
    {
      total: "79",
      title: "Products",
    },
    {
      total: "2791",
      title: "Customers",
    },
    {
      total: "23",
      title: "Destination",
    },
    {
      total: "4.92",
      title: "Overall Ratings",
    },
    {
      total: "99%",
      title: "Happy Customers",
    },
  ];
  return (
    <div className={style["stat-wrapper"]}>
      <div className={style["stats"]}>
        <div className={style["content-wrapper"]}>
          {(constantStats || []).map((item, index) => (
            <div
              className={style["stat"]}
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={windowWidth > 1023 ? 500 * index : false}
            >
              <div className="font-bold xl:text-8xl text-6xl text-center">
                {item.total}
              </div>
              <div className="text-center mt-2">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
