import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t('about.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t('about.description')}
        </p>
      </div>

      {/* YouTube Video Section */}
      <div className="mb-20">
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/0CgWlP6-Y4M"
            title="Eventus Netanya"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {t('about.mission.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t('about.mission.unity.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.mission.unity.description')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t('about.mission.development.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.mission.development.description')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t('about.mission.information.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.mission.information.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {t('about.team.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {t('about.team.leader.name')}
              </h3>
              <p className="text-primary font-medium mb-4">
                {t('about.team.leader.position')}
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-center">
              {t('about.team.leader.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
