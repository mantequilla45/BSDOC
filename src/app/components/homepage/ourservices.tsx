import Image from 'next/image';

const OurServicesSection = () => {
    return (
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#89DAF3] flex items-center flex-col px-[15%] py-[5%] pb-[15%]">
        <h2 className="text-5xl font-bold text-[#043CAA]">
          Our Services
        </h2>
        <div className="flex flex-row gap-[50px] mt-[60px]">
          <div className="flex flex-col items-center gap-[60px] w-1/3 bg-white rounded-[30px] px-[50px] py-[70px] shadow-md">
            <div className="w-[300px] h-[300px]">
              <Image
                src="/graphics/symptom-checker-icon.svg"
                alt="icon 1"
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
                quality={100}
              />
            </div>
            <div className="flex flex-col text-xl text-black items-center">
              <h3 className="text-xl text-[#043CAA] font-semibold">Symptom Checker</h3>
              <p className="text-base mt-3 text-justify">
                Input your symptoms to find the right cure, view search results filtered according to your symptoms, and access visual aids with explanations to better understand your condition.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[60px] w-1/3 bg-white rounded-[30px] px-[50px] py-[70px] shadow-md">
            <div className="w-[300px] h-[300px]">
              <Image
                src="/graphics/otc-guide-icon.svg"
                alt="icon 2"
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
                quality={100}
              />
            </div>
            <div className="flex flex-col text-xl text-black items-center">
              <h3 className="text-xl text-[#043CAA] font-semibold">OTC Medication Guidance</h3>
              <p className="text-base mt-3 text-justify">
                Find the right over-the-counter medications based on your symptoms, access detailed information on their uses, dosages, and precautions, and stay informed about potential drug interactions and contraindications.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[60px] w-1/3 bg-white rounded-[30px] px-[50px] py-[70px] shadow-md">
            <div className="w-[300px] h-[300px]">
              <Image
                src="/graphics/personal-ht-icon.svg"
                alt="icon 1"
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
                quality={100}
              />
            </div>

            <div className="flex flex-col text-xl text-black items-center">
              <h3 className="text-xl text-[#043CAA] font-semibold">Personalized Health Tips</h3>
              <p className="text-base mt-3 text-justify">
                Receive personalized health and wellness tips based on your profile and symptom history, save and track your health data over time, and get email or SMS notifications for self-care reminders.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurServicesSection;