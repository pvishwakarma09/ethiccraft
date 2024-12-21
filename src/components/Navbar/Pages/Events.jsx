import React from "react";

const events = [
  {
    id: 1,
    date: "2024-04-15",
    title: "Leadership Workshop",
    description:
      "Join us for an intensive workshop on ethical leadership and decision-making.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
  },
  {
    id: 2,
    date: "2024-05-01",
    title: "Community Festival",
    description:
      "Celebrate diversity and unity at our annual community festival.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80",
  },
  {
    id: 3,
    date: "2024-05-15",
    title: "Youth Summit",
    description:
      "Empowering the next generation of leaders through interactive sessions.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80",
  },
];

const Events = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Upcoming <span className="text-green-600">Events</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Join us in our upcoming events and be part of the change we're
          creating together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium text-blue-500">
                    {event.date}
                  </span>
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 text-sm bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
