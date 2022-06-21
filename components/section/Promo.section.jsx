import style from "./styles/Promo.module.css";

export default function Promo() {
  return (
    <>
      <div className={style["promo-wrapper"]}>
        <div className={style["promo"]}>
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className={style["promo-title"]}
          >
            <div className="font-semibold text-5xl mb-4">
              Promo terbatas untuk anda
            </div>
            <div>Dapatkan paket perjalanan dengan harga promo</div>
          </div>
          <div className={style["promo-slider"]}>Slider</div>
        </div>
      </div>
    </>
  );
}
