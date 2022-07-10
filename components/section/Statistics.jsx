import style from "./styles/Statistics.module.css";
import { useEffect, useState } from "react";

export default function Statistics({}) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  // const accountId = "7300802808421707945";
  // const locationId = "ChIJNyIu0SfvaS4RqXAmE3mpUWU";
  // const ratingsAPI = ;
  // const ratings = ratingsAPI.json();
  // console.log(ratings);
  // fetch(`https://mybusiness.googleapis.com/v4/accounts/7300802808421707945/locations/ChIJNyIu0SfvaS4RqXAmE3mpUWU/reviews`, { method: "GET" })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const overallRatings = 4.2;

  const constantStats = [
    {
      total: "12",
      title: "Produk",
    },
    {
      total: "713",
      title: "Pelanggan",
    },
    {
      total: "8",
      title: "Destinasi Wisata",
    },
    {
      total: overallRatings,
      title: "Rating Pelanggan",
    },
    {
      total: Math.floor(overallRatings * 2 * 10) + "%",
      title: "Kepuasan Pelanggan",
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
