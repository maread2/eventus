import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  const upcomingEvents = [
    {
      title: t('events.upcoming.cultural.title'),
      date: '2024-01-15',
      time: '19:00',
      location: t('events.upcoming.cultural.location'),
      description: t('events.upcoming.cultural.description'),
    },
    {
      title: t('events.upcoming.business.title'),
      date: '2024-01-20',
      time: '18:30',
      location: t('events.upcoming.business.location'),
      description: t('events.upcoming.business.description'),
    },
  ];

  const pastEvents = [
    {
      title: t('events.past.newyear.title'),
      date: '2023-12-31',
      location: t('events.past.newyear.location'),
      description: t('events.past.newyear.description'),
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: t('events.past.seminar.title'),
      date: '2023-12-15',
      location: t('events.past.seminar.location'),
      description: t('events.past.seminar.description'),
      imageUrl: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('events.upcoming.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="text-primary font-semibold">
                    {new Date(event.date).toLocaleDateString()}
                    <div className="text-sm text-gray-600">{event.time}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('events.past.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="text-gray-600">
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
