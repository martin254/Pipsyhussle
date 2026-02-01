import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-10 text-center text-n-1/50 tracking-widest uppercase text-sm">
        Prop firm Trading at
      </h5>
      
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {companyLogos.map((logo, index) => (
          <li
            className="group flex items-center justify-center h-[8.5rem] w-[10rem] transition-all duration-500 hover:scale-110 cursor-pointer"
            key={index}
          >
            {/* The Logo */}
            <img 
              src={logo} 
              width={134} 
              height={28} 
              alt={logo} 
              // Starts grayscale and dim, becomes colorful and bright on hover
              className="opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 mix-blend-lighten" 
            />
            
            {/* Optional: A subtle glow behind the logo on hover */}
            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
