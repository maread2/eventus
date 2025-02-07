import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">{t('notFound.message', 'Page not found')}</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block"
        >
          {t('notFound.returnHome', 'Return to Home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
