
import component from "./components";
import { type Booking } from "./types/booking";
import Image from "./assets/index"
import './App.css'
import toast from "react-hot-toast";

function App() {
    const booking: Booking = {
 serviceName: "JW Marriot",
    imageUrl: "hotel.jpg",
    provider: "TravelGo",
    price: "₹4,999",
    actualPrice: "₹7,999",
    discountPrice: "₹4,999",
    location: "Goa, India",
    description: "Enjoy a luxury beachfront resort with complimentary breakfast and spa access.",
       images: [
        Image.hotel,
      Image.hotel1,
      Image.hotel2,
      Image.hotel3,
      Image.hotel4
    ]
  };

  const handleBooking = () => {
    toast.success("📚 Booking Successful!")
  };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-secondary bg-cover bg-center p-5 h-100dvh" style={{ backgroundImage: `url(${Image.bookingcard})` }}>
      <component.BookingCard booking={booking} onBookNow={handleBooking} />
    </div>
    </>
  )
}

export default App
