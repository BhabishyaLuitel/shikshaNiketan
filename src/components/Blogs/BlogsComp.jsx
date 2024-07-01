import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/manil tiwari.jpg";
import Img2 from "../../assets/blog/jonisha miss.jpg";
import Img3 from "../../assets/blog/jibika miss.jpg";
import Img4 from "../../assets/blog/bhabishya.jpg";
import Img5 from "../../assets/blog/dhanmani sir.jpg";
import Img6 from "../../assets/blog/manita miss.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Manil Tiwari - Teacher",
    description:
      "“At Shiksha Niketan, we believe in empowering our students with the knowledge and skills they need to succeed in life. Our approach is student-centered, focusing on individual strengths and potentials.”",
    author: "Manil Tiwari",
    date: "June 15, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Jonisha Subedi - Teacher",
    description:
      "“Our commitment to holistic education ensures that students at Shiksha Niketan develop not just academically, but also socially and emotionally. We nurture well-rounded individuals ready to take on the world.”",
    author: "Jonisha Subedi",
    date: "June 15, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Jibika Sapkota - Teacher",
    description:
      "“Innovation and creativity are at the heart of our teaching methods at Shiksha Niketan. We encourage our students to think critically and solve problems creatively, preparing them for future challenges.”",
    author: "Jibika Sapkota",
    date: "June 15, 2024",
  },
  {
    id: 4,
    image: Img4,
    title: "Bhabishya Luitel - Teacher",
    description:
      "“The supportive community at Shiksha Niketan is our greatest strength. We work together to create an environment where every student feels valued and inspired to achieve their best.”",
    author: "Bhabishya Luitel",
    date: "June 15, 2024",
  },
  {
    id: 5,
    image: Img5,
    title: "Dhanmani Acharya - Teacher",
    description:
      "“The nurturing community at Shiksha Niketan stands as our cornerstone. Collaboratively, we cultivate an environment where each student is cherished and motivated to excel.",
    author: "Bhabishya Luitel",
    date: "June 15, 2024",
  },
  {
  id: 6,
  image: Img6,
  title: "Manita Neupane Poudel - Teacher",
  description:
    "“The nurturing community at Shiksha Niketan stands as our cornerstone. Collaboratively, we cultivate an environment where each student is cherished and motivated to excel.",
  author: "Bhabishya Luitel",
  date: "June 15, 2024",
},
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Team (English Medium)
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
