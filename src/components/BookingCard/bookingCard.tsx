import React, { useState } from "react";
import { type Booking } from "../../types/booking";
import { motion } from "framer-motion";
import Image from "../../assets/index";
import { MapPin, User2, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // <-- New
import "swiper/css";
import "swiper/css/navigation"; 

type Props = {
  booking: Booking;
  onBookNow?: () => void;
};

const BookingCard: React.FC<Props> = ({ booking, onBookNow }) => {
  const [showGallery, setShowGallery] = useState(false);

  const handleImageClick = () => {
    if (booking.images && booking.images.length > 0) {
      setShowGallery(true);
    }
  };

  return (
    <>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-sm w-full mx-auto sm:max-w-[90%] md:max-w-md"
>
  <div className="relative group w-full h-56 cursor-pointer" onClick={handleImageClick}>
    <img
      src={Image.hotel}
      alt={booking.serviceName}
      className="w-full h-full object-cover rounded-md"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-lg sm:text-xl font-semibold">Click to View Gallery</p>
    </div>
  </div>

  <div className="p-5 space-y-4">
    <div className="flex justify-between mb-1">
    <h2 className="text-xl font-bold text-primary">{booking.serviceName}</h2>
    <div className="flex items-center gap-1">
        <User2 className="w-4 h-4 text-blue-500" />
        <span>{booking.provider}</span>
      </div>
   
</div>
    <div className="flex items-center justify-between text-sm text-gray-600">
     <a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-600 hover:underline"
      >
        <MapPin className="w-4 h-4 text-red-500" />
        <span>{booking.location}</span>
      </a>
    </div>

    {/* Highlighted Features */}
    <div className="flex flex-wrap gap-2 mt-2">
      <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
        🍽️ Free Breakfast
      </span>
      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
        🛏️ 2 Nights Stay
      </span>
      <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
        📶 Free Wi-Fi
      </span>
    </div>

    {booking.description && (
      <p className="text-sm text-gray-500 line-clamp-3 mt-1">{booking.description}</p>
    )}

    <div className="flex justify-between items-center pt-3">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-gray-800">
          {booking.discountPrice || booking.price}
        </span>
        {booking.actualPrice && (
          <span className="text-sm text-gray-400 line-through">
            {booking.actualPrice}
          </span>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBookNow}
        className="cursor-pointer bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
      >
        Book Now
      </motion.button>
    </div>
  </div>
</motion.div>


      {/* Gallery Modal */}
{showGallery && (
  <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center">
    {/* ❌ Close Button (Top Right of modal) */}
    <button
      className="absolute top-4 right-4 text-white bg-gray-700 p-2 rounded-full z-50"
      onClick={() => setShowGallery(false)}
    >
      <X />
    </button>

    <div className="w-full max-w-5xl px-6 md:px-12 flex items-center justify-center gap-4 relative">
      {/* ◀️ Prev Button (Outside image, Desktop only) */}
    <div className="swiper-button-prev hidden md:flex text-white text-4xl cursor-pointer select-none z-40 mb-hidden">
    </div>

      {/* 🖼️ Swiper with Images */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="w-full max-w-xl"
      >
        {booking.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ▶️ Next Button (Outside image, Desktop only) */}
      <div className="swiper-button-next hidden md:flex text-white text-4xl cursor-pointer select-none z-40 mb-hidden">
      </div>
    </div>
  </div>
)}



    </>
  );
};

export default BookingCard;
