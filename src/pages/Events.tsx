import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  const upcomingEvents = [
    {
      title: 'Культурный вечер',
      date: '2024-01-15',
      time: '19:00',
      location: 'Культурный центр Нетании',
      description:
        'Вечер культурного обмена с музыкой, поэзией и искусством.',
    },
    {
      title: 'Бизнес-нетворкинг',
      date: '2024-01-20',
      time: '18:30',
      location: 'Бизнес-центр Нетании',
      description:
        'Встреча предпринимателей и профессионалов для обмена опытом и установления деловых связей.',
    },
  ];

  const pastEvents = [
    {
      title: 'Новогодний праздник',
      date: '2023-12-31',
      location: 'Центральная площадь',
      description:
        'Празднование Нового года с развлекательной программой и фейерверком.',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Образовательный семинар',
      date: '2023-12-15',
      location: 'Городская библиотека',
      description:
        'Серия лекций по актуальным темам от ведущих специалистов.',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Предстоящие События
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
                    {new Date(event.date).toLocaleDateString('ru-RU')}
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
          Прошедшие События
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
                    {new Date(event.date).toLocaleDateString('ru-RU')}
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
