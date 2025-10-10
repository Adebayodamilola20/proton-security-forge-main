import { Shield, Users, Building, Lock, Eye, Headphones } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export const services: Service[] = [
  {
    id: "corporate-security",
    title: "Corporate Security Solutions",
    description: "Comprehensive security programs tailored for corporate environments, protecting assets, personnel, and intellectual property.",
    icon: Building,
    features: [
      "24/7 Security Monitoring",
      "Access Control Systems",
      "Executive Protection",
      "Security Risk Assessments",
      "Emergency Response Planning"
    ]
  },
  {
    id: "training-development",
    title: "Security Training & Development",
    description: "World-class training programs designed to develop highly skilled security professionals for diverse operational environments.",
    icon: Users,
    features: [
      "Basic Security Training",
      "Advanced Tactical Operations",
      "Crisis Management",
      "First Responder Training",
      "Specialized Certifications"
    ]
  },
  {
    id: "physical-security",
    title: "Physical Security Services",
    description: "Professional security personnel deployment for events, facilities, and high-value asset protection.",
    icon: Shield,
    features: [
      "Event Security Management",
      "Facility Protection",
      "VIP & Executive Protection",
      "Armed & Unarmed Guards",
      "Mobile Patrol Services"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Advanced digital security measures to protect your organization from cyber threats and data breaches.",
    icon: Lock,
    features: [
      "Network Security Audits",
      "Penetration Testing",
      "Security System Integration",
      "Incident Response",
      "Security Awareness Training"
    ]
  },
  {
    id: "surveillance",
    title: "Surveillance & Monitoring",
    description: "State-of-the-art surveillance systems and monitoring services for comprehensive situational awareness.",
    icon: Eye,
    features: [
      "CCTV System Installation",
      "Remote Monitoring Services",
      "Alarm System Integration",
      "Analytics & Reporting",
      "24/7 Control Room Operations"
    ]
  },
  {
    id: "consulting",
    title: "Security Consulting",
    description: "Expert advisory services to develop and optimize your organization's security strategy and operations.",
    icon: Headphones,
    features: [
      "Security Assessments",
      "Policy Development",
      "Compliance Audits",
      "Strategic Planning",
      "Vendor Management"
    ]
  }
];
export interface ClientLogo {
  id: string;
  src: string;  // Imported image
  alt: string;
  name: string;  // For accessibility/screen readers
}
