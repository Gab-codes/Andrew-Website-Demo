import { motion } from "motion/react";
import hero from "../assets/hero.png";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="mt-[100px] py-8 sm:py-10 mb-14 sm:my-20 px-6" id="home">
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-8 sm:gap-16">
        <motion.div
          className="text-center sm:text-left"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.h1
            className="text-3xl sm:text-6xl font-extrabold leading-tight text-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block">
              <Typewriter
                words={["Hello, I'm Andrew", "Your insurance expert"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-4xl font-medium mt-4 text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
            viewport={{ once: true }}
          >
            A{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Claim Specialist
            </span>{" "}
            🚀
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-600 sm:text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6 }}
            viewport={{ once: true }}
          >
            I work for <strong>State Farm Insurance Company</strong>, where I
            specialize in handling claims and assisting clients in resolving
            insurance disputes efficiently.
            <br className="hidden sm:block" /> In addition to providing expert
            legal advice, I offer financial planning services to help you secure
            a better future.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="relative w-full sm:w-auto bg-gradient-to-r from-pink-500 via-violet-700 to-blue-500 hover:from-blue-600 hover:to-pink-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all overflow-hidden"
              aria-label="Contact Me"
            >
              <span className="relative z-10">Contact Me</span>
              <span
                className="absolute inset-0 animate-delayed-ping rounded-md bg-gradient-to-r from-pink-500 via-violet-700 to-blue-500 opacity-75"
                aria-hidden="true"
              ></span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: imageLoaded ? 1 : 0,
            y: imageLoaded ? 0 : -50,
          }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <img
            srcSet={`${hero}?w=500 500w, ${hero}?w=800 800w, ${hero}?w=1200 1200w`}
            sizes="(max-width: 640px) 500px, (max-width: 1024px) 800px, 1200px"
            src={hero}
            alt="Hero"
            className="max-w-[250px] sm:max-w-[350px] rounded-full shadow-lg animate-floating"
            width={350}
            height={350}
            onLoad={handleImageLoad}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
