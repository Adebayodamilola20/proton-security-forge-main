import img1 from "@/assets/IMG_2171.jpg";
import img2 from "@/assets/IMG_2228.jpg";
import img3 from "@/assets/IMG_2230.jpg";
import img4 from "@/assets/IMG_2219.jpg";
import img5 from "@/assets/IMG_2223.jpg";
import img6 from "@/assets/IMG_2234.jpg";
import img7 from "@/assets/IMG_2236.jpg";
import img8 from "@/assets/IMG_2221.jpg";
import img9 from "@/assets/IMG_2237.jpg";
import img10 from "@/assets/IMG_2238.jpg";
import img11 from "@/assets/IMG_2239.jpg";
import img12 from "@/assets/IMG_2240.jpg";
import img13 from "@/assets/IMG_2241.jpg";
import img14 from "@/assets/IMG_2243.jpg";
import img15 from "@/assets/IMG_2245.jpg";
import img16 from "@/assets/IMG_2247.jpg";
import img17 from "@/assets/IMG_2251.jpg";
import img18 from "@/assets/IMG_2250.jpg";
import img19 from "@/assets/IMG_2211 2.jpg";
export interface GalleryItem {
  id: string;
  url: string;  // This will now be your local image import (string URL)
  title: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    url: img19,  // Local: IMG_2172 2.jpg
    title: "Security Training Exercise",
    category: "Training",
  },
  {
    id: "2",
    url: img3,  // Local: IMG_2174 2.jpg
    title: "Corporate Security Team",
    category: "Operations"
  },
  {
    id: "3",
    url: img4,  // Local: IMG_2175 2.jpg
    title: "Security Control Room",
    category: "Technology"
  },
  {
    id: "4",
    url: img5,  // Local: IMG_2175 2.jpg (adjust if duplicate)
    title: "Tactical Response Training",
    category: "Training"
  },
  {
    id: "5",
    url: img6,  // Local: IMG_2176 2.jpg
    title: "Executive Protection Detail",
    category: "VIP Security"
  },
  {
    id: "6",
    url: img7,  // Local: IMG_2178 2.jpg
    title: "Event Security Management",
    category: "Events"
  },
  {
    id: "7",
    url: img8,  // Local: IMG_2179.jpg
    title: "Security Assessment",
    category: "Consulting"
  },
  {
    id: "8",
    url: img9,  // Local: IMG_2180.jpg
    title: "Team Building Exercise",
    category: "Training"
  },
  {
    id: "9",
    url: img10,  // Local: IMG_2181.jpg
    title: "Emergency Response Drill",
    category: "Training"
  },
  {
    id: "10",
    url: img11,  // Local: IMG_2182.jpg
    title: "Security Operations Center",
    category: "Operations"
  },
  {
    id: "11",
    url: img12,  // Placeholder: Reuse img1 or add import img11
    title: "Physical Security Check",
    category: "Operations"
  },
  {
    id: "12",
    url: img13,  // Placeholder: Reuse img2 or add import img12
    title: "Advanced Training Course",
    category: "Training"
  },
  {
    id: "13",
    url: img14,  // Placeholder: Reuse img3 or add import img13
    title: "Client Meeting",
    category: "Business"
  },
  {
    id: "13",
    url: img15,  // Placeholder: Reuse img3 or add import img13
    title: "Client Meeting",
    category: "Business"
  },
  {
    id: "13",
    url: img16,  // Placeholder: Reuse img3 or add import img13
    title: "Client Meeting",
    category: "Business"
  },
  {
    id: "13",
    url: img17,  // Placeholder: Reuse img3 or add import img13
    title: "Client Meeting",
    category: "Business"
  },
  {
    id: "13",
    url: img18,  // Placeholder: Reuse img3 or add import img13
    title: "Client Meeting",
    category: "Business"
  }
];
