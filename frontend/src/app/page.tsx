"use client";
import { useEffect } from "react";
import { Headers } from "./_components/headers/Headers";

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
    <div>
      <Headers />
    </div>
  );
}
