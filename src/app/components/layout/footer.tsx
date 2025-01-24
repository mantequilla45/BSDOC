import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#04276A] via-[#093181] to-[#0D3A90] py-16 px-[10%] flex flex-col">
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl text-white font-bold">
          Not a common ailment?
        </h3>
        <h3 className="text-5xl text-white font-bold">
          Book a doctor&apos;s appointment!
        </h3>
      </div>
      <div className="font-semibold text-black my-16">
        <a className="py-5 px-[100px] rounded-xl bg-[#ED5050]">
          BOOK
        </a>
      </div>
      <a href="/about-us" className=" my-10">
        About Us
      </a>
      <div className="flex flex-row gap-5 text-white">
        <FaFacebook className="w-[30px] h-[30px]" />
        <FaGithub className="w-[30px] h-[30px]" />
      </div>

      <p className="font-light mt-5">
        Disclaimer: This service is for informational purposes only. Consult a doctor for persistent or worsening symptoms.
      </p>
    </footer>
  );
}

export default Footer;
