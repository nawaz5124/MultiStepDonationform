import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Step2() {
  const router = useRouter();
  const { type } = router.query; // Retrieve the donation type from the query parameters

  // State to manage personal details form
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });

  // Handle the "Next" button click
  const handleNext = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Log the navigation action for debugging
    console.log('Navigating to Step 3 with query string:', `/donate/steps/step3?type=${type}`);

    // Navigate to Step 3 with explicit query string
    router.push(`/donate/steps/step3?type=${type}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      {/* Header */}
      <h1 className="text-4xl text-white font-bold mb-8">Your Personal Details</h1>
      <p className="text-white mb-4">Donation Type: {type}</p>

      {/* Form */}
      <form className="space-y-4 w-full max-w-md" onSubmit={handleNext}>
        {/* Input Fields */}
        <input
          type="text"
          placeholder="First Name"
          className="border px-4 py-2 rounded w-full"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border px-4 py-2 rounded w-full"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-2 rounded w-full"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border px-4 py-2 rounded w-full"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({ ...formData, mobile: e.target.value })
          }
        />

        {/* Next Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        >
          Next
        </button>
      </form>
    </div>
  );
}