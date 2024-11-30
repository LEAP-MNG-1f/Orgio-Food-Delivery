"use client";
import { useEffect } from "react";
import Hero from "./_components/hero/Page";
import SaleMeals from "./_components/salemeals/SaleMeals";
import Page from "./delivery-area/page";


export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <Hero />
      <SaleMeals />
      {/* <Page/> */}
    </main>
  );
}
