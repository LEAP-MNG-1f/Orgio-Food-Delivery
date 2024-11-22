import { Arrow, Star } from "../../../../public/Icons/Icons";
import { DiscountCard } from "../discount-card/DiscountCard";

export const DiscountSale = () => {
  return (
    <div className="container max-w-[1440px] h-auto flex flex-col gap-6 m-auto">
      <div className="w-full h-auto flex justify-between items-center py-4">
        <div className="flex gap-2">
          <Star />
          <p className="text-black text-[22px] font-bold">Хямдралтай</p>
        </div>
        <button className="flex justify-center items-center gap-2">
          <p className="text-[#18BA51] text-sm font-normal">
            Бүгдийг харах
          </p>
          <Arrow />
        </button>
      </div>
      <div className="flex gap-6">
        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
      </div>
    </div>
  );
};
