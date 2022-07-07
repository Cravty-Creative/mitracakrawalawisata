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
            <h1 className="font-bold lg:text-4xl text-xl mb-2 text-center">Wujudkan Perjalanan Anda Bersama Kami</h1>
            <h2 className="text-center">kami akan memberikan penawaran terbaik untuk Anda dan kami juga akan memberikan rekomendasi terbaik untuk Anda</h2>
            <div className="flex flex-col md:flex-row gap-2 mt-10">
              <Link href="#layanan">
                <a>
                  <Button>Lihat Penawaran</Button>
                </a>
              </Link>
              <Button
                variant="secondary"
                onClick={() => {
                  window.open("https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel");
                }}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className={style["placeholder-banner"]}>klik untuk Penawaran</div>
        </div>
        <div className={style["footer-content"]}>
          <div className={style["footer-1"]}>
            <Link href="/">
              <a className="relative w-48 h-16">
                <Image src="/navbar-logo.png" alt="logo" layout="fill" className="object-fit" />
              </a>
            </Link>
            <div className="lg:w-1/2 mt-2">Jl South City Barat Blok B1-17 Pondok Cabe Udik Pamulang Tangerang Selatan 15418</div>
            <a href="https://wa.me/6282189471527?text=Halo%20saya%20ingin%20bertanya%20perihal%20travel" target="_blank" rel="noopener noreferrer">
              0821-8947-1527
            </a>
            <a href="mailto:admin@mitracakrawalawisata.com" target="_blank" rel="noopener noreferrer">
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
