import Layout from "../components/layout/Layout"; // Import Layout
import mediaContent from "../content/media.json"; // Import JSON content
import { useState } from "react"; // Import useState for tab management

export default function Media() {
  const [activeTab, setActiveTab] = useState("ALL"); // State for active tab

  // Filter items based on the active tab
  const filteredItems =
    activeTab === "ALL"
      ? mediaContent.items
      : mediaContent.items.filter((item) => item.type === activeTab);

  return (
    <Layout>
    
      <div className="bg-gradient-custom min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6 text-white">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>

          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            {["ALL", "IMAGES", "VIDEOS"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded shadow overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {item.type === "VIDEOS" && (
                  <div className="absolute top-4 right-4 bg-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-1.599A1 1 0 0010 10.399v3.202a1 1 0 001.555.832l3.197-1.599a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}