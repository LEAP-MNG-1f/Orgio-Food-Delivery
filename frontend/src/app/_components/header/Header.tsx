import Link from "next/link";
import {
  BasketIcon,
  LoginIcon,
  PineconeLogoBlack,
  SearchIcon,
} from "../../../../public/Icons/Icons";

export const Header = () => {
  return (
    <main className="bg-white w-full h-auto z-20 sticky top-0">
      <div className="container max-w-[1440px] m-auto flex justify-between items-center px-[120px]">
        <div className="w-full h-auto flex justify-start items-center gap-8 py-2">
          <PineconeLogoBlack />
          <div className="flex gap-2">
            <Link href={"/"} className="px-4 py-2 font-base font-bold hover:text-[#18BA51] active:text-[#18BA51]">
              НҮҮР
            </Link>
            <Link href={"/food-menu"} className="px-4 py-2 font-base font-bold hover:text-[#18BA51] active:text-[#18BA51]">
              ХООЛНЫ ЦЭС
            </Link>
            <Link href={"/delivery-area"} className="px-4 py-2 font-base font-bold hover:text-[#18BA51] active:text-[#18BA51]">
              ХҮРГЭЛТИЙН БҮС
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center w-full h-auto gap-2 py-2">
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
            {/* <AnchorTemporaryDrawer/> */}
          </div>
          <div className="flex w-auto h-auto justify-center items-center gap-2 px-4 py-2 group-hover:bg-[#18BA51]">
            <LoginIcon />
            <button className="text-black text-sm font-bold">Нэвтрэх</button>
          </div>
        </div>
      </div>
    </main>
  );
};
