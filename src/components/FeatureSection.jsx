import { useState, useEffect, useRef } from "react";
import FooterSection from "./FooterSection";

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); 
      },
      { threshold: 0.5 } 
    );

    observer.observe(sectionRef.current); 

    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-full overflow-visible flex flex-col justify-center items-center bg-slate-100 z-30 absolute top-full left-1/2 transform -translate-x-1/2 rounded-lg shadow-md"
    >
      <iframe
        width="60%"
        height="70%"
        className={`rounded-2xl mt-10 sm:-w-full sm:h-96 lg:h-3/4 ${
          isVisible ? "animate-slide-in" : ""
        }`}
        src="https://www.youtube.com/embed/9KWjPD3r-fU"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <FooterSection />
    </div>
  );
};

export default FeatureSection;
