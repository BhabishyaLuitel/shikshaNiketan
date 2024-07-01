import React from "react";
import { FaFlask, FaChalkboardTeacher, FaBook, FaBasketballBall } from "react-icons/fa";

const featuresData = [
  {
    name: "State-of-the-Art Laboratories",
    icon: <FaFlask className="text-4xl text-primary" />,
    description:
      "Our school boasts cutting-edge laboratories equipped with the latest technology, fostering a deeper understanding of scientific principles and encouraging innovation.",
    aosDelay: "0",
  },
  {
    name: "Experienced Faculty",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    description:
      "At Shiksha Niketan, our highly qualified educators provide personalized attention and support to ensure every student reaches their full potential.",
    aosDelay: "300",
  },
  {
    name: "Comprehensive Curriculum",
    icon: <FaBook className="text-4xl text-primary" />,
    description:
      "Our curriculum integrates academic rigor with creative and critical thinking, offering a wide range of subjects and activities to prepare students for higher education and future careers.",
    aosDelay: "500",
  },
  {
    name: "Modern Sports Facilities",
    icon: <FaBasketballBall className="text-4xl text-primary" />,
    description:
      "We prioritize physical education with well-maintained sports facilities that support various activities, fostering teamwork, discipline, and a healthy lifestyle.",
    aosDelay: "700",
  },
];

const SchoolFeatures = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Features
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Discover what makes Shiksha Niketan a premier educational institution.
            </p>
          </div>

          {/* features cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {featuresData.map((feature) => (
              <div
                key={feature.name}
                data-aos="fade-up"
                data-aos-delay={feature.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{feature.icon}</div>
                <h1 className="text-lg font-semibold">{feature.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolFeatures;
