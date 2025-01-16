import Layout from "../components/layout/Layout"; // Import Layout
import aboutContent from "../content/about.json"; // Import JSON content

export default function About() {
  return (
    <Layout>
      <div className="bg-gradient-custom min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-6 text-white">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-6">
            {aboutContent.title}
          </h1>

          {/* Description */}
          <p className="text-lg mb-8">
            {aboutContent.description}
          </p>

          {/* History Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <ul className="space-y-4">
              {aboutContent.history.map((event, index) => (
                <li
                  key={index}
                  className="bg-white bg-opacity-90 p-4 rounded shadow text-gray-700"
                >
                  <strong className="text-gray-800">{event.year}:</strong>{" "}
                  {event.event}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutContent.team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 p-4 rounded shadow text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}