import Layout from "../components/layout/Layout";



export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-custom py-12">
        {/* Hero Section */}


        <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {/* Left Section: Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Leave us your enquiries</h2>
            <p className="mb-8">
              We are here to assist you with any questions, feedback, or support you may need. Please fill out the form below, and our team will get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                />
              </div>

              {/* Address Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="House Number and Street"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                />
                <input
                  type="text"
                  placeholder="Post Code"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-black"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded px-4 py-2 w-full text-black"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="border border-gray-300 rounded px-4 py-2 w-full text-black"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Section: Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
              <strong>Address:</strong> 4 Trustin Cresent, Solihull B92 9QQ
            </p>
            <p>
              <strong>Phone:</strong> +44 7879921917
            </p>
            <p>
              <strong>Email:</strong> info@camelfoundation.org
            </p>
            {/* Google Maps Embed */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7379156072024!2d-1.8490255!3d52.4955354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bdbb987ac2c1%3A0x42371b1e52de6c14!2s6%20Thornton%20Rd%2C%20Birmingham%20B8%202LG%2C%20UK!5e0!3m2!1sen!2s!4v1685720343321!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}