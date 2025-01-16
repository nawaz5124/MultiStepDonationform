import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Step3() {
  const router = useRouter();
  const { type } = router.query; // Retrieve the donation type from the query parameters

  // State to handle whether the user chooses manual entry or automatic address search
  const [isManual, setIsManual] = useState(false);

  // State for postcode input
  const [postcode, setPostcode] = useState('');

  // State to store the list of addresses returned from the API
  const [addressList, setAddressList] = useState([]);

  // State for the manually entered address
  const [manualAddress, setManualAddress] = useState({
    houseNumber: '',
    street: '',
    city: '',
    postcode: '',
  });

  // State to handle the selected address from the dropdown
  const [selectedAddress, setSelectedAddress] = useState('');

  // State to handle errors from the postcode API
  const [error, setError] = useState('');

  // Function to handle the API call for address lookup
  const handlePostcodeSearch = async () => {
    setError(''); // Reset any previous errors
    setAddressList([]); // Clear the address list
    try {
      // Make a POST request to the address lookup API
      const response = await fetch(`/api/address/lookup/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postcode }), // Send the postcode in the body
      });
      if (!response.ok) throw new Error('Failed to fetch addresses'); // Handle non-200 responses
      const data = await response.json();
      setAddressList(data.addresses); // Populate the address list with the API response
    } catch (err) {
      setError(err.message); // Display any errors from the API
    }
  };

  // Function to handle form submission and navigation to the next step
  const handleSubmit = (e) => {
    e.preventDefault();
    // Determine the final address based on whether manual entry is selected
    const finalAddress = isManual ? manualAddress : selectedAddress;

    // Validate that an address is selected or manually entered
    if (isManual) {
      if (!manualAddress.houseNumber || !manualAddress.street || !manualAddress.city || !manualAddress.postcode) {
        setError('Please fill in all the fields for manual address.');
        return;
      }
    } else if (!selectedAddress) {
      setError('Please select an address from the list.');
      return;
    }

    console.log('Selected Address:', finalAddress); // Debug: Log the selected address
    router.push({
      pathname: '/donate/steps/step4', // Navigate to Step 4
      query: { type }, // Pass the donation type as a query parameter
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <h1 className="text-4xl text-white font-bold mb-4">Your Address Details</h1>
      <p className="text-white mb-6">Donation Type: {type}</p>

      {/* Toggle between Find Address and Enter Manually */}
      <div className="mb-6">
        <button
          onClick={() => setIsManual(false)} // Switch to Find Address mode
          className={`px-4 py-2 rounded-l-lg ${!isManual ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Find Address
        </button>
        <button
          onClick={() => setIsManual(true)} // Switch to Enter Manually mode
          className={`px-4 py-2 rounded-r-lg ${isManual ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Enter Manually
        </button>
      </div>

      <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        {!isManual ? (
          <>
            {/* Postcode Input */}
            <input
              type="text"
              placeholder="Enter Postcode"
              className="border px-4 py-2 rounded w-full"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />

            {/* Search Button */}
            <button
              type="button"
              onClick={handlePostcodeSearch}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Search
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Address Dropdown */}
            {addressList.length > 0 && (
              <select
                className="border px-4 py-2 rounded w-full"
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
              >
                <option value="">Select an Address</option>
                {addressList.map((address, index) => (
                  <option key={index} value={address.summaryline}>
                    {address.summaryline}
                  </option>
                ))}
              </select>
            )}
          </>
        ) : (
          <>
            {/* Manual Address Fields */}
            <input
              type="text"
              placeholder="House Number/Name"
              className="border px-4 py-2 rounded w-full"
              value={manualAddress.houseNumber}
              onChange={(e) => setManualAddress({ ...manualAddress, houseNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Street"
              className="border px-4 py-2 rounded w-full"
              value={manualAddress.street}
              onChange={(e) => setManualAddress({ ...manualAddress, street: e.target.value })}
            />
            <input
              type="text"
              placeholder="City"
              className="border px-4 py-2 rounded w-full"
              value={manualAddress.city}
              onChange={(e) => setManualAddress({ ...manualAddress, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postcode"
              className="border px-4 py-2 rounded w-full"
              value={manualAddress.postcode}
              onChange={(e) => setManualAddress({ ...manualAddress, postcode: e.target.value })}
            />
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/donate/steps/step2')} // Navigate back to Step 2
            className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}