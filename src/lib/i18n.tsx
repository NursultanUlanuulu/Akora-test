import { createContext, useContext, type ReactNode } from "react";

export type Lang = "ru" | "en" | "ky";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
  { code: "ky", label: "Кыргызча", short: "KY" },
];

export const LANG_PATHS: Record<Lang, string> = { ru: "/", en: "/en", ky: "/ky" };

export function localePath(lang: Lang) {
  return LANG_PATHS[lang];
}

type Dict = {
  nav: {
    about: string;
    services: string;
    process: string;
    gallery: string;
    faq: string;
    contact: string;
  };
  cta: {
    apply: string;
    explore: string;
    discover: string;
    consult: string;
    requestConsult: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    sub: string;
    programsLabel: string;
    programs: string[];
    note: string;
  };
  trust: {
    kicker: string;
    title1: string;
    title2: string;
    cards: { title: string; body: string }[];
  };
  about: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    cards: { title: string; body: string }[];
  };
  services: {
    kicker: string;
    title1: string;
    title2: string;
    items: { title: string; body: string }[];
  };
  process: {
    kicker: string;
    title1: string;
    title2: string;
    stepLabel: string;
    steps: { title: string; body: string }[];
  };
  testimonials: {
    kicker: string;
    title1: string;
    title2: string;
    sub: string;
    items: { name: string; score: string; country: string; uni: string; quote: string }[];
  };
  gallery: { kicker: string; title1: string; title2: string };
  partners: { kicker: string; items: string[] };
  faq: {
    kicker: string;
    title1: string;
    title2: string;
    sub: string;
    items: { q: string; a: string }[];
  };
  contact: {
    kicker: string;
    title1: string;
    title2: string;
    sub: string;
    office: string;
    phone: string;
    email: string;
    hours: string;
    officeVal: string;
    phoneVal: string;
    emailVal: string;
    hoursVal: string;
    formTitle: string;
    formSub: string;
    fields: { name: string; phone: string; email: string; service: string; message: string };
    validation: { required: string; email: string; consent: string };
    consent: string;
    submit: string;
    whatsappIntro: string;
    whatsappOpened: string;
    error: string;
  };
  footer: {
    tagline: string;
    explore: string;
    services: string;
    contact: string;
    rights: string;
    privacy: string;
    terms: string;
  };
};

const ru: Dict = {
  nav: {
    about: "О нас",
    services: "Услуги",
    process: "Процесс",
    gallery: "Галерея",
    faq: "Вопросы",
    contact: "Контакты",
  },
  cta: {
    apply: "Записаться",
    explore: "Программы",
    discover: "Узнать больше",
    consult: "Записаться на консультацию",
    requestConsult: "Запросить консультацию",
  },
  hero: {
    badge: "Официальный международный экзаменационный центр",
    title1: "Международное образование",
    title2: "начинается здесь.",
    sub: "Подготовка к IELTS, iTEP Academic, курсы английского языка, международная сертификация и образовательный консалтинг — по мировым стандартам.",
    programsLabel: "Программы",
    programs: [
      "Подготовка к IELTS",
      "Официальный iTEP Academic",
      "Курсы английского языка",
      "Образовательный консалтинг",
    ],
    note: "Официальный центр сдачи iTEP Academic · Mock-тесты в формате IELTS · Индивидуальные программы",
  },
  trust: {
    kicker: "Почему нам доверяют",
    title1: "Серьёзный международный",
    title2: "образовательный партнёр.",
    cards: [
      {
        title: "Официальный экзаменационный центр",
        body: "Зарегистрированный центр по приёму IELTS и iTEP Academic.",
      },
      {
        title: "Квалифицированные преподаватели",
        body: "Опытные педагоги с реальной экспертизой в международных экзаменах.",
      },
      {
        title: "Международные стандарты",
        body: "Программы и тестирование соответствуют мировым критериям качества.",
      },
      {
        title: "Персональное обучение",
        body: "Индивидуальные программы под ваши цели, уровень и сроки.",
      },
      {
        title: "Современная среда",
        body: "Комфортные пространства, созданные для концентрации и результата.",
      },
      {
        title: "Профессиональный консалтинг",
        body: "Сопровождение по экзаменам, поступлению и обучению за рубежом.",
      },
    ],
  },
  about: {
    kicker: "О ACORA",
    title1: "Международный образовательный центр, построенный на",
    title2: "качестве, честности и превосходстве.",
    body: "ACORA Education — международный образовательный центр, специализирующийся на подготовке к IELTS и iTEP Academic, обучении английскому языку, международной сертификации и образовательном консалтинге. Наша миссия — сделать международное образование, качественную языковую подготовку и профессиональное развитие доступными каждому.",
    cards: [
      {
        title: "Наша миссия",
        body: "Программы и сертификация мирового уровня в соответствии с международными стандартами.",
      },
      {
        title: "Наши ценности",
        body: "Профессионализм, качество, честность, ответственность и постоянный рост.",
      },
      {
        title: "Каждый студент",
        body: "Комфортная среда, знания, поддержка и возможности для успеха.",
      },
      {
        title: "Современные методики",
        body: "Актуальные методологии обучения и современные учебные материалы.",
      },
    ],
  },
  services: {
    kicker: "Услуги",
    title1: "Программы, ориентированные на",
    title2: "международный результат.",
    items: [
      {
        title: "Подготовка к IELTS",
        body: "Комплексные программы Academic и General Training для учёбы, работы и миграции.",
      },
      {
        title: "Подготовка к iTEP Academic",
        body: "Структурированная работа над 4 навыками и регулярная практика в формате экзамена.",
      },
      {
        title: "Официальный экзамен iTEP Academic",
        body: "Регистрация и проведение официального экзамена iTEP с международным признанием.",
      },
      {
        title: "Mock-тесты",
        body: "Полные симуляции IELTS и iTEP с детальным разбором и рекомендациями.",
      },
      {
        title: "Курсы английского",
        body: "От Beginner до Advanced — разговорный, академический и профессиональный английский.",
      },
      {
        title: "Индивидуальные занятия",
        body: "Персональные уроки под ваши цели, уровень и график.",
      },
      {
        title: "Образовательный консалтинг",
        body: "Помощь с экзаменами, регистрацией, выбором программ и обучением за рубежом.",
      },
      {
        title: "Международная сертификация",
        body: "Подготовка к сертификатам, признанным университетами и работодателями по всему миру.",
      },
    ],
  },
  process: {
    kicker: "Процесс обучения",
    title1: "От первой консультации",
    title2: "до сертификата.",
    stepLabel: "Этап",
    steps: [
      {
        title: "Консультация",
        body: "Начинаем с личной беседы, чтобы понять ваши цели и возможности.",
      },
      {
        title: "Диагностика",
        body: "Точный placement-тест для определения текущего уровня и цели.",
      },
      {
        title: "План обучения",
        body: "Персональная дорожная карта: навыки, материалы, этапы, сроки.",
      },
      {
        title: "Подготовка",
        body: "Структурированные занятия с проверенными методиками и опытными преподавателями.",
      },
      {
        title: "Mock-тесты",
        body: "Реалистичные симуляции с детальной обратной связью и рекомендациями.",
      },
      {
        title: "Официальный экзамен",
        body: "Регистрация и проведение официального экзамена IELTS или iTEP Academic.",
      },
      {
        title: "Сертификация",
        body: "Получение международно признанного сертификата и рекомендации по следующим шагам.",
      },
    ],
  },
  testimonials: {
    kicker: "Успех студентов",
    title1: "Результаты, которые открывают",
    title2: "реальные двери.",
    sub: "Реальные истории студентов ACORA, которые подготовились, сдали экзамены и поступили в ведущие университеты мира.",
    items: [
      {
        name: "Аида К.",
        score: "IELTS 7.5",
        country: "Кыргызстан → Великобритания",
        uni: "University of Manchester",
        quote:
          "Mock-тесты и персональный план сделали реальный экзамен привычным. Преподаватели давали именно то, чего мне не хватало.",
      },
      {
        name: "Данияр А.",
        score: "iTEP 5.4",
        country: "Кыргызстан → США",
        uni: "Arizona State University",
        quote:
          "Консалтинг ACORA превратил сложный процесс в простой. На экзамен я пришёл подготовленным и уверенным.",
      },
      {
        name: "Эльмира С.",
        score: "IELTS 8.0",
        country: "Кыргызстан → Канада",
        uni: "University of Toronto",
        quote:
          "Серьёзные преподаватели, серьёзная среда. Всё в ACORA с первого дня ощущается по-международному.",
      },
    ],
  },
  gallery: { kicker: "Галерея", title1: "Внутри", title2: "ACORA." },
  partners: {
    kicker: "Аккредитации",
    items: ["IELTS", "iTEP Academic", "Cambridge English", "British Council"],
  },
  faq: {
    kicker: "Вопросы",
    title1: "Ответы ещё",
    title2: "до вопросов.",
    sub: "Всё, что нужно знать о подготовке, тестировании и обучении с ACORA.",
    items: [
      {
        q: "Сколько времени занимает подготовка к IELTS?",
        a: "В зависимости от начального уровня и цели, большинство студентов готовятся 2–4 месяца. Точный маршрут мы составляем после диагностики.",
      },
      {
        q: "Можно ли сдать официальный iTEP Academic в ACORA?",
        a: "Да. ACORA — авторизованный центр iTEP Academic: регистрация, проведение и результаты — всё в нашем офисе.",
      },
      {
        q: "Какие уровни английского вы преподаёте?",
        a: "От Beginner (A1) до Advanced (C1+): разговорный, академический и профессиональный английский.",
      },
      {
        q: "Как записаться?",
        a: "Оставьте заявку через форму ниже или напишите нам в WhatsApp. Мы свяжемся и назначим консультацию.",
      },
      {
        q: "Есть ли индивидуальные занятия?",
        a: "Да — персональные уроки с полностью адаптированной программой под ваш уровень, цели и график.",
      },
    ],
  },
  contact: {
    kicker: "Свяжитесь с нами",
    title1: "Начните ваш",
    title2: "международный путь.",
    sub: "Оставьте сообщение — наши консультанты помогут сделать следующий шаг.",
    office: "Офис",
    phone: "Телефон / WhatsApp",
    email: "Email",
    hours: "Часы работы",
    officeVal:
      "ул. Бухобаева Молдоказы, 13, с. Джаны-Джер, Сокулукский район, Кыргызская Республика",
    phoneVal: "+996 550 878 512",
    emailVal: "acoraeducation@gmail.com",
    hoursVal: "Пн – Пт · 09:00 – 18:00",
    formTitle: "Заявка на консультацию",
    formSub: "После заполнения формы откроется WhatsApp с готовым сообщением.",
    fields: {
      name: "ФИО *",
      phone: "Телефон / WhatsApp *",
      email: "Email",
      service: "Интересующая услуга",
      message: "Как мы можем помочь?",
    },
    validation: {
      required: "Заполните это поле.",
      email: "Введите корректный email-адрес.",
      consent: "Подтвердите согласие на обработку заявки.",
    },
    consent: "Я соглашаюсь с",
    submit: "Продолжить в WhatsApp",
    whatsappIntro: "Новая заявка с сайта ACORA Education",
    whatsappOpened: "WhatsApp открыт — отправьте готовое сообщение, чтобы завершить заявку.",
    error: "Пожалуйста, заполните обязательные поля и подтвердите согласие.",
  },
  footer: {
    tagline: "Международное образование без компромиссов.",
    explore: "Разделы",
    services: "Услуги",
    contact: "Контакты",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Условия",
  },
};

const en: Dict = {
  nav: {
    about: "About",
    services: "Services",
    process: "Process",
    gallery: "Gallery",
    faq: "FAQ",
    contact: "Contact",
  },
  cta: {
    apply: "Apply Now",
    explore: "Explore Programs",
    discover: "Discover",
    consult: "Book a consultation",
    requestConsult: "Request a consultation",
  },
  hero: {
    badge: "Official International Examination Center",
    title1: "International Education",
    title2: "Starts Here.",
    sub: "Preparation for IELTS, iTEP Academic, English courses, international certification and educational consulting — delivered to global standards.",
    programsLabel: "Programs",
    programs: [
      "IELTS offical exam",
      "IELTS Preparation",
      "Official iTEP Academic",
      "English Language Courses",
      "Educational Consulting",
    ],
    note: "Official iTEP Academic testing center · IELTS-format Mock Tests · Personalised roadmaps",
  },
  trust: {
    kicker: "Why students trust us",
    title1: "A serious international",
    title2: "education partner.",
    cards: [
      {
        title: "Official Examination Center",
        body: "Registered center for IELTS and iTEP Academic testing.",
      },
      {
        title: "Qualified Teachers",
        body: "High-level educators with hands-on international exam expertise.",
      },
      {
        title: "International Standards",
        body: "Curriculum and testing aligned with global quality benchmarks.",
      },
      {
        title: "Personalized Learning",
        body: "Individual programs built around your goals, level and timeline.",
      },
      {
        title: "Modern Environment",
        body: "Contemporary facilities designed for focus and outcomes.",
      },
      {
        title: "Professional Consulting",
        body: "Guidance for exams, admissions and study-abroad decisions.",
      },
    ],
  },
  about: {
    kicker: "About ACORA",
    title1: "An international education center built on",
    title2: "quality, honesty and excellence.",
    body: "ACORA Education is an international education center specialising in preparation for IELTS and iTEP Academic exams, English language training, international certification and educational consulting. Our mission is to make international education, high-quality language preparation and professional development accessible to everyone.",
    cards: [
      {
        title: "Our Mission",
        body: "Deliver world-class programs and certification aligned with global standards.",
      },
      {
        title: "Core Values",
        body: "Professionalism, quality, honesty, responsibility and continuous growth.",
      },
      {
        title: "Every Student",
        body: "A comfortable environment with the knowledge, support and opportunities to succeed.",
      },
      {
        title: "Modern Methods",
        body: "Contemporary methodologies and up-to-date learning materials.",
      },
    ],
  },
  services: {
    kicker: "Services",
    title1: "Programs designed for",
    title2: "international outcomes.",
    items: [
      {
        title: "IELTS Preparation",
        body: "Comprehensive Academic & General Training programs for study, work and migration abroad.",
      },
      {
        title: "iTEP Academic Preparation",
        body: "Structured coverage of all four skills with regular practice in official test format.",
      },
      {
        title: "Official iTEP Academic Exam",
        body: "Registration and delivery of the official iTEP exam, recognised worldwide.",
      },
      {
        title: "Mock Tests",
        body: "Full IELTS & iTEP simulations with detailed analysis and expert recommendations.",
      },
      {
        title: "English Courses",
        body: "Beginner through Advanced — everyday, academic and professional English.",
      },
      {
        title: "Individual Lessons",
        body: "One-to-one training tailored to your goals, level and timeline.",
      },
      {
        title: "Educational Consulting",
        body: "Guidance on exams, registration, program selection and studying abroad.",
      },
      {
        title: "International Certification",
        body: "Preparation for certifications recognised by universities and employers globally.",
      },
    ],
  },
  process: {
    kicker: "Learning Process",
    title1: "From first conversation to",
    title2: "certification.",
    stepLabel: "Step",
    steps: [
      {
        title: "Consultation",
        body: "We start with a personal conversation to understand your goals and constraints.",
      },
      {
        title: "Assessment",
        body: "A precise placement test to benchmark your current level and target.",
      },
      {
        title: "Study Plan",
        body: "A tailored roadmap covering skills, materials, milestones and timeline.",
      },
      {
        title: "Preparation",
        body: "Structured lessons with proven methodologies and expert instructors.",
      },
      {
        title: "Mock Tests",
        body: "Realistic simulations with detailed feedback and next-step recommendations.",
      },
      {
        title: "Official Exam",
        body: "Registration and delivery of your official IELTS or iTEP Academic test.",
      },
      {
        title: "Certification",
        body: "Receive your internationally recognised certificate — and next-step guidance.",
      },
    ],
  },
  testimonials: {
    kicker: "Student Success",
    title1: "Results that open",
    title2: "real doors.",
    sub: "Real journeys from ACORA students who prepared, tested and moved on to leading universities abroad.",
    items: [
      {
        name: "Aida K.",
        score: "IELTS 7.5",
        country: "Kyrgyzstan → UK",
        uni: "University of Manchester",
        quote:
          "The mock tests and personal roadmap made the real exam feel familiar. My teachers pushed me exactly where I needed it.",
      },
      {
        name: "Daniyar A.",
        score: "iTEP 5.4",
        country: "Kyrgyzstan → USA",
        uni: "Arizona State University",
        quote:
          "ACORA's consulting made a confusing process feel simple. I walked into the exam prepared and confident.",
      },
      {
        name: "Elmira S.",
        score: "IELTS 8.0",
        country: "Kyrgyzstan → Canada",
        uni: "University of Toronto",
        quote:
          "Serious teachers, serious environment. Everything about ACORA felt international from day one.",
      },
    ],
  },
  gallery: { kicker: "Gallery", title1: "Inside", title2: "ACORA." },
  partners: {
    kicker: "Accreditations",
    items: ["IELTS", "iTEP Academic", "Cambridge English", "British Council"],
  },
  faq: {
    kicker: "FAQ",
    title1: "Answers, before you",
    title2: "ask.",
    sub: "Everything you need to know about preparing, testing and studying with ACORA.",
    items: [
      {
        q: "How long does IELTS preparation take?",
        a: "Depending on your starting level and target score, most students prepare in 2–4 months. We design a precise roadmap after a placement assessment.",
      },
      {
        q: "Can I take the official iTEP Academic exam at ACORA?",
        a: "Yes. ACORA is an authorised iTEP Academic testing center — registration, testing and results are handled end-to-end at our office.",
      },
      {
        q: "What English levels do you offer?",
        a: "We teach from Beginner (A1) through Advanced (C1+), covering everyday communication, academic English and professional English tracks.",
      },
      {
        q: "How do I register?",
        a: "Submit the contact form below or message us on WhatsApp. Our team will reply and schedule a personal consultation.",
      },
      {
        q: "Do you offer individual lessons?",
        a: "Yes — personal one-to-one lessons are available with fully customised programs based on your level, goals and schedule.",
      },
    ],
  },
  contact: {
    kicker: "Get in touch",
    title1: "Begin your",
    title2: "international journey.",
    sub: "Send us a message and our education advisors will guide you through the next step.",
    office: "Office",
    phone: "Phone / WhatsApp",
    email: "Email",
    hours: "Business Hours",
    officeVal: "Bukhobaeva Moldokazy str. 13, Dzhany-Dzher, Sokuluk district, Kyrgyz Republic",
    phoneVal: "+996 550 878 512",
    emailVal: "acoraeducation@gmail.com",
    hoursVal: "Mon – Fri · 09:00 – 18:00",
    formTitle: "Apply for a consultation",
    formSub: "After completing the form, WhatsApp will open with a ready-to-send message.",
    fields: {
      name: "Full name *",
      phone: "Phone / WhatsApp *",
      email: "Email",
      service: "Service of interest",
      message: "How can we help you?",
    },
    validation: {
      required: "Please complete this field.",
      email: "Enter a valid email address.",
      consent: "Please confirm your consent to process this request.",
    },
    consent: "I agree to the",
    submit: "Continue in WhatsApp",
    whatsappIntro: "New request from the ACORA Education website",
    whatsappOpened: "WhatsApp is open — send the prepared message to complete your request.",
    error: "Please complete the required fields and consent.",
  },
  footer: {
    tagline: "International education, without compromise.",
    explore: "Explore",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
};

const ky: Dict = {
  nav: {
    about: "Биз жөнүндө",
    services: "Кызматтар",
    process: "Процесс",
    gallery: "Галерея",
    faq: "Суроолор",
    contact: "Байланыш",
  },
  cta: {
    apply: "Катталуу",
    explore: "Программалар",
    discover: "Көбүрөөк билүү",
    consult: "Консультацияга катталуу",
    requestConsult: "Консультация суроо",
  },
  hero: {
    badge: "Расмий эл аралык экзамен борбору",
    title1: "Эл аралык билим",
    title2: "ушул жерден башталат.",
    sub: "IELTS, iTEP Academic даярдоо, англис тили курстары, эл аралык сертификация жана билим берүү консалтинги — дүйнөлүк стандарттарда.",
    programsLabel: "Программалар",
    programs: [
      "IELTS даярдоо",
      "Расмий iTEP Academic",
      "Англис тили курстары",
      "Билим берүү консалтинги",
    ],
    note: "Расмий iTEP Academic экзамен борбору · IELTS форматындагы Mock-тесттер · Жеке программалар",
  },
  trust: {
    kicker: "Эмне үчүн бизге ишенишет",
    title1: "Олуттуу эл аралык",
    title2: "билим берүү өнөктөшү.",
    cards: [
      {
        title: "Расмий экзамен борбору",
        body: "IELTS жана iTEP Academic экзамендери үчүн катталган борбор.",
      },
      {
        title: "Квалификациялуу мугалимдер",
        body: "Эл аралык экзамендерде тажрыйбасы бар жогорку деңгээлдеги мугалимдер.",
      },
      {
        title: "Эл аралык стандарттар",
        body: "Программалар жана тестирлөө дүйнөлүк сапат критерийлерине шайкеш.",
      },
      {
        title: "Жеке окутуу",
        body: "Максаттарыңыз, деңгээлиңиз жана мөөнөтүңүзгө ылайык программалар.",
      },
      {
        title: "Заманбап чөйрө",
        body: "Топтолуу жана натыйжа үчүн жасалган ыңгайлуу мейкиндиктер.",
      },
      {
        title: "Кесипкөй консалтинг",
        body: "Экзамендер, тапшыруу жана чет өлкөдө окуу боюнча коштоо.",
      },
    ],
  },
  about: {
    kicker: "ACORA жөнүндө",
    title1: "Сапатка, чынчылдыкка жана мыктылыкка",
    title2: "негизделген эл аралык борбор.",
    body: "ACORA Education — IELTS жана iTEP Academic экзамендерине даярдоого, англис тилин окутууга, эл аралык сертификацияга жана билим берүү консалтингине адистешкен эл аралык билим борбору. Биздин миссиябыз — эл аралык билимди, сапаттуу тил даярдыгын жана кесипкөй өнүгүүнү ар бирине жеткиликтүү кылуу.",
    cards: [
      {
        title: "Биздин миссия",
        body: "Дүйнөлүк стандарттарга шайкеш программалар жана сертификация.",
      },
      {
        title: "Негизги баалуулуктар",
        body: "Кесипкөйлүк, сапат, чынчылдык, жоопкерчилик жана өнүгүү.",
      },
      {
        title: "Ар бир студент",
        body: "Ыңгайлуу чөйрө, билим, колдоо жана ийгилик үчүн мүмкүнчүлүктөр.",
      },
      { title: "Заманбап методдор", body: "Жаңы методологиялар жана заманбап окуу материалдары." },
    ],
  },
  services: {
    kicker: "Кызматтар",
    title1: "Эл аралык натыйжаларга",
    title2: "багытталган программалар.",
    items: [
      {
        title: "IELTS даярдоо",
        body: "Окуу, иш жана миграция үчүн Academic жана General Training толук программалары.",
      },
      {
        title: "iTEP Academic даярдоо",
        body: "Төрт көндүмдү структуралуу камтуу жана расмий формат боюнча практика.",
      },
      {
        title: "Расмий iTEP Academic экзамени",
        body: "Дүйнө жүзү тааныган расмий iTEP экзаменин каттоо жана өткөрүү.",
      },
      {
        title: "Mock-тесттер",
        body: "IELTS жана iTEP толук симуляциялары, деталдуу талдоо жана сунуштар менен.",
      },
      {
        title: "Англис тили курстары",
        body: "Beginner'дан Advanced'ка чейин — күнүмдүк, академиялык жана кесиптик англис.",
      },
      {
        title: "Жеке сабактар",
        body: "Максатыңызга, деңгээлиңизге жана убактыңызга ылайыкталган сабактар.",
      },
      {
        title: "Билим берүү консалтинги",
        body: "Экзамендер, каттоо, программа тандоо жана чет өлкөдө окуу боюнча жардам.",
      },
      {
        title: "Эл аралык сертификация",
        body: "Университеттер жана иш берүүчүлөр тааныган сертификаттарга даярдоо.",
      },
    ],
  },
  process: {
    kicker: "Окуу процесси",
    title1: "Биринчи консультациядан",
    title2: "сертификатка чейин.",
    stepLabel: "Этап",
    steps: [
      { title: "Консультация", body: "Максаттарыңызды түшүнүү үчүн жеке маек менен башталат." },
      { title: "Диагностика", body: "Учурдагы деңгээлиңизди аныктаган placement-тест." },
      {
        title: "Окуу планы",
        body: "Көндүмдөр, материалдар, этаптар жана мөөнөттөр — жеке жол картасы.",
      },
      { title: "Даярдык", body: "Тажрыйбалуу мугалимдер менен структуралуу сабактар." },
      { title: "Mock-тесттер", body: "Реалдуу симуляциялар, деталдуу пикир жана сунуштар." },
      {
        title: "Расмий экзамен",
        body: "IELTS же iTEP Academic расмий экзаменин каттоо жана өткөрүү.",
      },
      { title: "Сертификация", body: "Эл аралык таанылган сертификат жана кийинки кадамдар." },
    ],
  },
  testimonials: {
    kicker: "Студенттердин ийгилиги",
    title1: "Чыныгы эшиктерди",
    title2: "ачкан натыйжалар.",
    sub: "ACORA студенттеринин чыныгы окуялары — даярдык, экзамен, дүйнөлүк университеттерге тапшыруу.",
    items: [
      {
        name: "Айда К.",
        score: "IELTS 7.5",
        country: "Кыргызстан → Улуу Британия",
        uni: "University of Manchester",
        quote:
          "Mock-тесттер жана жеке план менен экзамен тааныш болуп калды. Мугалимдер керектүү жерге басым жасашты.",
      },
      {
        name: "Данияр А.",
        score: "iTEP 5.4",
        country: "Кыргызстан → АКШ",
        uni: "Arizona State University",
        quote:
          "ACORA консалтинги татаал процессти жөнөкөйлөштүрдү. Экзаменге даяр жана ишенимдүү бардым.",
      },
      {
        name: "Эльмира С.",
        score: "IELTS 8.0",
        country: "Кыргызстан → Канада",
        uni: "University of Toronto",
        quote: "Олуттуу мугалимдер, олуттуу чөйрө. ACORA биринчи күндөн эле эл аралык сезилди.",
      },
    ],
  },
  gallery: { kicker: "Галерея", title1: "ACORA", title2: "ичинде." },
  partners: {
    kicker: "Аккредитациялар",
    items: ["IELTS", "iTEP Academic", "Cambridge English", "British Council"],
  },
  faq: {
    kicker: "Суроолор",
    title1: "Сурай электе",
    title2: "жооптор.",
    sub: "ACORA менен даярдык, тестирлөө жана окуу жөнүндө бардык маалымат.",
    items: [
      {
        q: "IELTS даярдоо канча убакыт алат?",
        a: "Деңгээлиңиз жана максатыңызга жараша, көпчүлүк студенттер 2–4 айда даярданат. Диагностикадан кийин так план түзүлөт.",
      },
      {
        q: "ACORA'да расмий iTEP Academic экзаменин тапшырса болобу?",
        a: "Ооба. ACORA — ыйгарым укуктуу iTEP Academic борбору: каттоо, экзамен жана натыйжалар — баары биздин офисте.",
      },
      {
        q: "Кайсы англис деңгээлдерин окутасыздар?",
        a: "Beginner (A1)'ден Advanced (C1+)'ке чейин: күнүмдүк, академиялык жана кесиптик англис.",
      },
      {
        q: "Кантип катталса болот?",
        a: "Төмөнкү форма аркылуу же WhatsApp'тан жазыңыз — биз жооп берип, консультацияны белгилейбиз.",
      },
      {
        q: "Жеке сабактар барбы?",
        a: "Ооба — деңгээлиңизге, максатыңызга жана графигиңизге ылайыкталган жеке сабактар.",
      },
    ],
  },
  contact: {
    kicker: "Байланышуу",
    title1: "Эл аралык жолуңузду",
    title2: "баштаңыз.",
    sub: "Билдирүү жөнөтүңүз — консультанттарыбыз кийинки кадам үчүн жардам берет.",
    office: "Офис",
    phone: "Телефон / WhatsApp",
    email: "Email",
    hours: "Иш убакыты",
    officeVal: "Бухобаева Молдоказы көч. 13, Жаны-Жер айылы, Сокулук району, Кыргыз Республикасы",
    phoneVal: "+996 550 878 512",
    emailVal: "acoraeducation@gmail.com",
    hoursVal: "Дүй – Жума · 09:00 – 18:00",
    formTitle: "Консультацияга арыз",
    formSub: "Форманы толтургандан кийин даяр билдирүү менен WhatsApp ачылат.",
    fields: {
      name: "Аты-жөнү *",
      phone: "Телефон / WhatsApp *",
      email: "Email",
      service: "Кызыктырган кызмат",
      message: "Кантип жардам бере алабыз?",
    },
    validation: {
      required: "Бул талааны толтуруңуз.",
      email: "Туура email дарегин жазыңыз.",
      consent: "Арызды иштетүүгө макулдукту ырастаңыз.",
    },
    consent: "Мен төмөнкү документке макулмун:",
    submit: "WhatsApp'та улантуу",
    whatsappIntro: "ACORA Education сайтынан жаңы арыз",
    whatsappOpened: "WhatsApp ачылды — арызды аяктоо үчүн даяр билдирүүнү жөнөтүңүз.",
    error: "Милдеттүү талааларды толтуруп, макулдугуңузду ырастаңыз.",
  },
  footer: {
    tagline: "Компромисссиз эл аралык билим.",
    explore: "Бөлүмдөр",
    services: "Кызматтар",
    contact: "Байланыш",
    rights: "Бардык укуктар корголгон.",
    privacy: "Купуялык саясаты",
    terms: "Шарттар",
  },
};

export const DICTS: Record<Lang, Dict> = { ru, en, ky };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const setLang = (l: Lang) => {
    if (l !== initialLang && typeof window !== "undefined") window.location.assign(localePath(l));
  };
  return (
    <I18nCtx.Provider value={{ lang: initialLang, setLang, t: DICTS[initialLang] }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  const c = useContext(I18nCtx);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}
