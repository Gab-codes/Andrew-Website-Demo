import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      title: "Homeowner",
      rating: 5,
      content:
        '"Andrew helped me navigate through a complicated insurance claim process. His expertise and dedication made the entire experience stress-free. Highly recommend!"',
      image: "/assets/review1.png",
    },
    {
      name: "Mike Johnson",
      title: "Entrepreneur",
      rating: 5,
      content:
        '"Andrew not only assisted me with my insurance claim but also helped me with financial planning. His holistic approach has been a game-changer for me. Thank you, Andrew!"',
      image: "/assets/review2.png",
    },
    {
      name: "David Miller",
      title: "Business Owner",
      rating: 5,
      content:
        '"I was in a tough situation with my insurance claim, and Andrew\'s guidance was invaluable. He gave me clarity and confidence in my decisions. Excellent service!"',
      image: "/assets/review3.png",
    },
    {
      name: "Sarah Lee",
      title: "Marketing Specialist",
      rating: 4.5,
      content:
        '"The insurance claims assistance provided was thorough, timely, and very professional. Andrew made a complex process much easier to handle. Highly recommend his services!"',
      image: "/assets/review4.png",
    },

    // {
    //   name: "David Miller",
    //   title: "Retiree",
    //   rating: 5,
    //   content:
    //     '"I highly recommend Andrew for anyone seeking legal advice or financial planning. His expertise and attention to detail are second to none!"',
    //   image: "/assets/david-miller.jpg",
    // },
    // {
    //   name: "Emma Thompson",
    //   title: "Business Owner",
    //   rating: 5,
    //   content:
    //     '"Working with Andrew was an absolute pleasure! He is incredibly professional and helped me solve complex issues in a timely manner. I feel more confident in my business decisions because of his guidance. Highly recommend!"',
    //   image: "/assets/emma-thompson.jpg",
    // },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <Star key={i} className="text-yellow-500 fill-yellow-500 w-5 h-5" />
        );
      } else if (i - rating === 0.5) {
        stars.push(
          <StarHalf
            key={i}
            className="text-yellow-500 fill-yellow-500 w-5 h-5"
          />
        );
      } else {
        stars.push(<Star key={i} className="text-gray-300 w-5 h-5" />);
      }
    }
    return stars;
  };

  return (
    <section className="py-16 px-5 sm:px-10 bg-gray-50" id="testimonials">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Client Testimonials
      </motion.h2>

      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="max-w-sm mx-auto py-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg rounded-lg p-5 h-full w-full">
                  <CardHeader className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold text-blue-600">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">
                      {testimonial.content}
                    </p>
                    <div className="flex mt-3">
                      {renderStars(testimonial.rating)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-lg rounded-lg p-5 h-full">
              <CardHeader className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-blue-600">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">{testimonial.content}</p>
                <div className="flex mt-3">
                  {renderStars(testimonial.rating)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
