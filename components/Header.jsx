import Head from "next/head";
export default function Header({
  pageTitle,
  description = "Mitra Cakrawala Wisata",
  keyword = "Mitra Cakrawala Wisata",
}) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>{pageTitle} - Mitra Cakrawala Wisata</title>
    </Head>
  );
}
