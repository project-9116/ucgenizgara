import { createRouter, createWebHistory } from 'vue-router';

// Ortak component'ler
const Header = () => import('../components/Header.vue');
const Footer = () => import('../components/Footer.vue');
const AsideStart = () => import('../components/AsideStart.vue');
const AsideEnd = () => import('../components/AsideEnd.vue');

// Dinamik Route oluşturma fonksiyonu
const createArticleRoute = (path: string, name: string, viewPath: string) => ({
  path,
  name,
  components: {
    default: () => import(`../views/articles/${viewPath}.vue`),  // Dinamik import
    AsideStart: AsideStart,
    AsideEnd: AsideEnd,
    Header: Header,
    Footer: Footer,
  },
});

const createSingleArticleRoute = (path: string, name: string, viewPath: string) => ({
  path,
  name,
  components: {
    default: () => import(`../views/articles/${viewPath}.vue`),  // Dinamik import
    Header: Header,
    Footer: Footer,
  },
});


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   components: {
    //     default: () => import('../views/Home.vue'),
    //     AsideStart: AsideStart,
    //     AsideEnd: AsideEnd,
    //     Header: Header,
    //     Footer: Footer,
    //   },
    // },
    {
        path: '/',
        name: 'Server is offline',
        components: {
          default: () => import('../views/Server.vue'),
        },
      },
    // Diğer route'ları dinamik oluşturma
    createSingleArticleRoute('/incele', 'Üçgen Izgara', 'UcgenIzgara'),
    createArticleRoute('/sagliklidir', 'Sağlıklıdır', 'Sagliklidir'),
    createArticleRoute('/ustun-lezzet-yaratir', 'Üstün Lezzet Yaratır', 'UstunLezzetYaratir'),
    createArticleRoute('/kokusuz-izgara', 'Kokusuz Izgara', 'kokusuz'),
    createArticleRoute('/kokusuz-ve-dumansiz', 'Kokusuz ve Dumansız Izgara', 'KokusuzVeDumansiz'),
    createArticleRoute('/cevreye-duyarlidir', 'Üçgen Izgara Çevreye Duyarlıdır', 'CevreyeDuyarlidir'),
    createArticleRoute('/ekonomiktir', 'Üçgen Izgara Ekonomiktir', 'Ekonomiktir'),
    createArticleRoute('/lezzet-onerilerimiz', 'Lezzet Önerilerimiz', 'LezzetOnerilerimiz'),
    createArticleRoute('/kullanimi', 'Üçgen Izgara Kullanımı', 'Kullanimi'),
    createArticleRoute('/nasil-temizlenir', 'Üçgen Izgara Nasıl Temizlenir?', 'NasilTemizlenir'),
    createArticleRoute('/aparatlar', 'Üçgen Izgara Aparatları', 'Aparatlar'),
    createArticleRoute('/granit-kapli-ucgen-izgara', 'Granit Kaplı Üçgen Izgara', 'GranitKapliUcgenIzgara'),
    createArticleRoute('/sik-sorulan-sorular', 'Sık Sorulan Sorular', 'SSS'),
    // İletişim ve Hakkımızda sayfaları farklı olarak tanımlandı
    {
      path: '/iletisim',
      name: 'Contact',
      components: {
        default: () => import('../views/About.vue'),
        Header: Header,
        Footer: Footer,
      },
    },
    {
      path: '/hakkimizda',
      name: 'Hakkımızda',
      components: {
        default: () => import('../views/Hakkimizda.vue'),
        Header: Header,
        Footer: Footer,
      },
    },
  ],
});

export default router;