// Import only the images that actually exist in your assets folder
import img2171 from "@/assets/IMG_2172 2.jpg";
import img2172 from "@/assets/IMG_2174 2.jpg";
import img2174 from "@/assets/IMG_2174 2.jpg";
import img2175 from "@/assets/IMG_2175 2.jpg";
import imag2176 from "@/assets/IMG_2176 2.jpg";
import img2178 from "@/assets/IMG_2178 2.jpg";
import img2179 from "@/assets/IMG_2179.jpg";
import img2180 from "@/assets/IMG_2180.jpg";
import img2181 from "@/assets/IMG_2181.jpg";
import img2182 from "@/assets/IMG_2182.jpg";
import img2183 from "@/assets/IMG_2183.jpg";
import img2185 from "@/assets/IMG_2185.jpg";
import img2186 from "@/assets/IMG_2186.jpg";
import img2187 from "@/assets/IMG_2187.jpg";
import img2188 from "@/assets/IMG_2188.jpg";
import img2189 from "@/assets/IMG_2189.jpg";
import img2190 from "@/assets/IMG_2190.jpg";
import img2195 from "@/assets/IMG_2195.jpg";
import img2196 from "@/assets/IMG_2196.jpg";
import img2197 from "@/assets/IMG_2197.jpg";
import img2198 from "@/assets/IMG_2198.jpg";
import img2206 from "@/assets/IMG_2206.jpg";
import img2205 from "@/assets/IMG_2205.jpg";
import img2192 from "@/assets/IMG_2192.jpg";
import img2193 from "@/assets/IMG_2193.jpg";




export interface Director {
  id: string;
  name: string;
  title: string;
  bio: string;
  achievements: string[];
  images: string[];
  social: {
    tiktok?: string;
    instagram?: string;
    facebook?: string;
  };
}

export const directors: Director[] = [
  {
    id: "john-smith",
    name: "Olabisi familusi ",
    title: "Director of business and sales development",
    bio: "John Smith brings over 25 years of experience in international security operations and strategic management. He has led security transformations for Fortune 500 companies and government agencies across three continents. His expertise spans crisis management, risk assessment, and organizational security architecture.",
    achievements: [
      "Former Director of Security Operations at Global SecureTech",
      "Led security operations for 50+ multinational corporations",
      "Certified Security Management Professional (CSMP)",
      "Published author on modern security frameworks",
      "Master's in Strategic Security Studies from Georgetown University"
    ],
    images: [img2174, img2172, img2171],
    social: {
      tiktok: "https://tiktok.com/@johnsmith",
      instagram: "https://instagram.com/johnsmith",
      facebook: "https://facebook.com/johnsmith"
    }
  },
  {
    id: "sarah-john",
    name: "Emmanuel Ogon",
    title: "Manager of secured logistics department",
    bio: "Emmanuel Ogon is a renowned security training specialist with expertise in developing comprehensive security programs. With a background in military tactical training and corporate security education, she has trained over 10,000 security professionals worldwide.",
    achievements: [
      "Former Military Tactical Instructor - 15 years",
      "Developed award-winning security training curriculum",
      "Certified Protection Professional (CPP)",
      "International Security Training Expert",
      "Ph.D. in Security Education and Training Methods"
    ],
    images: [img2175, imag2176],
    social: {
      instagram: "https://instagram.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson"
    }
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Chief Technology Officer",
    bio: "Michael Chen specializes in security technology integration and cybersecurity solutions. His innovative approach combines traditional security measures with cutting-edge technology to create comprehensive protection systems.",
    achievements: [
      "15+ years in security technology development",
      "Led implementation of AI-powered security systems",
      "Certified Information Systems Security Professional (CISSP)",
      "Speaker at Global Security Technology Conferences",
      "Master's in Cybersecurity and Information Assurance"
    ],
    images: [img2178, img2179, img2180],
    social: {
      tiktok: "https://tiktok.com/@michaelchen",
      instagram: "https://instagram.com/michaelchen"
    }
  },
  {
    id: "amanda-williams",
    name: "Amanda Williams",
    title: "Director of Operations",
    bio: "Amanda Williams excels in operational efficiency and security logistics. Her strategic planning and resource management skills ensure seamless execution of security operations across multiple sectors.",
    achievements: [
      "20 years in security operations management",
      "Optimized security operations for 100+ organizations",
      "Certified Security Operations Manager",
      "Expert in crisis response and emergency management",
      "MBA in Operations and Strategic Management"
    ],
    images: [img2181, img2182, img2183],
    social: {
      facebook: "https://facebook.com/amandawilliams",
      instagram: "https://instagram.com/amandawilliams"
    }
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    title: "Head of International Relations",
    bio: "David Martinez manages Proton Security's global partnerships and international security operations. His extensive network and cultural expertise facilitate security solutions across diverse international markets.",
    achievements: [
      "Former International Security Consultant",
      "Established partnerships in 40+ countries",
      "Fluent in 5 languages",
      "Expert in international security protocols",
      "Master's in International Relations and Security Studies"
    ],
    images: [img2185, img2186, img2187],
    social: {
      tiktok: "https://tiktok.com/@davidmartinez"
    }
  },
  {
    id: "jennifer-brown",
    name: "Jennifer Brown",
    title: "Director of Risk Assessment",
    bio: "Jennifer Brown leads Proton Security's risk analysis and threat assessment division. Her analytical expertise helps organizations identify vulnerabilities and implement proactive security measures.",
    achievements: [
      "18 years in security risk management",
      "Conducted risk assessments for Fortune 100 companies",
      "Certified Risk Management Professional",
      "Published researcher on security threat analysis",
      "Ph.D. in Risk Management and Security Analytics"
    ],
    images: [img2188, img2189,
       img2190,
    ],
    social: {
      instagram: "https://instagram.com/jenniferbrown",
      facebook: "https://facebook.com/jenniferbrown"
    }
  },
  {
    id: "robert-garcia",
    name: "John Chinwendu",
    title: "Head of training",
    bio: "Robert Garcia provides expert consultation on complex security challenges. His hands-on experience in both public and private sector security makes him a trusted advisor for high-stakes security operations.",
    achievements: [
      "Former Federal Security Agent - 12 years",
      "Security consultant for major corporations and governments",
      "Specialist in executive protection and VIP security",
      "Certified Protection Professional (CPP)",
      "Master's in Criminal Justice and Security Management"
    ],
    images: [img2195, img2196,],
    social: {
      facebook: "https://facebook.com/robertgarcia"
    }
  },
  {
    id: "lisa-anderson",
    name: "Kolawole Adeyeba",
    title: "General Maneger of Operations",
    bio: "Lisa Anderson ensures exceptional client satisfaction and manages key account relationships. Her client-centric approach has helped Proton Security build long-term partnerships with leading organizations.",
    achievements: [
      "15+ years in client relationship management",
      "Achieved 98% client retention rate",
      "Expert in custom security solutions",
      "Award-winning customer service leader",
      "MBA in Business Administration and Client Management"
    ],
    images: [img2197, img2198],
    social: {
      instagram: "https://instagram.com/lisaanderson",
      tiktok: "https://tiktok.com/@lisaanderson"
    }
  },
  {
    id: "MR ADEBAYO DAMILOAL",
    name: "ADEBAYODAMILOLA",
    title: "General Maneger of Operations",
    bio: "Lisa Anderson ensures exceptional client satisfaction and manages key account relationships. Her client-centric approach has helped Proton Security build long-term partnerships with leading organizations.",
    achievements: [
      "15+ years in client relationship management",
      "Achieved 98% client retention rate",
      "Expert in custom security solutions",
      "Award-winning customer service leader",
      "MBA in Business Administration and Client Management"
    ],
    images: [img2205, img2206],
    social: {
      instagram: "https://instagram.com/lisaanderson",
      tiktok: "https://tiktok.com/@lisaanderson"
    }
  },
  {
    id: "MR ADEBAYO DAMILOAL",
    name: "ADEBAYODAMILOLA",
    title: "General Maneger of Operations",
    bio: "Lisa Anderson ensures exceptional client satisfaction and manages key account relationships. Her client-centric approach has helped Proton Security build long-term partnerships with leading organizations.",
    achievements: [
      "15+ years in client relationship management",
      "Achieved 98% client retention rate",
      "Expert in custom security solutions",
      "Award-winning customer service leader",
      "MBA in Business Administration and Client Management"
    ],
    images: [img2192, img2193],
    social: {
      instagram: "https://instagram.com/lisaanderson",
      tiktok: "https://tiktok.com/@lisaanderson"
    }
  }
];