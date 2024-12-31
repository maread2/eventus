import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        events: 'События',
        contact: 'Контакты'
      },
      hero: {
        title: 'Объединяем жителей Нетании',
        subtitle: 'Создаем активное сообщество через встречи, дискуссии, подкасты и культурные мероприятия. Присоединяйтесь к нам!'
      },
      features: {
        networking: {
          title: 'Встречи и Нетворкинг',
          description: 'Еженедельные встречи и мероприятия для расширения деловых связей и обмена опытом'
        },
        podcasts: {
          title: 'Подкасты и Новости',
          description: 'Увлекательные подкасты и самые свежие новости о жизни, событиях и возможностях в Нетании'
        },
        events: {
          title: 'Культурные События',
          description: 'Яркие культурные мероприятия, образовательные семинары и творческие встречи для всей семьи'
        }
      },
      about: {
        title: 'О нашем сообществе',
        description: 'Мы создаем динамичное и открытое сообщество, объединяющее активных жителей Нетании. Наша миссия – развитие города и улучшение качества жизни каждого жителя через инновационные проекты, культурные инициативы и социальные программы.',
        mission: {
          title: 'Наша миссия',
          unity: {
            title: 'Объединение',
            description: 'Создание крепкого и поддерживающего сообщества, где каждый житель Нетании может найти единомышленников и реализовать свой потенциал'
          },
          development: {
            title: 'Развитие',
            description: 'Поддержка образовательных и культурных инициатив, способствующих личностному и профессиональному росту членов сообщества'
          },
          information: {
            title: 'Информирование',
            description: 'Предоставление актуальной и полезной информации о городских событиях, возможностях и инициативах через современные медиа-платформы'
          }
        },
        team: {
          title: 'Наша команда',
          leader: {
            name: 'Ирена Лившиц',
            position: 'Основатель проекта, Член городского совета Нетании',
            description: 'Опытный адвокат и общественный деятель с многолетним стажем работы в сфере городского развития и социальных проектов. Посвятила свою деятельность созданию инновационных решений для улучшения жизни горожан.'
          }
        }
      },
      contact: {
        title: 'Свяжитесь с нами',
        follow: 'Следите за нами'
      },
      footer: {
        copyright: '© 2024 Eventus. Все права защищены.',
        follow: 'Следите за нами',
        address: 'Нетания, Израиль',
        zip: '4250000'
      }
    }
  },
  he: {
    translation: {
      nav: {
        home: 'דף הבית',
        about: 'אודות',
        events: 'אירועים',
        contact: 'צור קשר'
      },
      hero: {
        title: 'התאחדות תושבי נתניה',
        subtitle: 'מפגשים, דיונים, פודקאסטים, חדשות, אירועי תרבות וחינוך'
      },
      features: {
        networking: {
          title: 'מפגשים ונטוורקינג',
          description: 'מפגשים קבועים והזדמנויות לפיתוח קשרים עסקיים'
        },
        podcasts: {
          title: 'פודקאסטים וחדשות',
          description: 'חדשות עדכניות ופודקאסטים מעניינים על החיים בנתניה'
        },
        events: {
          title: 'אירועי תרבות',
          description: 'מגוון אירועי תרבות וחינוך'
        }
      },
      about: {
        title: 'אודות הקהילה שלנו',
        description: 'אנו יוצרים קהילה דינמית ופתוחה המאחדת את תושבי נתניה הפעילים. המשימה שלנו היא לפתח את העיר ולשפר את איכות החיים של כל תושב דרך פרויקטים חדשניים, יוזמות תרבות ותוכניות חברתיות.',
        mission: {
          title: 'המשימה שלנו',
          unity: {
            title: 'אחדות',
            description: 'יצירת קהילה חזקה ותומכת בה כל תושב נתניה יכול למצוא שותפים לדרך ולממש את הפוטנציאל שלו'
          },
          development: {
            title: 'התפתחות',
            description: 'תמיכה ביוזמות חינוכיות ותרבותיות המקדמות צמיחה אישית ומקצועית של חברי הקהילה'
          },
          information: {
            title: 'מידע',
            description: 'אספקת מידע עדכני ושימושי על אירועים עירוניים, הזדמנויות ויוזמות באמצעות פלטפורמות מדיה מודרניות'
          }
        },
        team: {
          title: 'הצוות שלנו',
          leader: {
            name: 'אירנה ליבשיץ',
            position: 'מייסדת הפרויקט, חברת מועצת העיר נתניה',
            description: 'עורכת דין ופעילה חברתית מנוסה עם שנים רבות של ניסיון בתחום הפיתוח העירוני והפרויקטים החברתיים. הקדישה את פעילותה ליצירת פתרונות חדשניים לשיפור חיי התושבים.'
          }
        }
      },
      contact: {
        title: 'צור קשר',
        follow: 'עקבו אחרינו'
      },
      footer: {
        copyright: '© 2024 Eventus. כל הזכויות שמורות.',
        follow: 'עקבו אחרינו',
        address: 'נתניה, ישראל',
        zip: '4250000'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        events: 'Events',
        contact: 'Contact'
      },
      hero: {
        title: 'Netanya Residents Association',
        subtitle: 'Building community through meetings, discussions, podcasts, and cultural events'
      },
      features: {
        networking: {
          title: 'Meetings & Networking',
          description: 'Regular gatherings and opportunities for meaningful business connections'
        },
        podcasts: {
          title: 'Podcasts & News',
          description: 'Engaging podcasts and latest updates about life and opportunities in Netanya'
        },
        events: {
          title: 'Cultural Events',
          description: 'Diverse cultural and educational events for the whole family'
        }
      },
      about: {
        title: 'About Our Community',
        description: 'We are building a dynamic and inclusive community that unites active residents of Netanya. Our mission is to develop the city and enhance the quality of life for every resident through innovative projects, cultural initiatives, and social programs.',
        mission: {
          title: 'Our Mission',
          unity: {
            title: 'Unity',
            description: 'Creating a strong and supportive community where every Netanya resident can find like-minded individuals and realize their potential'
          },
          development: {
            title: 'Development',
            description: 'Supporting educational and cultural initiatives that foster personal and professional growth of community members'
          },
          information: {
            title: 'Information',
            description: 'Providing timely and valuable information about city events, opportunities, and initiatives through modern media platforms'
          }
        },
        team: {
          title: 'Our Team',
          leader: {
            name: 'Irena Livshits',
            position: 'Project Founder, Netanya City Council Member',
            description: 'An experienced attorney and community leader with years of expertise in urban development and social projects. Dedicated to creating innovative solutions for improving residents\' lives.'
          }
        }
      },
      contact: {
        title: 'Contact Us',
        follow: 'Follow Us'
      },
      footer: {
        copyright: '© 2024 Eventus. All rights reserved.',
        follow: 'Follow Us',
        address: 'Netanya, Israel',
        zip: '4250000'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
