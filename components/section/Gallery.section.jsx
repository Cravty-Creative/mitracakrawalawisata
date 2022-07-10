import Image from "next/image";
import style from "./styles/Gallery.module.css";
import { useEffect, useState } from "react";
import Button from "../Button";

export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <div className={style['bg-galery']} id="galery">
      <div className={style['galery']}>
        <div className={style['title']}>
          <div className="font-semibold text-4xl lg:w-1/3 text-white">Momen Perjalanan Yang Telah Kami Lakukan</div>
          <div className="lg:w-1/3 font-light text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quisquam est nisi libero nam obcaecati in similique soluta, dolore, corporis blanditiis fugit, eaque quaerat nostrum nemo repellat enim id saepe.</div>
        </div>
        <div className={style['content']}>
          <div className={style['slide-one']}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-offset="-20" data-aos-delay={windowWidth > 1080 ? "200" : false}>
              <Image src="/malaysia.jpg" alt="slide one" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={style['slide-two']}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-offset="-50" data-aos-delay={windowWidth > 1080 ? "600" : false}>
              <Image src="/istanbul.jpg" alt="slide one" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={style['slide-three']}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-offset="-50">
              <Image src="/mecca-hero.jpg" alt="slide one" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={style['slide-four']}>
            <div className="relative h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay={windowWidth > 1080 ? "400" : false}>
              <Image src="/egypt.jpg" alt="slide one" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Button variant="play-animation">LIHAT PERJALANAN KAMI- </Button>
        </div>
      </div>
    </div>
  );
}
