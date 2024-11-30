export const DiscountCard = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-[14px]">
      <div className="w-[282px] h-[186px] border rounded-2xl shadow-md relative bg-gray-200 bg-[0px_-114.259px] bg-[length:100%_214.845%] bg-no-repeat">
        <div className="w-[70px] h-auto bg-[#18BA51] border border-white rounded-2xl py-1 px-4 absolute left-[197px] top-[16px] z-1">
          <div className="flex justify-center items-center text-white text-lg font-semibold">
            20%
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="text-black text-lg font-semibold">Өглөөний хоол</div>
        <div className="flex gap-4">
          <div className="text-[#18BA51] text-lg font-semibold">14,800₮</div>
          <div className="text-[#272727] text-lg font-normal line-through">
            16,800₮
          </div>
        </div>
      </div>
    </div>
  );
};
