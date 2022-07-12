import Image from "next/image";
import style from "./styles/Legalitas.module.css";

export default function Legalitas() {
  return (
    <div id="legalitas" className="w-screen">
      <div className="text-center font-medium text-xl mb-6 lg:mb-0">Berkolaborasi dan Tersertifikasi bersama</div>
      <div className={style["legalitas"]}>
        {["1", "2", "3", "4", "5"].map((x, index) => (
          <div className={style["logo"]} key={index}>
            <Image src={`/legalitas-logo-${x}.png`} alt="logo" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
