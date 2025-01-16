export default function EventCard({ event }) {
    return (
      <div className="bg-white bg-opacity-90 p-4 rounded shadow">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-600">{event.location}</p>
      </div>
    );
  }