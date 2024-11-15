"use client";
import { useEffect } from "react";

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
  return <div>hello world</div>;
}
