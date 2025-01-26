import Header from "@/app/components/layout/header";

const AboutUs = () => {
    return (
        <div className="h-[100vh] bg-white">
            <Header />
            <title> About Us</title>
            <div className="flex flex-row h-full items-center">
                <div className="flex flex-col gap-3 w-1/2">
                    <div className="w-[23%]">
                        <h1 className="border-b-[1px] text-2xl text-[#62B6B8]">
                            About us
                        </h1>
                    </div>

                    <h2>
                        Where your Health Meets
                    </h2>
                    <h2 className="text-6xl text-[#62B6B8]">
                        Innovation
                    </h2>
                    <p className="text-base text-[#575454] italic text-justify space-y-3">
                        <p>
                            At BSDOC, our mission is to create innovative solutions that simplify and enhance personal health management. We aim to empower individuals with user-friendly tools to manage their health records and receive personalized suggestions for over-the-counter (OTC) medications. We envision a world where everyone has access to efficient,reliable, and easy-to-use health management platforms,leading to better self-care and improved communication wit healthcare providers.
                        </p>
                        <p>
                            Founded in 2024, VETT began with the development of the BSDOC project.
                            Our initial goal was to create an efficient and user-friendly platform that allows users to input their medical records, document symptoms,
                            and receive suggestions for OTC drugs and dosages based on their selected symptoms. Over time, we have expanded our offerings and improved
                            our platform to better serve our users&apos; needs.
                        </p>
                    </p>
                </div>
                <div className="w-1/2">
                    
                </div>
            </div>
            <div className="absolute right-[-20vh] top-1/3 translate-y-[-50%] h-[1000px] w-[1000px] bg-[#62B6B8] rounded-full"/>
        </div>
    );
}

export default AboutUs;