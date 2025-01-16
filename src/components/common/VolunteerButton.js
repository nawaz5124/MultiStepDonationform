export default function VolunteerButton({ label = "Volunteer Now", href = "/volunteer" }) {
  return (
    <a
      href={href}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 inline-block"
    >
      {label}
    </a>
  );
}