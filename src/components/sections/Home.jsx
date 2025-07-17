import { RevealOnScroll } from "../RevealOnScroll";
import Katu from "../../assets/Katu2.jpeg"
import "../../App.css"


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="profile">
        <img src={Katu} alt="" />
        </div>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Katre
          </h1>
          <p className="text-gray-400-lg mb-8 max-w-lg mx-auto">
            I'm a Tallinn/world based front-end developer with a passion for building elegant React
            applications. Outside of coding I spend winters chasing the sun,
            exploring new places, meeting inspiring people, and creating content
            — whether it's with a drone, camera or just a curious mind.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="projects-button"
              // bg-purple-400 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative ease-in-out overflow-hidden hover:-translate-y-0.5 
            //hover:shadow-cyan-500/50 hover:-translate-y-1  KUI hiljem siiski ümber teha tahan
            >
              Previous Projects
            </a>
            <a
              href="#contact"
              className="contact-button"
              //border border-purple-300/30 text-purple-300 py-3 px-6 font-medium transition-all duration-200
            //hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2) hover_bg-blue-500/10]
            >
              Connect with me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
