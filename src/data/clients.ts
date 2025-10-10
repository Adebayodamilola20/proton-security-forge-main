
export interface Client {
  id: string;
  name: string;
  logo: string;
}

export const clients: Client[] = [
  {
    id: "mtn",
    name: "MTN",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    id: "fcmb",
    name: "FCMB",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
  },
  {
    id: "multichoice",
    name: "Multichoice",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop"
  },
  {
    id: "chevron",
    name: "Chevron",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    id: "shell",
    name: "Shell",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
  },
  {
    id: "coca-cola",
    name: "Coca Cola",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop"
  },
  {
    id: "nestle",
    name: "Nestlé",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    id: "unilever",
    name: "Unilever",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop"
  },
  {
    id: "google",
    name: "Google",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    company: "MTN Nigeria",
    role: "Chief Security Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Proton Security has transformed our security operations. Their professionalism and expertise are unmatched. We've seen a 95% reduction in security incidents since partnering with them."
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "Multichoice Group",
    role: "VP of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    quote: "The training programs provided by Proton Security are world-class. Our security team is now better prepared and more confident in handling any situation. Highly recommended!"
  },
  {
    id: 3,
    name: "David Okonkwo",
    company: "FCMB",
    role: "Head of Corporate Security",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote: "Outstanding service delivery! Proton Security's comprehensive approach to security management has given us peace of mind. Their 24/7 monitoring is exceptional."
  }
];
import logo1 from "@/assets/Screenshot 2025-10-09 at 17.25.12.png";
import logo2 from "@/assets/Screenshot 2025-10-09 at 17.36.32.png";
import logo3 from "@/assets/Screenshot 2025-10-09 at 17.50.42.png";
import logo4 from "@/assets/Screenshot 2025-10-09 at 18.00.07.png";
import logo5 from "@/assets/Screenshot 2025-10-10 at 09.16.11.png";
import logo6 from "@/assets/Screenshot 2025-10-10 at 09.18.53.png";
import logo7 from "@/assets/Screenshot 2025-10-10 at 09.20.46.png";
import logo8 from "@/assets/Screenshot 2025-10-10 at 09.23.23.png";
import logo9 from "@/assets/Screenshot 2025-10-10 at 09.26.10.png";
import logo10 from "@/assets/Screenshot 2025-10-10 at 09.37.48.png";
import logo11 from "@/assets/Screenshot 2025-10-10 at 09.30.20.png";
import logo12 from "@/assets/Screenshot 2025-10-10 at 09.32.15.png";

export interface ClientLogo {
  id: string;
  image: string; // Imported image
  alt: string;
  name: string;  // For accessibility/screen readers
}
export const clientLogos: ClientLogo[] = [
  {
    id: "1",
    image: logo1,  // Replace with import, e.g., clientLogo1
    alt: "Acme Corp Logo",
    name: "Acme Corp"
  },
  {
    id: "2",
    image: logo2,  // Replace
    alt: "TechSecure Logo",
    name: "TechSecure"
  },
  {
    id: "3",
    image: logo3,  // Replace
    alt: "Global Bank Logo",
    name: "Global Bank"
  },
  {
    id: "4",
    image: logo4,  // Replace
    alt: "EventPro Logo",
    name: "EventPro"
  },
  {
    id: "5",
    image: logo5,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "6",
    image: logo6,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "5",
    image: logo7,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "5",
    image: logo8,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "5",
    image: logo9,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "5",
    image: logo10,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "5",
    image: logo11,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },
  {
    id: "5",
    image: logo12,  // Replace
    alt: "MedHealth Logo",
    name: "MedHealth"
  },

]