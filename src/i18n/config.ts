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
      events: {
        upcoming: {
          title: 'Предстоящие События',
          cultural: {
            title: 'Культурный вечер',
            location: 'Культурный центр Нетании',
            description: 'Вечер культурного обмена с музыкой, поэзией и искусством.'
          },
          business: {
            title: 'Бизнес-нетворкинг',
            location: 'Бизнес-центр Нетании',
            description: 'Встреча предпринимателей и профессионалов для обмена опытом и установления деловых связей.'
          }
        },
        past: {
          title: 'Прошедшие События',
          newyear: {
            title: 'Новогодний праздник',
            location: 'Центральная площадь',
            description: 'Празднование Нового года с развлекательной программой и фейерверком.'
          },
          seminar: {
            title: 'Образовательный семинар',
            location: 'Городская библиотека',
            description: 'Серия лекций по актуальным темам от ведущих специалистов.'
          }
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
        follow: 'Следите за нами',
        info: {
          title: 'Контактная информация'
        },
        form: {
          title: 'Напишите нам',
          name: 'Имя',
          email: 'Email',
          message: 'Сообщение',
          submit: 'Отправить'
        }
      },
      privacy: {
        title: 'Политика конфиденциальности',
        date: 'Последнее обновление: 1 января 2024',
        content: {
          intro: 'Мы уважаем вашу конфиденциальность и стремимся защитить ваши личные данные. Эта политика объясняет, как мы собираем, используем и защищаем вашу информацию.',
          sections: {
            collection: {
              title: 'Сбор данных',
              text: 'Мы собираем только необходимую информацию для предоставления наших услуг и улучшения вашего опыта.'
            },
            use: {
              title: 'Использование данных',
              text: 'Ваши данные используются для предоставления услуг, улучшения нашего сервиса и коммуникации с вами.'
            },
            protection: {
              title: 'Защита данных',
              text: 'Мы применяем современные меры безопасности для защиты ваших данных.'
            }
          }
        }
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
      events: {
        upcoming: {
          title: 'אירועים קרובים',
          cultural: {
            title: 'ערב תרבות',
            location: 'מרכז התרבות נתניה',
            description: 'ערב של חילופי תרבות עם מוזיקה, שירה ואמנות.'
          },
          business: {
            title: 'נטוורקינג עסקי',
            location: 'מרכז העסקים נתניה',
            description: 'מפגש יזמים ואנשי מקצוע לחילופי ידע ויצירת קשרים עסקיים.'
          }
        },
        past: {
          title: 'אירועים קודמים',
          newyear: {
            title: 'חגיגת השנה החדשה',
            location: 'כיכר העיר',
            description: 'חגיגת השנה החדשה עם תכנית בידור וזיקוקים.'
          },
          seminar: {
            title: 'סמינר חינוכי',
            location: 'ספריית העיר',
            description: 'סדרת הרצאות בנושאים אקטואליים ממומחים מובילים.'
          }
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
        follow: 'עקבו אחרינו',
        info: {
          title: 'פרטי התקשרות'
        },
        form: {
          title: 'כתבו לנו',
          name: 'שם',
          email: 'דוא"ל',
          message: 'הודעה',
          submit: 'שלח'
        }
      },
      privacy: {
        title: 'מדיניות פרטיות',
        date: 'עדכון אחרון: 1 בינואר 2024',
        content: {
          intro: 'אנו מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.',
          sections: {
            collection: {
              title: 'איסוף מידע',
              text: 'אנו אוספים רק את המידע הנחוץ לצורך מתן השירותים שלנו ושיפור החוויה שלך.'
            },
            use: {
              title: 'שימוש במידע',
              text: 'המידע שלך משמש למתן שירותים, שיפור השירות שלנו ותקשורת איתך.'
            },
            protection: {
              title: 'הגנת מידע',
              text: 'אנו מיישמים אמצעי אבטחה מתקדמים להגנה על המידע שלך.'
            }
          }
        }
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
      events: {
        upcoming: {
          title: 'Upcoming Events',
          cultural: {
            title: 'Cultural Evening',
            location: 'Netanya Cultural Center',
            description: 'An evening of cultural exchange featuring music, poetry, and art.'
          },
          business: {
            title: 'Business Networking',
            location: 'Netanya Business Center',
            description: 'A gathering of entrepreneurs and professionals for knowledge exchange and business connections.'
          }
        },
        past: {
          title: 'Past Events',
          newyear: {
            title: 'New Year Celebration',
            location: 'City Square',
            description: 'New Year celebration with entertainment program and fireworks.'
          },
          seminar: {
            title: 'Educational Seminar',
            location: 'City Library',
            description: 'A series of lectures on current topics by leading experts.'
          }
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
        follow: 'Follow Us',
        info: {
          title: 'Contact Information'
        },
        form: {
          title: 'Write to Us',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send'
        }
      },
      privacy: {
        title: 'Privacy Policy',
        date: 'Last updated: January 1, 2024',
        content: {
          intro: 'We respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your information.',
          sections: {
            collection: {
              title: 'Data Collection',
              text: 'We only collect information necessary to provide our services and improve your experience.'
            },
            use: {
              title: 'Data Use',
              text: 'Your data is used to provide services, improve our service, and communicate with you.'
            },
            protection: {
              title: 'Data Protection',
              text: 'We implement advanced security measures to protect your data.'
            }
          }
        }
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
