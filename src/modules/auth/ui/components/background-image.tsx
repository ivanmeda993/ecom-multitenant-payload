import Image from "next/image";

export const BackgroundImage = () => {
  return (
    <div className="relative h-screen w-full lg:col-span-2 hidden lg:block">
      <Image
        src="/auth-bg.png"
        alt="Authentication background"
        fill
        className="pointer-events-none object-contain object-center"
        priority
        sizes="(min-width: 1024px) 40vw, 100vw"
      />
    </div>
  );
};
