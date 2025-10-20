import Image from "next/image";
import Home1 from "./(home)/Home";
import Navbar from "@/components/Header/Navbar/Navbar";
import ClientCarousel from "@/components/Misc/ClientCarousel";
import MajorProjects from "./(home)/MajorProjects";
import AmazingServices from "./(home)/AmazingServicesSection";
import Process from "./(home)/Middle/Process";
import Mission from "./(home)/Middle/Mission";
import TestimonialSlider from "@/components/Misc/Sliders/TestimonialSlider";
import ClientMapSection from "./(home)/Middle/MapContainer";
import CustomGallery from "@/components/Misc/Gallary/CustomGallery";
import TeamProfile from "./(home)/Middle/TeamProfilePage";
import ContactForm from "./(home)/Middle/ContactForm";
import FAQSection from "@/components/Misc/Faq/FAQSection";
import FooterHero from "./(home)/FooterHero";
import Footer from "@/components/Misc/Footer/Footer";
export default function Home() {
  return (
   <>
   <Navbar></Navbar>
  <Home1></Home1>
<ClientCarousel></ClientCarousel>
<MajorProjects></MajorProjects>
<AmazingServices></AmazingServices>
<Process></Process>
<Mission></Mission>
<TestimonialSlider></TestimonialSlider>
<ClientMapSection></ClientMapSection>
<CustomGallery />
<TeamProfile></TeamProfile>
<ContactForm></ContactForm>
<FAQSection></FAQSection>
<FooterHero></FooterHero>
<Footer></Footer>
   </>
  );
}
