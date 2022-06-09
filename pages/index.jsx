/* eslint-disable @next/next/no-img-element */
import Header from "../components/Header";
import UnderConstruction from "../components/UnderConstruction";

export default function Home() {
  return (
    <>
      <Header
        pageTitle="Travel Agent"
        description="Travel Partner Agent for Everyone"
        keyword="Travel, Haji, Umrah, Staycation, Holiday"
      />
      <UnderConstruction />
    </>
  );
}
