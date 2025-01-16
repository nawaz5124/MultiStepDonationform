import Layout from "../components/layout/Layout"; // Import Layout
import causesContent from "../content/causes.json"; // Import JSON content

export default function Causes() {
  return (
    <Layout>
      <div className="bg-gradient-custom min-h-screen py-12">
      {/* Background Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/causes-hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold">{causesContent.title}</h1>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto py-4 px-6 text-gray-600">
        <p>
          <a href="/" className="text-blue-500 hover:underline">
            {causesContent.breadcrumb.home}
          </a>{" "}
          &gt; <span>{causesContent.breadcrumb.current}</span>
        </p>
      </div>

      {/* Causes Grid */}
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {causesContent.causes.map((cause, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={cause.image}
              alt={cause.title}
              className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{cause.title}</h2>
              <p className="text-gray-700 mb-4">{cause.description}</p>
              {/* Button */}
              <a
                href={cause.link}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                {cause.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Donate Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{causesContent.donate.title}</h2>
            <p className="text-lg mb-6">{causesContent.donate.description}</p>
            <a
              href={causesContent.donate.link}
              className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition"
            >
              {causesContent.donate.button}
            </a>
          </div>
          {/* Image Section */}
          <div>
            <img
              src={causesContent.donate.image}
              alt="Donate Now"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}