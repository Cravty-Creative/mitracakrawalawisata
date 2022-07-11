import Image from "next/image";
import style from "./styles/Legalitas.module.css";

export default function Legalitas() {
  return (
    <div id="legalitas" className="w-screen min-h-[30vh]">
      <div className={style["legalitas"]}>
        <div className={style["logo"]}>
          <Image src="/kemenag.png" alt="logo" layout="fill" />
        </div>
      </div>
    </div>
  );
}
