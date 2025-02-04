import { motion } from "motion/react";
import andrew from "../assets/andrew.jpeg";

const AboutMe = () => {
  return (
    <section className="py-16 bg-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={andrew}
              loading="lazy"
              alt="portrait of Andrew."
              className="rounded-lg shadow-lg object-cover w-full h-auto max-w-96"
            />
          </motion.div>

          <div className="w-full md:w-1/2 text-gray-700">
            <motion.p
              className="text-lg leading-7 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hi there!👋, I’m{" "}
              <span className="font-semibold text-blue-600">
                Andrew Kikkert
              </span>
              , a seasoned professional with over{" "}
              <span className="font-semibold">35 years</span> of experience in
              Property and Casualty Insurance. Throughout my career, I’ve been
              the trusted expert for solving complex insurance
              challenges—whether it’s addressing coverage, investigating
              non-meritorious claims, or navigating legal hurdles. My mission
              has always been to deliver results that matter.
            </motion.p>
            <motion.p
              className="text-lg leading-7 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I specialize in{" "}
              <span className="font-semibold">
                Claim and Coverage Investigations
              </span>
              ,{" "}
              <span className="font-semibold">
                Automobile and Home owners Estimatics
              </span>
              , and <span className="font-semibold">Insurance Litigation</span>.
              From investigation to evaluation to smoothing over disputes, I’ve
              seen it all—and fixed it after you break it.
            </motion.p>
            <motion.p
              className="text-lg leading-7 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              My approach is rooted in a deep commitment to getting results,
              whether through providing accurately evaluating or assisting you
              recover from the unexpected. And while my work is serious, my
              outlook is lighthearted—I guarantee through the process with
              empathy and integrity.
            </motion.p>
            <motion.p
              className="text-lg leading-7 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Outside of work, I’m a{" "}
              <span className="font-semibold">world traveler</span> and an
              aspiring chef who’s always up for cooking dinner. I also have my
              CPCU, ChFC and CFP designations.
            </motion.p>
            <motion.p
              className="text-lg leading-7 mb-4 italic text-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              “I aim to please and shoot to kill.” – It’s not just a motto; it’s
              how I approach solving your toughest challenges.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
