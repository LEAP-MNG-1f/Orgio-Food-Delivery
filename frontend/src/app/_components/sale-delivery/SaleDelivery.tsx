import { BookIcon, ClockIcon, CupIcon } from "../../../../public/Icons/Icons";

export const SaleDelivery = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[265px] h-[155px] flex flex-col justify-between items-start border rounded-2xl p-4 shadow-lg">
        <div className="p-[15px]">
          <BookIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#272727] text-lg font-bold self-stretch">
            Хүргэлтийн төлөв хянах
          </p>
          <p className="text-[#272727] text-sm font-normal self-stretch">
            Захиалга бэлтгэлийн явцыг хянах
          </p>
        </div>
      </div>
      <div className="w-[265px] h-[155px] flex flex-col justify-between items-start border rounded-2xl p-4 shadow-lg">
        <div className="p-[15px]">
          <ClockIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#272727] text-lg font-bold self-stretch">
            Шуурхай хүргэлт
          </p>
          <p className="text-[#272727] text-sm font-normal self-stretch">
            Захиалга бэлтгэлийн явцыг хянах
          </p>
        </div>
      </div>
      <div className="w-[265px] h-[155px] flex flex-col justify-between items-start border rounded-2xl p-4 shadow-lg">
        <div className="p-[15px]">
          <CupIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#272727] text-lg font-bold self-stretch">
            Эрүүл, баталгаат орц
          </p>
          <p className="text-[#272727] text-sm font-normal self-stretch">
            Захиалга бэлтгэлийн явцыг хянах
          </p>
        </div>
      </div>
      <div className="w-[265px] h-[155px] flex flex-col justify-between items-start border rounded-2xl p-4 shadow-lg">
        <div className="p-[15px]">
          <BookIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#272727] text-lg font-bold self-stretch">
            Хоолны өргөн сонголт
          </p>
          <p className="text-[#272727] text-sm font-normal self-stretch">
            Захиалга бэлтгэлийн явцыг хянах
          </p>
        </div>
      </div>
    </div>
  );
};
