import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('about.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      {/* YouTube Video Section */}
      <div className="mb-16">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/0CgWlP6-Y4M"
            title="Eventus Netanya"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Наша Команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Ирена Лившиц</h3>
                <p className="text-gray-600">Основатель проекта, Член городского совета Нетании</p>
              </div>
            </div>
            <p className="text-gray-700">
              Адвокат и общественный деятель, посвятивший себя развитию и улучшению жизни в Нетании.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Наша Миссия
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Объединение</h3>
            <p className="text-gray-600">
              Создание сильного и сплоченного сообщества жителей Нетании
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Развитие</h3>
            <p className="text-gray-600">
              Поддержка образовательных и культурных инициатив
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Информирование</h3>
            <p className="text-gray-600">
              Обеспечение жителей актуальной информацией и новостями
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
