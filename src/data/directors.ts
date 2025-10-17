// Import only the images that actually exist in your assets folder
import img2171 from "@/assets/IMG_2172 2.jpg";
import img2172 from "@/assets/IMG_2174 2.jpg";
import img2174 from "@/assets/IMG_2174 2.jpg";
import img2175 from "@/assets/IMG_2175 2.jpg"
import imag2176 from "@/assets/IMG_2176 2.jpg";
import img2178 from "@/assets/IMG_2178 2.jpg";
import img2179 from "@/assets/IMG_2179.jpg";
import img2180 from "@/assets/IMG_2180.jpg";
import img2181 from "@/assets/IMG_2181 2.jpg";
import img2182 from "@/assets/IMG_2182.jpg";
import img2183 from "@/assets/IMG_2183.jpg";
import img2185 from "@/assets/IMG_2185.jpg";
import img2186 from "@/assets/IMG_2186.jpg";
import img2187 from "@/assets/IMG_2187.jpg";
import img2188 from "@/assets/IMG_2188 2.jpg";
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
import img2291 from "@/assets/Screenshot 2025-10-15 at 07.10.50.png";
import img2199 from "@/assets/Screenshot 2025-10-15 at 07.11.35.png";
import img2377 from  "@/assets/IMG_2377.jpg";
import img2111 from "@/assets/Screenshot 2025-10-15 at 09.39.26.png";
import img2112 from "@/assets/Screenshot 2025-10-15 at 09.50.25.png";




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
    name: "Adekunmi Oluwakayode Odebunmi",
    title: "Managing Director",
    bio: "I began my private work experience in the fastest growing Security Risk Mitigation Organization, Halogen Security Company as an Operations Officer and later went to join a multinational Organization, General Electrics as Security Manager for the GE Aero Energy Project, at Obajana. From there I worked for a London based Risk Mitigation Company, Control Risks on a Schlumberger project in PortHarcourt as a Team Lead for the PHC Operations. ",
    achievements: [
      "Former General Manager ,Physical Security & Mobility Division at Halogen Group",
      "Over 20 years of leadership in security risk management and operations across Africa",
      "Expert in digital transformation and security systems modernization",
      "Executive Director (Operations & Business Development) at Arksego Nigeria Limited",
      "Alumnus of Lagos Business School, Senior Management Program (SMP 46)"
    ],
    images: [img2178, img2179, img2180],
    social: {
      tiktok: "https://tiktok.com/@johnsmith",
      instagram: "https://instagram.com/johnsmith",
      facebook: "https://facebook.com/johnsmith"
    }
  },
  {
    id: "sarah-john",
    name: "Olumide Olayinka",
    title: "Director for Admin,Finance and Quaility Control",
    bio: "Emmanuel Ogon is a renowned security training specialist with expertise in developing comprehensive security programs. With a background in military tactical training and corporate security education, she has trained over 10,000 security professionals worldwide.",
    achievements: [
      "Former Military Tactical Instructor - 15 years",
      "Developed award-winning security training curriculum",
      "Certified Protection Professional (CPP)",
      "International Security Training Expert",
      "Ph.D. in Security Education and Training Methods"
    ],
    images: [],
    social: {
      instagram: "https://instagram.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson"
    }
  },
  {
    id: "michael-chen",
    name: "Olabisi Familusi",
    title: "Director Business Development and Strategy",
    bio: "A dynamic, results-driven, and innovative business strategist with nearly 18 years of progressive experience in Sales, Marketing, and Revenue Optimization. Recognized for driving sustainable growth, improving brand visibility, and developing high-performing teams across diverse markets and industries.",
    achievements: [
      "Drove 40% regional revenue growth through strategic business expansion.",
      "Built and maintained high-value relationships with multinational clients.",
      "Led digital transformation initiatives improving operational efficiency.",
      "Directed cross-functional teams to exceed performance targets.",
      "Launched new services that boosted market visibility and client retention."
    ],
    images: [img2174, img2172, img2171],
    social: {
      tiktok: "https://tiktok.com/@michaelchen",
      instagram: "https://instagram.com/michaelchen"
    }
  },
  {
    id: "Kolawole Adeyeba",
    name: "Kolawole Adeyeba",
    title: "Director of Operations",
    bio: "Kolawole Adeyeba is a seasoned security operations and business management professional with a proven track record in strategic leadership, risk mitigation, and operational excellence. He has successfully led large-scale security projects, driving performance, innovation, and client satisfaction across diverse industries.",
    achievements: [
      "Over 8 years of experience in security management and operations",
      "Spearheaded regional business growth and operational expansion across Nigeria",
      "Expert in security digitization and modern risk management strategies",
      "Proven leader in client relations and high-performance team development",
      "Alumnus of Lagos Business School (Senior Management Program – SMP 46)"
    ],
    images: [img2197, img2198,],
    social: {
      facebook: "https://facebook.com/amandawilliams",
      instagram: "https://instagram.com/amandawilliams"
    }
  },
  {
    id: "david-martinez",
    name: "Babatunde Ikotun",
    title: "Finance Manager",
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
    name: "Kayode Feilx Bamgbose",
    title: "Operational Manager",
    bio: "Jennifer Brown leads Proton Security's risk analysis and threat assessment division. Her analytical expertise helps organizations identify vulnerabilities and implement proactive security measures.",
    achievements: [
      "18 years in security risk management",
      "Conducted risk assessments for Fortune 100 companies",
      "Certified Risk Management Professional",
      "Published researcher on security threat analysis",
      "Ph.D. in Risk Management and Security Analytics"
    ],
    images: [img2192, img2193
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
    name: "Gloria Okezie",
    title: "General Maneger of Operations",
    bio: "Lisa Anderson ensures exceptional client satisfaction and manages key account relationships. Her client-centric approach has helped Proton Security build long-term partnerships with leading organizations.",
    achievements: [
      "15+ years in client Sales lead management",
      "Achieved 98% client retention rate",
      "Expert in custom security solutions",
      "Award-winning customer service leader",
      "MBA in Business Administration and Client Management"
    ],
    images: [img2377, img2199],
    social: {
      instagram: "https://instagram.com/lisaanderson",
      tiktok: "https://tiktok.com/@lisaanderson"
    }
  },
  {
    id: "MR ADEBAYO DAMILOAL",
    name: "Idowu Ajagunna",
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
    id: "mr ogon",
    name: "Emmanuel Ogon",
    title: "Head GIG Logistics",
    bio: "Lisa Anderson ensures exceptional client satisfaction and manages key account relationships. Her client-centric approach has helped Proton Security build long-term partnerships with leading organizations.",
    achievements: [
      "15+ years in client relationship management",
      "Achieved 98% client retention rate",
      "Expert in custom security solutions",
      "Award-winning customer service leader",
      "MBA in Business Administration and Client Management"
    ],
    images: [img2175, imag2176],
    social: {
      instagram: "https://instagram.com/lisaanderson",
      tiktok: "https://tiktok.com/@lisaanderson"
    }
  },
   {
    id: "mr teslim",
    name: "TESLIM OKUNOLA",
    title: "Head of Technical",
    bio: "Lisa Anderson ensures exceptional client satisfaction and manages key account relationships. Her client-centric approach has helped Proton Security build long-term partnerships with leading organizations.",
    achievements: [
      "15+ years in client relationship management",
      "Achieved 98% client retention rate",
      "Expert in custom security solutions",
      "Award-winning customer service leader",
      "MBA in Business Administration and Client Management"
    ],
    images: [img2111, img2112],
    social: {
      instagram: "https://instagram.com/lisaanderson",
      tiktok: "https://tiktok.com/@lisaanderson"
    }
  },
  
];