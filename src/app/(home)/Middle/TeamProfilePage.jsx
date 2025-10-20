// components/TeamProfile.jsx

import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// --- MOCK IMAGE IMPORTS ---
// NOTE: Adjust paths according to your project structure.
import sabinProfile from "../../../../public/img/gallary/1.png"; // Replace with your path
import collageImage from "../../../../public/img/gallary/1.png"; // Replace with your path

// Define data for the profile
const profileData = {
  name: "Sabin Adhikari",
  title: "CEO of Aayu Malung",
  company: "Aayu Malung Pvt. Ltd.",
  bio: "The visionary CEO of Aayu Malung Pvt. Ltd. leads with a strong passion for innovation, sustainability, and community-driven growth. Under his leadership, Aayu Malung continues to push boundaries, blending modern ideas with ethical practices to create meaningful impact. With a forward-thinking approach and a deep commitment to excellence.",
  socials: [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ]
};

// Define the assumed primary color from your design (the blue line)
// This should match a color defined in your tailwind.config.js, or use inline styles.
const primaryColor = '#4F46E5'; // Example Indigo-600

export default function TeamProfile() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          {/* Blue Underline Style */}
          <div className="w-16 h-1 bg-indigo-600 mb-2" style={{ backgroundColor: primaryColor }}></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Faces Behind our success
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            We work closely with our clients to understand their vision and deliver unique and tailored solution. Together, we will create captivating experience
          </p>
        </div>

        {/* Profile Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Text and Bio */}
          <div className="order-2 lg:order-1">
            
            {/* Profile Picture (for smaller screens - hidden on large screens) */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto lg:mx-0">
                  <Image 
                    src={sabinProfile}
                    alt={profileData.name}
               
                    height={300}
                    width={300}
                 
                  />
            </div>
            
            {/* Name and Title */}
            <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-center lg:text-left">
              {profileData.name}
            </h3>
            <p className="text-xl text-gray-700 mb-4 font-light text-center lg:text-left">
              {profileData.title}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mb-6 justify-center lg:justify-start">
              {profileData.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Biography */}
            <p className="text-gray-700 leading-relaxed text-center lg:text-left max-w-md lg:max-w-none mx-auto lg:mx-0">
              {profileData.bio}
            </p>
          </div>

          {/* Right Column: Profile Image & Collage */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            
            <div className="flex w-full justify-center">
                {/* Individual Profile Image (Hidden on small screens, shown next to text on large screens) */}
        
                
                {/* Team Collage Image (This section is the dynamic image part) */}
                <div className="relative w-full min-w-[200px] max-w-[200px] h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden ">
                    <Image
                        src={collageImage}
                        alt="Team members collage"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                    
                </div>
                   <div className="relative w-full max-w-[100px] h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden ">
                    <Image
                        src={collageImage}
                        alt="Team members collage"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                    
                </div>
                    <div className="relative w-full max-w-[100px] h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden ">
                    <Image
                        src={collageImage}
                        alt="Team members collage"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                    
                </div>
                    <div className="relative w-full max-w-[100px] h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden ">
                    <Image
                        src={collageImage}
                        alt="Team members collage"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                    
                </div>
                    <div className="relative w-full max-w-[100px] h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden ">
                    <Image
                        src={collageImage}
                        alt="Team members collage"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}