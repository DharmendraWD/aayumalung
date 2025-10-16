import Image from "next/image";
import Home1 from "./(home)/Home";
import Navbar from "@/components/Header/Navbar/Navbar";
import ClientCarousel from "@/components/Misc/ClientCarousel";
import MajorProjects from "./(home)/MajorProjects";
import AmazingServices from "./(home)/AmazingServicesSection";
import Process from "./(home)/Middle/Process";
import Mission from "./(home)/Middle/Mission";
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
   </>
  );
}
