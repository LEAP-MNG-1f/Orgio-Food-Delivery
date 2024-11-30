"use client";

import { Star } from "../../../public/Icons/Icons";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Page = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek",
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const mapOptions = {
        center: { lat: 47.91996922842304, lng: 106.91756534492119 },
        zoom: 13,
      };

      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new Map(mapRef.current, mapOptions);
      }
    };

    initMap();
  }, []);
  return (
    <div className="w-full h-auto justify-center items-center bg-white">
      <div className="container max-w-[1440px] h-auto flex flex-col m-auto py-[55px] px-[120px] gap-[22px]">
        <div ref={mapRef} className="w-full h-[616px]"></div>
        <div className="w-full h-auto flex justify-start items-center py-4 gap-2">
          <Star />
          <div className="text-[#272727] text-[22px] font-bold">
            Хүргэлтийн бүс дэх хаягууд
          </div>
        </div>
        <div className="w-full h-auto flex justify-between items-center">
          <div className="w-[588px] h-auto flex flex-col p-6 gap-4 rounded-2xl shadow-md">
            <div className="w-full h-auto py-4 border-b border-[#18BA51] text-xl font-semibold">
              А бүс
            </div>
            <div className="flex gap-4">
              <div className="w-[262px] h-auto flex flex-col gap-4">
                <p className="text-base font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-base font-normal leading-normal">3-р байр</p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
              </div>
              <div className="w-[262px] h-auto flex flex-col gap-4">
                <p className="text-base font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-base font-normal leading-normal">3-р байр</p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
              </div>
            </div>
          </div>
          <div className="w-[588px] h-auto flex flex-col p-6 gap-4 rounded-2xl shadow-md">
            <div className="w-full h-auto py-4 border-b border-[#18BA51] text-xl font-semibold">
              Б бүс
            </div>
            <div className="flex gap-4">
              <div className="w-[262px] h-auto flex flex-col gap-4">
                <p className="text-base font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-base font-normal leading-normal">3-р байр</p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
              </div>
              <div className="w-[262px] h-auto flex flex-col gap-4">
                <p className="text-base font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-base font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-base font-normal leading-normal">3-р байр</p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-base font-normal leading-normal">
                  Хоймор хотхон
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
