import Image from "next/image";
import bgImage from "../../../../../public/auth-bg.png";

export const BackgroundImage = () => {
  return (
    <div className="relative h-screen w-full lg:col-span-2  hidden  lg:flex justify-center items-center px-4">
      <Image
        src={bgImage}
        alt="Authentication background"
        className="pointer-events-none object-contain object-center max-h-[50vh]"
        priority
        layout="responsive"
      />
    </div>
  );
};
