import React from "react";
import Slider from "react-slick";
import thakurPrasadSubedi from "../../assets/headshots/thakur-prasad-subedi.jpg";
import ghanaShyamDhakal from "../../assets/headshots/GhanashyamSir Picture.jpg";
import ganeshPrasadPokhrel from "../../assets/headshots/ganesh-prasad-pokhrel.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Thakur Prasad Subedi - Headteacher",
    text: "Shiksha Niketan has been instrumental in fostering a nurturing environment where students thrive academically and personally. Our commitment to excellence and holistic development ensures every student receives the support they need to succeed.",
    img: thakurPrasadSubedi,
  },
  {
    id: 2,
    name: "Ghana Shyam Dhakal - Assistant Headteacher",
    text: "At Shiksha Niketan, we are dedicated to providing a well-rounded education that prepares students for future challenges. Our focus on academic rigor, combined with extracurricular activities, ensures a comprehensive learning experience.",
    img: ghanaShyamDhakal,
  },
  {
    id: 3,
    name: "Ganesh Prasad Pokhrel - Assistant Headteacher",
    text: "The supportive community at Shiksha Niketan encourages students to explore their interests and passions. With a focus on innovation and personal growth, we empower students to become responsible global citizens.",
    img: ganeshPrasadPokhrel,
  },
];



const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
