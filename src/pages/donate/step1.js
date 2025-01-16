import { useRouter } from 'next/router';


export default function DonationType() {
  const router = useRouter();

  // Hardcoded donation types
  const donationTypes = [
    { name: "One-Off", description: "Make a one-time donation to support our cause." },
    { name: "Monthly", description: "Set up a recurring monthly donation to support our cause." },
  ];

  // Handle donation type selection
  function handleDonationTypeSelection(type) {
    // Navigate to the next step, passing the selected type as a query parameter
    router.push(`/donate/step2?type=${type}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <h1 className="text-4xl text-white font-bold mb-8">Choose Donation Type</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {donationTypes.map((type) => (
          <button
            key={type.name}
            className="bg-white text-purple-700 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-purple-200 transition duration-300"
            onClick={() => handleDonationTypeSelection(type.name)} // Call the selection handler
            title={type.description} // Tooltip for description
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}