import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Prop firm Trading at
      </h5>

      {/* Container with Mask for Fade Effect */}
      <div className="relative flex overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        
        {/* The Animated Track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          
          {/* Render logos TWICE for seamless loop */}
          {[...companyLogos, ...companyLogos].map((item, index) => (
            <div
              className="flex items-center justify-center mx-8 w-[10rem] shrink-0"
              key={index}
            >
              <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-full h-full transition-opacity duration-300 hover:opacity-100 opacity-50"
              >
                <img
                  src={item.image}
                  width={134}
                  height={28}
                  alt={item.title || "Partner Logo"}
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
