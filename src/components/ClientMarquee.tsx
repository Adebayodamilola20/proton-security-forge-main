import { clients } from "@/data/clients";

const ClientMarquee = () => {
  // Double the clients array for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
      
      <div className="flex animate-slide-right hover:pause">
        <div className="flex space-x-16 px-8">
          {allClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-24 w-40 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain filter brightness-0 hover:brightness-100 transition-all"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 px-8">
          {allClients.map((client, index) => (
            <div
              key={`duplicate-${client.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-24 w-40 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain filter brightness-0 hover:brightness-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
