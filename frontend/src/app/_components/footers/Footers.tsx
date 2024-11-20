import { PineconeLogoWhite } from "../svg/PineconeLogoWhite";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footers = () => {
  return (
    <div className="bg-[#18BA51] w-full h-auto flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center px-28 py-32 gap-10">
        <div className="flex justify-center items-center gap-2">
          <PineconeLogoWhite />
          <div className="text-xl font-bold text-white">Food Delivery</div>
        </div>
        <div className="w-full h-auto flex justify-between items-center">
          <button className="text-white font-semibold underline decoration-solid">
            Нүүр
          </button>
          <button className="text-white font-semibold underline decoration-solid">
            Холбоо барих
          </button>
          <button className="text-white font-semibold underline decoration-solid">
            Хоолны цэс
          </button>
          <button className="text-white font-semibold underline decoration-solid">
            Үйлчилгээний нөхцөл
          </button>
          <button className="text-white font-semibold underline decoration-solid">
            Хүргэлтийн бүс
          </button>
          <button className="text-white font-semibold underline decoration-solid">
            Нууцлалын бодлого
          </button>
        </div>
        <div className="flex justify-center items-center gap-[18px]">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        <div className="w-full h-auto flex border-white border"></div>
        <div className="w-auto h-auto flex flex-col gap-2">
          <p className="flex justify-center items-center text-white text-base font-normal">
            © 2024 Pinecone Foods LLC
          </p>
          <p className="flex justify-center items-center text-white text-base font-normal">
            {" "}
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </div>
  );
};
