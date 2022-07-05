import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Webmail() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://ellaria.id.rapidplex.com:2096/");
  }, [router]);
}
