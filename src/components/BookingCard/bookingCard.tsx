import React, { useState } from "react";
import { type Booking } from "../../types/booking";
import { motion } from "framer-motion";
import Image from "../../assets/index";
import { MapPin, User2, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        <img
          src={booking.imageUrl || Image.hotel}
          alt={booking.serviceName}
          className="w-full h-56 object-cover cursor-pointer"
          onClick={handleImageClick}
        />

        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold text-primary">{booking.serviceName}</h2>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>{booking.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <User2 className="w-4 h-4 text-blue-500" />
              <span>{booking.provider}</span>
            </div>
          </div>

          {booking.description && (
            <p className="text-sm text-gray-500 line-clamp-3 mt-2">{booking.description}</p>
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
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-xl">
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-full"
              onClick={() => setShowGallery(false)}
            >
              <X />
            </button>
            <Swiper spaceBetween={10} slidesPerView={1}>
              {booking.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingCard;
