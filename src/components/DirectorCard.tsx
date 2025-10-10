import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Director } from "@/data/directors";

interface DirectorCardProps {
  director: Director;
}

const DirectorCard = ({ director }: DirectorCardProps) => {
  return (
    <Link to={`/director/${director.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent">
        <CardContent className="p-0">
          <div className="relative h-64 overflow-hidden">
            <img
              src={director.images[0]}
              alt={director.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{director.name}</h3>
              <p className="text-sm text-highlight mb-2">{director.title}</p>
              <div className="flex items-center text-accent group-hover:text-highlight transition-colors">
                <span className="text-sm mr-1">View Profile</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DirectorCard;
