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
                  window.open("https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya");
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
            <div className={style["footer-1-social"]}>
              <a
                href="https://wa.me/6282189471527?text=Hai%20Mitra,%20saya%20mau%20dong%20detail%20promonya"
                target="_blank"
                rel="noopener noreferrer"
                className={style["link-to-center"]}
                data-tooltip="0821-8947-1527"
                data-flow="top"
              >
                <Image src="/whatsapp-icon.png" alt="whatsapp-icon" width={36} height={36} />
              </a>
              <a href="mailto:admin@mitracakrawalawisata.com" target="_blank" rel="noopener noreferrer" data-tooltip="admin@mitracakrawalawisata.com" data-flow="top">
                <Image src="/email.png" alt="email-icon" width={36} height={36} />
              </a>
              <a href="https://id-id.facebook.com/MCWtourtravel/" target="_blank" rel="noopener noreferrer" data-tooltip="@MCWtourtravel" data-flow="top">
                <Image src="/facebook.png" alt="facebook-icon" width={36} height={36} />
              </a>
              <a href="https://www.instagram.com/mitra.cakrawala.official/" target="_blank" rel="noopener noreferrer" data-tooltip="@mitra.cakrawala.official" data-flow="top">
                <Image src="/instagram.png" alt="instagram-icon" width={36} height={36} />
              </a>
              <a href="https://www.tiktok.com/@mcwtourtravel" target="_blank" rel="noopener noreferrer" data-tooltip="@mcwtourtravel" data-flow="top">
                <Image src="/tiktok.png" alt="tiktok-icon" width={36} height={36} />
              </a>
            </div>
          </div>
          <div className={style["footer-2"]}>
            <div className="text-gray-400 mb-4">Layanan Populer</div>
            <a href="#layanan">Paket Haji</a>
            <a href="#layanan">Paket Wista Halal</a>
            <a href="#layanan">Pengurusan Visa</a>
            <a href="#layanan">Pengurusan Passport</a>
          </div>
          <div className={style["footer-3"]}>
            <div className="text-gray-400 mb-4">Promo</div>
            <a href="#promo">Paket Haji</a>
            <a href="#promo">Umrah Turkey</a>
            <a href="#promo">Umrah Berkah</a>
            <a href="#promo">Explore Turkey</a>
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
