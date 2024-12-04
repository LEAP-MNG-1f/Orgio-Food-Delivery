const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"./Icons/BackgroundVector.svg"})`,
      }}
      className="w-full h-auto m-auto flex justify-center items-center bg-[#18BA51] 
      }}"
    >
      <div className="container max-w-[1440px] h-[788px] m-auto flex justify-start items-center px-[120px]">
        <div className="w-full flex justify-between items-center">
          <div className="w-[384px] h-auto flex flex-col justify-center items-center  gap-[23px]">
            <div className="w-full flex flex-col">
              <div className="w-full h-auto text-white text-[55px] font-semibold text-wrap">
                Pinecone <br />
                Food delivery
              </div>
            </div>
            <div className="w-full h-auto border-whiteb border border-1"></div>
            <div className="w-full h-auto text-white text-[22px] font-bold text-wrap">
              Хүссэн хоолоо захиалаад идээрэй.
            </div>
          </div>
          <div className="w-[588px] h-[438px] flex justify-between items-center">
            <img src="./Group534.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
