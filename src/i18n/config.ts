import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        events: 'События',
        contact: 'Контакты',
      },
      hero: {
        title: 'Объединяем жителей Нетании',
        subtitle: 'Создаем активное сообщество через встречи, дискуссии, подкасты и культурные мероприятия. Присоединяйтесь к нам!',
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
        title: 'О нас',
        description: 'Мы - динамичное сообщество жителей Нетании, объединенное общими целями и стремлением к развитию города. Наша платформа предлагает регулярные встречи, увлекательные дискуссии, информативные подкасты, актуальные новости, разнообразные культурные мероприятия и возможности для волонтерства. Под руководством Ирены Лившиц, члена городского совета Нетании и опытного адвоката, мы создаем пространство для общения, роста и взаимной поддержки.',
      },
      contact: {
        title: 'Свяжитесь с нами',
        follow: 'Следите за нами',
      },
      footer: {
        copyright: '© 2024 Eventus. Все права защищены.',
      },
      privacy: {
        title: 'Политика конфиденциальности',
        date: 'Дата вступления в силу: 1 января 2024',
        content: {
          intro: 'Добро пожаловать в Eventus ("мы", "наш" или "нас"). Мы уважаем вашу конфиденциальность и стремимся защитить ваши личные данные. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при посещении нашего сайта.',
          sections: {
            dataCollection: {
              title: '1. Сбор данных',
              content: 'Мы можем собирать следующие типы информации:',
              personal: {
                title: 'a. Личная информация:',
                items: [
                  'Имя, адрес электронной почты, номер телефона и другие контактные данные, предоставленные при регистрации или обращении к нам.',
                  'Платежная информация для транзакций.'
                ]
              },
              nonPersonal: {
                title: 'b. Неличная информация:',
                items: [
                  'Тип браузера, IP-адрес, тип устройства и поведение при просмотре на нашем сайте.',
                  'Файлы cookie и другие технологии отслеживания (см. Раздел 6).'
                ]
              }
            },
            dataUse: {
              title: '2. Использование собранных данных',
              content: 'Мы используем собранные данные для следующих целей:',
              items: [
                'Предоставление и улучшение наших услуг.',
                'Обработка платежей и управление транзакциями.',
                'Общение с вами об обновлениях, акциях или обслуживании клиентов.',
                'Обеспечение безопасности веб-сайта и обнаружение мошенничества или несанкционированного доступа.',
                'Соблюдение юридических обязательств.'
              ]
            },
            dataSharing: {
              title: '3. Передача данных',
              content: 'Мы не продаем ваши личные данные. Мы можем делиться вашими данными с:',
              items: [
                'Поставщиками услуг и партнерами, которые помогают в работе нашего сайта и услуг.',
                'Правоохранительными или регулирующими органами, когда этого требует закон.',
                'В случаях передачи бизнеса, таких как слияние или поглощение.'
              ]
            },
            rights: {
              title: '4. Ваши права',
              content: 'В соответствии с израильским Законом о защите конфиденциальности и применимыми нормами, у вас есть следующие права:',
              items: [
                'Доступ: Запросить копию личных данных, которые мы храним о вас.',
                'Исправление: Запросить исправление неточных или неполных данных.',
                'Удаление: Запросить удаление ваших личных данных, где это юридически допустимо.',
                'Возражение: Возражать против определенных типов обработки данных.'
              ],
              contact: 'Для реализации этих прав, пожалуйста, свяжитесь с нами по адресу info@eventus.co.il'
            },
            security: {
              title: '5. Безопасность данных',
              content: 'Мы применяем соответствующие технические и организационные меры для защиты ваших личных данных. Хотя мы стремимся обеспечить безопасность вашей информации, ни один метод передачи через Интернет не является на 100% безопасным.'
            },
            cookies: {
              title: '6. Файлы cookie и технологии отслеживания',
              content: 'Мы используем файлы cookie для улучшения вашего опыта и сбора аналитики. Вы можете управлять настройками cookie через настройки вашего браузера. Для получения дополнительной информации см. нашу Политику использования файлов cookie.'
            },
            retention: {
              title: '7. Хранение данных',
              content: 'Мы храним ваши личные данные столько времени, сколько необходимо для целей, указанных в этой политике, если более длительный период хранения не требуется по закону.'
            },
            international: {
              title: '8. Международная передача данных',
              content: 'Если ваши данные передаются за пределы Израиля, мы обеспечиваем соответствующие меры защиты, такие как договорные положения или соблюдение международных стандартов, таких как GDPR.'
            },
            thirdParty: {
              title: '9. Ссылки на сторонние сайты',
              content: 'Наш сайт может содержать ссылки на сторонние веб-сайты. Мы не несем ответственности за их политику конфиденциальности. Пожалуйста, ознакомьтесь с их политикой перед предоставлением ваших данных.'
            },
            changes: {
              title: '10. Изменения в этой политике',
              content: 'Мы можем периодически обновлять эту политику конфиденциальности. Изменения будут публиковаться на этой странице с обновленной датой вступления в силу.'
            },
            contact: {
              title: '11. Свяжитесь с нами',
              content: 'Если у вас есть вопросы или замечания по поводу этой политики конфиденциальности или ваших данных, пожалуйста, свяжитесь с нами:',
              items: [
                'Email: info@eventus.co.il',
                'Телефон: +972 XX XXX XXXX',
                'Адрес: Нетания, Израиль'
              ]
            }
          }
        }
      }
    }
  },
  he: {
    translation: {
      nav: {
        home: 'דף הבית',
        about: 'אודות',
        events: 'אירועים',
        contact: 'צור קשר',
      },
      hero: {
        title: 'התאחדות תושבי נתניה',
        subtitle: 'מפגשים, דיונים, פודקאסטים, חדשות, אירועי תרבות וחינוך',
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
        title: 'אודות',
        description: 'התאחדות תושבי נתניה. מפגשים, דיונים, פודקאסטים, משאבי חדשות, אירועי תרבות וחינוך, יוזמות התנדבות ונטוורקינג עסקי. מייסדת הפרויקט - חברת מועצת העיר נתניה ועורכת דין אירנה ליבשיץ.',
      },
      contact: {
        title: 'צור קשר',
        follow: 'עקבו אחרינו',
      },
      footer: {
        copyright: '© 2024 Eventus. כל הזכויות שמורות.',
      },
      privacy: {
        title: 'מדיניות פרטיות',
        date: 'תאריך תחילת תוקף: 1 בינואר 2024',
        content: {
          intro: 'ברוכים הבאים ל-Eventus ("אנחנו", "שלנו"). אנו מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך בעת ביקור באתר שלנו.',
          dataCollection: '1. איסוף נתונים',
          dataTypes: 'אנו עשויים לאסוף את סוגי המידע הבאים:',
          personalInfo: 'א. מידע אישי:',
          personalDetails: 'שם, כתובת דואר אלקטרוני, מספר טלפון ופרטי קשר אחרים שסופקו בעת הרישום או יצירת קשר.',
          paymentInfo: 'מידע על תשלומים לעסקאות.',
          nonPersonalInfo: 'ב. מידע לא אישי:',
          browserInfo: 'סוג דפדפן, כתובת IP, סוג מכשיר והתנהגות גלישה באתר שלנו.',
          cookies: 'קובצי cookie וטכנולוגיות מעקב אחרות.',
          dataUse: '2. שימוש בנתונים שנאספו',
          usageDetails: 'אנו משתמשים בנתונים שנאספו למטרות הבאות:',
          services: 'אספקה ושיפור השירותים שלנו.',
          payments: 'עיבוד תשלומים וניהול עסקאות.',
          communication: 'תקשורת איתך לגבי עדכונים, מבצעים או שירות לקוחות.',
          security: 'אבטחת האתר וזיהוי הונאות.',
          legal: 'עמידה בדרישות החוק.'
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        events: 'Events',
        contact: 'Contact',
      },
      hero: {
        title: 'Netanya Residents Association',
        subtitle: 'Meetings, discussions, podcasts, news, educational and cultural events',
      },
      features: {
        networking: {
          title: 'Meetings & Networking',
          description: 'Regular meetings and opportunities for business networking'
        },
        podcasts: {
          title: 'Podcasts & News',
          description: 'Latest news and interesting podcasts about life in Netanya'
        },
        events: {
          title: 'Cultural Events',
          description: 'Various cultural and educational events'
        }
      },
      about: {
        title: 'About Us',
        description: 'Association of Netanya residents. Meetings, discussions, podcasts, news resources, educational and cultural events, volunteer initiatives, and business networking. The project\'s founder is Netanya City Council member and attorney, Irena Livshits.',
      },
      contact: {
        title: 'Contact Us',
        follow: 'Follow Us',
      },
      footer: {
        copyright: '© 2024 Eventus. All rights reserved.',
      },
      privacy: {
        title: 'Privacy Policy',
        date: 'Effective Date: January 1, 2024',
        content: {
          intro: 'Welcome to Eventus ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.',
          dataCollection: '1. Data Collection',
          dataTypes: 'We may collect the following types of information:',
          personalInfo: 'a. Personal Information:',
          personalDetails: 'Name, email address, phone number, and other contact details provided when registering or contacting us.',
          paymentInfo: 'Payment information for transactions.',
          nonPersonalInfo: 'b. Non-Personal Information:',
          browserInfo: 'Browser type, IP address, device type, and browsing behavior on our site.',
          cookies: 'Cookies and other tracking technologies.',
          dataUse: '2. Use of Collected Data',
          usageDetails: 'We use the collected data for the following purposes:',
          services: 'Providing and improving our services.',
          payments: 'Processing payments and managing transactions.',
          communication: 'Communicating with you about updates, promotions, or customer service.',
          security: 'Ensuring website security and detecting fraud.',
          legal: 'Complying with legal obligations.'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
