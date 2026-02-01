import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Pipsy Pillars"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* --- CONTENT LAYER --- */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                
                {/* Title: Colors up on hover */}
                <h5 className="h5 mb-5 transition-colors duration-300 group-hover:text-color-1">
                  {item.title}
                </h5>
                
                {/* Text: Lightens slightly on hover */}
                <p className="body-2 mb-6 text-n-3 transition-colors duration-300 group-hover:text-n-1">
                  {item.text}
                </p>

                {/* Footer: The Arrow slides in from the left */}
                <div className="flex items-center mt-auto">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-n-1/10 transition-colors duration-300 group-hover:bg-n-1">
                     {/* Assuming your Arrow component accepts className or is an SVG */}
                     <span className="text-n-1 transition-colors duration-300 group-hover:text-n-8">
                       <Arrow />
                     </span>
                  </div>
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Pipsy Pillars
                  </p>
                </div>
              </div>

              {/* --- LIGHTING EFFECT (Optional) --- */}
              {item.light && <GradientLight />}

              {/* --- BACKGROUND LAYER --- */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* Hover Image: Zooms and fades in */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-20 group-hover:scale-105">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                {/* Gradient Overlay: Ensures text readability when image appears */}
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
