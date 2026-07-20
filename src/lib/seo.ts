import { type Lang, localePath } from "./i18n";

export const SITE_URL = "https://akora.education";

const pageSeo: Record<Lang, { title: string; description: string; locale: string }> = {
  ru: {
    title: "AKORA Education — IELTS, английский язык и образование за рубежом",
    description:
      "AKORA Education в Кыргызстане: подготовка к IELTS и iTEP Academic, курсы английского языка, международная сертификация и консультации по образованию.",
    locale: "ru_KG",
  },
  en: {
    title: "AKORA Education — IELTS, English Courses & International Education",
    description:
      "AKORA Education in Kyrgyzstan: IELTS and iTEP Academic preparation, English courses, international certification and education consulting.",
    locale: "en_US",
  },
  ky: {
    title: "AKORA Education — IELTS, англис тили жана эл аралык билим берүү",
    description:
      "Кыргызстандагы AKORA Education: IELTS жана iTEP Academic даярдыгы, англис тили курстары, эл аралык сертификаттоо жана билим берүү боюнча консультация.",
    locale: "ky_KG",
  },
};

export function localeHead(lang: Lang) {
  const seo = pageSeo[lang];
  const url = `${SITE_URL}${localePath(lang)}`;

  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "AKORA Education" },
      { property: "og:locale", content: seo.locale },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ru", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/en` },
      { rel: "alternate", hrefLang: "ky", href: `${SITE_URL}/ky` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              name: "AKORA Education",
              url,
              description: seo.description,
              inLanguage: lang,
              email: "acoraeducation@gmail.com",
              telephone: "+996 550 878 512",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bukhobaeva Moldokazy str. 13",
                addressLocality: "Dzhany-Dzher, Sokuluk district",
                addressCountry: "KG",
              },
              sameAs: ["https://www.instagram.com/acora_education"],
            },
            {
              "@type": "WebSite",
              name: "AKORA Education",
              url: SITE_URL,
              inLanguage: ["ru", "en", "ky"],
            },
          ],
        }),
      },
    ],
  };
}
