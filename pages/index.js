import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Trending from "../components/Trending";
import CMCTable from "../components/cmc-table/CMCTable";
import SwapCryptoModal from "../components/SwapCryptoModal";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Header />
      <SwapCryptoModal />
      <div className=" mt-10" />
      <Trending />
      <div className="mt-20" />
      <CMCTable />
    </div>
  );
}
