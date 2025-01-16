import Layout from "../components/layout/Layout";
import eventContent from "../content/event.json";

export default function Event() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-custom py-12">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/events-hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold">{eventContent.title}</h1>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto py-4 px-6 text-gray-600">
        <p>
          <a href="/" className="text-blue-500 hover:underline">Home</a> &gt;{" "}
          <span>Events</span>
        </p>
      </div>

      {/* Event Filters */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex space-x-4 justify-center">
          <button className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">All</button>
          <button className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400">Upcoming</button>
          <button className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400">Past</button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventContent.events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-lg overflow-hidden"
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* Event Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h3>
              <div className="text-gray-600 mb-2">
                <span className="block">
                  <strong>Date:</strong> {new Date(event.date).toDateString()}
                </span>
                <span className="block">
                  <strong>Location:</strong> {event.location}
                </span>
              </div>
              <a
                href="#"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Layout>
  );
}