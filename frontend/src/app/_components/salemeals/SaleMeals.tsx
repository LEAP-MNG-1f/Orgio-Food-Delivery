import { DiscountSale } from "../discount-sale/DiscountSale";
import { SaleDelivery } from "../sale-delivery/SaleDelivery";
import { Sale } from "../sale/Sale";

const SaleMeals = () => {
  return (
    <div className="w-full h-auto justify-center items-center bg-white">
      <div className="container max-w-[1440px] h-auto flex flex-col gap-[120px] m-auto py-[120px] px-[120px]">
        <SaleDelivery />
        <div className="flex flex-col gap-[80px]">
          <DiscountSale />
          <Sale />
          <Sale />
          <Sale />
          <Sale />
        </div>
      </div>
    </div>
  );
};
export default SaleMeals;
