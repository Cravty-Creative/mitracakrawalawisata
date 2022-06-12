import Button from "../components/Button";
import Header from "../components/Header";
import style from "../styles/modules/404.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Header pageTitle="404" />
      <div className={style["notfound"]}>
        <div className={style["wrapper"]}>
          <div className={style["text-wrapper"]}>
            <span className={style["company-name"]}>
              Mitra Cakrawala Wisata
            </span>
            <div className={style["heading-wrapper"]}>
              <h1 className={style["heading1"]}>404</h1>
              <h2 className={style["heading2"]}>OOPS!</h2>
              <div className={style["heading-desc"]}>
                looks like you got lost
              </div>
              <Button onClick={() => router.back()}>GO HOME</Button>
            </div>
          </div>
          <div className={style["img-wrapper"]}>
            <Image
              src="/404.png"
              alt="Not Found Illustration"
              height={100}
              width={120}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
