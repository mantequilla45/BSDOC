import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative min-h-screen px-[15%]">
      {/* Background image with darker overlay */}
      <Image
        src="/Images/background/landing-background.png"
        alt="Landing Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="absolute top-0 left-0"
      />
      {/* Darker overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-0" />
      
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <main className="flex flex-row gap-8 items-center pb-10 border-b-[1px] border-gray-300">
          <div className="flex flex-col w-[60%] gap-[70px]">
            <div className="space-y-6">
              <h1 className="text-7xl font-bold text-white">
                Your Personal Guide to Self-Care for Common Ailments
              </h1>
              <p className="text-xl font-light text-white">
                Take control of your health, save time, and find relief at home with BSDOC.
              </p>
            </div>
            <a className="bg-white/80 rounded-xl py-8 text-black text-xl flex justify-center items-center cursor-pointer text-center hover:bg-white transition-colors transition duration-300">
              FIND A CURE
            </a>
          </div>
          
          {/* Hero section with lighter background */}
          <div className="w-[40%] relative rounded-full bg-white/20 backdrop-blur-lg overflow-hidden flex justify-center border border-gray-500 border-[1px] pt-16">
            <Image
              src="/Images/background/doctor.png"
              alt="Hero"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              className="relative z-20"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;