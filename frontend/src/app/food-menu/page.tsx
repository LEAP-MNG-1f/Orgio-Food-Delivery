
import { Menu } from "../_components/menu/Menu";
import { Sale } from "../_components/sale/Sale";

const Page = () => {
  return (
    <div className="w-full h-auto justify-center items-center bg-white">
      <div className="container max-w-[1440px] h-auto flex flex-col gap-[55px] m-auto pb-[120px] px-[120px]">
        <Menu />
        <div className="flex flex-col gap-[80px]">
          <Sale />
          <Sale />
          <Sale />
        </div>
      </div>
    </div>
  );
};

export default Page;
