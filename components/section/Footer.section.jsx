import style from "./styles/Footer.module.css";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={style["footer"]}>
      <div className={style["footer-wrapper"]}>
        <div className={style["banner"]}>
          <div className={style["glass"]}>
            <h1 className="font-bold lg:text-5xl text-xl">
              Make your dream journey with us
            </h1>
            <h2 className="lg:text-xl">
              we will provide the best offer for you and we will also provide
              the best recommendations for you
            </h2>
            <Link href="#layanan">
              <a>
                <Button className="mt-20">Lets Discover</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={style["footer-content"]}>
          <div className={style["footer-1"]}>
            <Link href="/">
              <a className="relative w-48 h-16">
                <Image
                  src="/navbar-logo.png"
                  alt="logo"
                  layout="fill"
                  className="object-fit"
                />
              </a>
            </Link>
            <div className="w-1/2 mt-2">
              Jl South City Barat Blok B1-17 Pondok Cabe Udik Pamulang Tangerang Selatan 15418
            </div>
            <a
              href="https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel"
              target="_blank"
              rel="noopener noreferrer"
            >
              0821-8947-1527
            </a>
            <a
              href="mailto:admin@mitracakrawalawisata.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              admin@mitracakrawalawisata.com
            </a>
          </div>
          <div className={style["footer-2"]}>
            <div className="text-gray-400 mb-4">Layanan Populer</div>
            <a href="#">Haji</a>
            <a href="#">Umrah</a>
            <a href="#">Turki</a>
            <a href="#">4D 3N</a>
          </div>
          <div className={style["footer-3"]}>
            <div className="text-gray-400 mb-4">Promo</div>
            <a href="#">Haji Plus</a>
            <a href="#">Umrah</a>
            <a href="#">Turki</a>
            <a href="#">4D 3N</a>
          </div>
          <div className={style["footer-4"]}>
            <div className="text-gray-400 mb-4">Destinasi</div>
            <a href="#">Mekkah</a>
            <a href="#">Singapura</a>
            <a href="#">Malaysia</a>
            <a href="#">Turki</a>
          </div>
        </div>
      </div>
    </div>
  );
}
