import HomePage from "@/app/(pages)/homepage/page";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";

const Landing = () => {
  return (
    <div className="bg-white">
      <Header/>
      <HomePage />
      <Footer />
    </div>
  );
};

export default Landing;
