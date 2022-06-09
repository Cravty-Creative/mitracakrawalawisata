/* eslint-disable @next/next/no-img-element */
import style from "./styles/UnderConstruction.module.css";

export default function UnderConstruction() {
  return (
    <div className={style["wrapper"]}>
      <div className={style["company"]}>mitracakrawalawisata.com</div>
      <div className={style["img-wrapper"]}>
        <img src="/under-construction.png" alt="under construction" />
      </div>
      <div className={style["footer"]}>
        Created with love and passion by
        <div className="w-24">
          <img src="/cravty-transparent.png" alt="cravty" className="w-full" />
        </div>
      </div>
    </div>
  );
}
