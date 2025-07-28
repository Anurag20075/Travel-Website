import {
  PlaneTakeoff,
  PartyPopper,
  Map,
  Headphones,
  BadgeCheck,
  BadgePlus,
  PiggyBank,
  Headset,
  Star,
  ArrowRight,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handlechat = () => {
    navigate("/chat");
  };
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
          alt="Tropical beach destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-wide animate-fade-in">
              Your Journey, <span className="text-teal-300">Our Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 md:w-2/3 font-light">
              Stress-free travel and unforgettable events—crafted for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:transform hover:shadow-lg hover:scale-105"
                onClick={handlechat}
              >
                Plan Your Trip
              </button>
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:transform hover:shadow-lg hover:scale-105"
                onClick={handleContact}
              >
                Book an Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-beige-50 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                About Us
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in creating personalized travel
                experiences and managing exceptional events, our team combines
                creativity with meticulous planning to transform your dreams
                into unforgettable memories.
              </p>
              <button
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold group transition-all duration-300"
                onClick={handleClick}
              >
                Learn More
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Our team planning events"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel and event solutions tailored to your specific
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PlaneTakeoff className="text-teal-600" size={32} />,
                title: "Travel Planning",
                desc: "Customized itineraries for individual travelers, families, and groups",
                bg: "bg-teal-100",
              },
              {
                icon: <PartyPopper className="text-orange-500" size={32} />,
                title: "Event Management",
                desc: "Full-service planning for corporate events, celebrations, and special occasions",
                bg: "bg-orange-100",
              },
              {
                icon: <Map className="text-teal-600" size={32} />,
                title: "Tour Packages",
                desc: "Guided experiences featuring the best destinations with expert local guides",
                bg: "bg-teal-100",
              },
              {
                icon: <Headphones className="text-orange-500" size={32} />,
                title: "24/7 Support",
                desc: "Round-the-clock assistance during your journey or event for peace of mind",
                bg: "bg-orange-100",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${service.bg} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional experiences that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BadgeCheck size={24} />,
                label: "Expertise",
                desc: "15+ years of experience in travel and event planning",
                bg: "bg-teal-500",
              },
              {
                icon: <BadgePlus size={24} />,
                label: "Personalization",
                desc: "Customized solutions tailored to your preferences",
                bg: "bg-orange-400",
              },
              {
                icon: <PiggyBank size={24} />,
                label: "Value",
                desc: "Competitive pricing without compromising quality",
                bg: "bg-teal-500",
              },
              {
                icon: <Headset size={24} />,
                label: "Support",
                desc: "Dedicated team available 24/7 throughout your experience",
                bg: "bg-orange-400",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-transform hover:scale-110 text-white`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our family vacation was absolutely perfect! Every detail was taken care of...",
                name: "Sarah Johnson",
                title: "Family Trip to Bali",
                image:
                  "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0",
              },
              {
                quote:
                  "I hired TravelEvents to plan our company's annual retreat...",
                name: "Michael Chen",
                title: "Corporate Retreat in Colorado",
                image:
                  "https://images.unsplash.com/photo-1698047681452-08eba22d0c64",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex mr-2">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">5.0</span>
                </div>
                <p className="text-gray-600 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{t.name}</h4>
                    <p className="text-gray-600 text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to plan your next journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's create unforgettable experiences together. Our team is ready
            to assist you with your travel and event needs.
          </p>
          <button
            className="bg-white text-teal-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            onClick={handleContact}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
