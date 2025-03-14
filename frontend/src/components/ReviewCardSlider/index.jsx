import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: '"Absolutely fantastic dining experience! The ambiance was cozy, the staff was friendly, and the food was bursting with flavors. Their pasta was the best I’ve ever had! Will definitely recommend to all food lovers out there."',
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: '"Loved the atmosphere and the fresh ingredients. The pizza had the perfect crust, but the service was slightly slow during peak hours. Overall, a great place for a casual dinner. I’ll be back to try more dishes soon!"',
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: '"A great spot for a family dinner! The steak was juicy, and the cocktails were well-balanced. However, the dessert selection was a bit limited. Other than that, a solid experience with excellent service and a welcoming ambiance."',
    rating: 4,
  },
];

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToReview = (i) => {
    setIndex(i);
  };

  return (
    <div className="flex flex-col items-center gap-6 justify-center w-full bg-[#f9f9f9]">
      <div className="relative w-full bg-white p-6 rounded-lg shadow-lg text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img
              src={reviews[index].image}
              alt={reviews[index].name}
              className="w-16 h-16 rounded-full border-2 border-gray-300 mb-3"
            />
            <h3 className="text-lg font-semibold">{reviews[index].name}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{reviews[index].review}</p>
            <ReactStars
              count={5}
              value={reviews[index].rating}
              edit={false}
              size={20}
              activeColor="red"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Clickable Dots Indicator */}
      <div className="flex space-x-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goToReview(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none ${
              i === index ? "bg-indigo-500 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
