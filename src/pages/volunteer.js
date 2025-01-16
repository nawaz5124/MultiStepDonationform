import Header from '../components/layout/Header';

export default function VolunteerPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-custom py-12">
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Join Us as a Volunteer!</h1>
        <p className="text-lg text-center max-w-2xl">
          Become a part of our mission to bring positive change to the community.
          Your time and skills can make a significant difference!
        </p>
        <a
          href="/contact"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300"
        >
          Contact Us to Volunteer
        </a>
      </div>
      </div>
    </>
  );
}