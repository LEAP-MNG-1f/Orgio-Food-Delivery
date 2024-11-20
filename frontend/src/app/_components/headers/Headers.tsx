import { BasketIcon } from "../svg/BasketIcon";
import { LoginIcon } from "../svg/LoginIcon";
import { PineconeLogo } from "../svg/PineconeLogo";
import { SearchIcon } from "../svg/SearchIcon";

export const Headers = () => {
  return (
    <div className="bg-white contianer w-full h-auto flex justify-center items-center pl-6 pr-6 pb-2 pt-2">
      <div className="container flex justify-center items-center gap-8">
        <PineconeLogo />
        <div className="flex gap-2">
          <div className="px-4 py-2 text-[#18BA51] font-base font-bold">
            НҮҮР
          </div>
          <div className="px-4 py-2 font-base font-bold">ХООЛНЫ ЦЭС</div>
          <div className="px-4 py-2 font-base font-bold">ХҮРГЭЛТИЙН БҮС</div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-auto gap-2">
        <div className="w-[260px] h-[40px] flex gap-2 border rounded-[8px] border-black px-4 py-2">
          <SearchIcon />
          <input
            className="w-full h-auto text-[#8B8E95] font-base font-medium"
            type="search"
            placeholder="Хайх"
          />
        </div>
        <div className="flex w-auto h-auto justify-center items-center gap-2 px-4 py-2">
          <BasketIcon />
          <p className="text-sm font-bold">Сагс</p>
        </div>
        <div className="flex w-auto h-auto justify-center items-center gap-2 px-4 py-2">
          <LoginIcon />
          <p className="text-sm font-bold">Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
};
