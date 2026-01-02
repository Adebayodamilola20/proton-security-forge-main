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
import img2377 from "@/assets/IMG_2377.jpg";
import img2111 from "@/assets/Screenshot 2025-10-15 at 09.39.26.png";
import img2112 from "@/assets/Screenshot 2025-10-15 at 09.50.25.png";
import img3322 from "@/assets/Screenshot 2025-10-21 at 11.43.16.png";
import img3303 from "@/assets/amoug.jpg";
import img4555 from "@/assets/new.png";

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
    name: "Prince Adekunmi Odebunmi",
    title: "Managing Director",
    bio: "He is a seasoned professional with an extensive career spanning the public and private sectors, marked by excellence, integrity, and impact He commenced his professional journey in 1996 with a distinguished enlistment into the Nigerian Air Force, where he served honorably for a decade. During his meritorious service, he participated in several national campaigns, earning recognition for his dedication and commitment to the nation. Upon his transition to the private sector, Prince Odebunmi began his career with in an Enterprise Security Risks Solutions Organization as an Operations Officer. His outstanding performance soon propelled him into greater responsibilities, leading him to join General Electrics as Security Manager for the General Electric Aero Energy Project in Obajana, Kogi State. Subsequently, he worked with Control Risks, a London-based Risk Mitigation firm, as Team Lead for Security Operations on a Schlumberger project in Port Harcourt. In 2010, he came back to the Halogen Group as Regional Manager for the South-South and South-East regions, where he spearheaded significant business growth, strengthened operational stability, and positioned the company ahead of competition in those regions. His success led to his appointment as Head of Lagos and Western Regional Business Operations, where he further distinguished himself in business growth, client satisfaction, and operational excellence. Prince Odebunmi played a pivotal role in driving the digitization program of Halogen Group’s Physical Security and Mobility Division. His exceptional contributions and leadership capacity earned him steady career advancement, culminating in his appointment as General Manager of Halogen Group.",
    achievements: [
      "Former General Manager ,Physical Security & Mobility Division at Halogen Group",
      "Over 20 years of leadership in security risk management and operations across Africa",
      "Expert in digital transformation and security systems modernization",
      "Executive Director (Operations & Business Development) at Arksego Nigeria Limited",
      "Alumnus of Lagos Business School, Senior Management Program (SMP 46)"
    ],
    images: [img4555, img2179, img2180],
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
    bio: "Dr. Olumide Olayinka is a seasoned legal practitioner with over thirty-two years of experience, having been called to the Nigerian Bar in 1992. A graduate of the Ogun State University, he obtained both the Master of Industrial and Labour Relations (MILR) and Master of Laws (LLM) degrees from the University of Lagos. Further, he earned a PhD in Law from the Leeds Beckett University, Leeds, United Kingdom. He was at various times, inter alia, Senior State Counsel in the Ministry of Justice, Ogun State; as well as General Counsel, at the Troyka Group in Lagos State.",
    achievements: [
    ],
    images: [img3303],
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
    id: "jennifer-brown",
    name: "Kayode Feilx Bamgbose",
    title: "Operational Manager La",
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
 

];