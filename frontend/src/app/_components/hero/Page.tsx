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
        <div className="flex flex-col">
          <div className="w-[384px] h-auto flex flex-col justify-start gap-[23px]">
            <div className="w-full h-auto text-white text-[55px] font-semibold text-wrap">
              Pinecone <br />Food delivery
            </div>
            <div className="w-full h-auto border-whiteb border border-1"></div>
            <div className="w-full h-auto text-white text-[22px] font-bold text-wrap">
              Хүссэн хоолоо захиалаад идээрэй.
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"./Icons/image13.svg"})`,
              width: "443px",
              height: "438px",
            }}
            className="absolute left-[732px] top-[175px]"
          ></div>
          <div
            style={{
              backgroundImage: `url(${"./Icons/image14.svg"})`,
              width: "313px",
              height: "313px",
            }}
            className="absolute left-[1007px] top-[288px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
