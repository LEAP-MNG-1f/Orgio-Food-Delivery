import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  PineconeLogoWhite,
  TwitterIcon,
} from "../../../../public/Icons/Icons";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"./Icons/BackgroundVector.svg"})`,
      }}
      className="bg-[#18BA51] w-full h-auto flex justify-center items-center"
    >
      <div className="container max-w-[1440px] m-auto flex flex-col justify-center items-center px-[120px] py-32 gap-10">
        <div className="flex justify-center items-center gap-2">
          <PineconeLogoWhite />
          <div className="text-xl font-bold text-white">Food Delivery</div>
        </div>
        <div className="w-full h-auto flex justify-between items-center">
          <Link href={"/"} className="text-white font-semibold underline decoration-solid">
            Нүүр
          </Link>
          <button className="text-white font-semibold underline decoration-solid">
            Холбоо барих
          </button>
          <Link href={"/food-menu"} className="text-white font-semibold underline decoration-solid">
            Хоолны цэс
          </Link>
          <Link
            href={"/terms-of-sevice"}
            className="text-white font-semibold underline decoration-solid"
          >
            Үйлчилгээний нөхцөл
          </Link>
          <Link
            href={"/delivery-area"}
            className="text-white font-semibold underline decoration-solid"
          >
            Хүргэлтийн бүс
          </Link>
          <Link
            href={"/privacy-policy"}
            className="text-white font-semibold underline decoration-solid"
          >
            Нууцлалын бодлого
          </Link>
        </div>
        <div className="flex justify-center items-center gap-[18px]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className="w-full h-auto flex border-white border"></div>
        <div className="w-auto h-auto flex flex-col gap-2">
          <p className="flex justify-center items-center text-white text-base font-normal">
            © 2024 Pinecone Foods LLC
          </p>
          <p className="flex justify-center items-center text-white text-base font-normal">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </div>
  );
};
