import { useNavigate } from "react-router-dom";
export default function Services() {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="Beach wedding setup"
            className="w-full h-full object-cover"
            keywords="beach wedding, sunset ceremony, happiness plans"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            We plan your journeys and events with care, creativity, and
            precision.
          </p>
        </div>
        {/* Next: "Add a subtle scroll indicator animation" */}
      </div>

      {/* Core Services */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">
          Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
            <div className="h-40 bg-teal-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-teal-600 group-hover:scale-110 transition-transform duration-300">
                flight
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Travel Planning</h3>
              <p className="text-gray-600">
                Custom itineraries, flights, hotels, and activities tailored to
                your preferences and budget.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
            <div className="h-40 bg-orange-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-orange-400 group-hover:scale-110 transition-transform duration-300">
                celebration
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p className="text-gray-600">
                Weddings, corporate retreats, private events with dedicated
                planners for a seamless experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
            <div className="h-40 bg-amber-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-amber-500 group-hover:scale-110 transition-transform duration-300">
                map
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tour Packages</h3>
              <p className="text-gray-600">
                Pre-designed getaways for popular destinations with exclusive
                access and local experiences.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
            <div className="h-40 bg-teal-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-teal-600 group-hover:scale-110 transition-transform duration-300">
                support_agent
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Ongoing assistance before and during travel, ensuring peace of
                mind throughout your journey.
              </p>
            </div>
          </div>
        </div>
        {/* Next: "Add a 'View detailed offerings' button" */}
      </div>

      {/* How It Works */}
      <div className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-teal-800">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-10 md:mb-0 text-center">
              <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-4xl text-white">
                  lightbulb
                </span>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">
                  1. Tell us your dream
                </h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Share your vision, preferences, and requirements with our
                  expert consultants.
                </p>
                <div className="hidden md:block absolute top-1/2 right-[-30%] w-20 h-[2px] bg-teal-300"></div>
              </div>
            </div>

            <div className="md:w-1/3 mb-10 md:mb-0 text-center">
              <div className="w-24 h-24 rounded-full bg-orange-400 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-4xl text-white">
                  calendar_month
                </span>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">
                  2. We plan every detail
                </h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Our team crafts a personalized plan with carefully selected
                  options and activities.
                </p>
                <div className="hidden md:block absolute top-1/2 right-[-30%] w-20 h-[2px] bg-teal-300"></div>
              </div>
            </div>

            <div className="md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-4xl text-white">
                  beach_access
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  3. You relax and enjoy
                </h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Experience your dream event or journey while we handle all
                  logistics and details.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Next: "Add customer testimonial snippets" */}
      </div>

      {/* Add-On Services */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-800">
          Our Specialties
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Exceptional services tailored to create unforgettable experiences for
          every occasion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white border border-gray-100 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-symbols-outlined text-3xl text-pink-500 mb-3">
              favorite
            </span>
            <h3 className="font-semibold">Honeymoon Packages</h3>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-symbols-outlined text-3xl text-teal-600 mb-3">
              church
            </span>
            <h3 className="font-semibold">Destination Weddings</h3>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-symbols-outlined text-3xl text-amber-500 mb-3">
              diamond
            </span>
            <h3 className="font-semibold">VIP Travel</h3>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-symbols-outlined text-3xl text-blue-500 mb-3">
              groups
            </span>
            <h3 className="font-semibold">Group Tours</h3>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-symbols-outlined text-3xl text-gray-700 mb-3">
              business_center
            </span>
            <h3 className="font-semibold">Corporate Conferences</h3>
          </div>
        </div>
        {/* Next: "Add expandable details for each specialty" */}
      </div>

      {/* Client Benefits */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-teal-600">
                    landscape
                  </span>
                </div>
                <h3 className="font-semibold text-lg">Personalized Service</h3>
              </div>
              <p className="text-gray-600">
                Tailored experiences designed to match your unique preferences
                and dreams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-orange-500">
                    handshake
                  </span>
                </div>
                <h3 className="font-semibold text-lg">Trusted Partners</h3>
              </div>
              <p className="text-gray-600">
                Global network of vetted service providers offering premium
                experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-amber-500">
                    timer
                  </span>
                </div>
                <h3 className="font-semibold text-lg">On-Time Delivery</h3>
              </div>
              <p className="text-gray-600">
                Punctual and reliable service with precise attention to
                scheduling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-teal-600">
                    public
                  </span>
                </div>
                <h3 className="font-semibold text-lg">Global Reach</h3>
              </div>
              <p className="text-gray-600">
                Expertise in destinations worldwide, with local insights and
                connections.
              </p>
            </div>
          </div>
        </div>
        {/* Next: "Add testimonial quotes from satisfied clients" */}
      </div>

      {/* Call-to-Action */}
      <div className="py-20 px-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to plan your next trip or event?
          </h2>
          <p className="text-lg mb-8 text-teal-50">
            Let us turn your dreams into unforgettable experiences.
          </p>
          <button className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            Book a Free Consultation
          </button>
        </div>
        {/* Next: "Add animated pattern background" */}
      </div>
    </div>
  );
}
