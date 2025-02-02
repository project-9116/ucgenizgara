import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: () => import('../views/Home.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/incele',
      name: 'Üçgen Izgara',
      components: {
        default: () => import('../views/articles/UcgenIzgara.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/sagliklidir',
      name: 'Sağlıklıdır',
      components: {
        default: () => import('../views/articles/Sagliklidir.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/ustun-lezzet-yaratir',
      name: 'Üstün Lezzet Yaratır',
      components: {
        default: () => import('../views/articles/UstunLezzetYaratir.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/kokusuz-izgara',
      name: 'Kokusuz Izgara',
      components: {
        default: () => import('../views/articles/kokusuz.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/kokusuz-ve-dumansiz',
      name: 'Kokusuz ve Dumansız Izgara',
      components: {
        default: () => import('../views/articles/KokusuzVeDumansiz.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/cevreye-duyarlidir',
      name: 'Üçgen Izgara Çevreye Duyarlıdır',
      components: {
        default: () => import('../views/articles/CevreyeDuyarlidir.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/ekonomiktir',
      name: 'Üçgen Izgara Ekonomiktir',
      components: {
        default: () => import('../views/articles/Ekonomiktir.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/lezzet-onerilerimiz',
      name: 'Lezzet Önerilerimiz',
      components: {
        default: () => import('../views/articles/LezzetOnerilerimiz.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/kullanimi',
      name: 'Üçgen Izgara Kullanımı',
      components: {
        default: () => import('../views/articles/Kullanimi.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/nasil-temizlenir',
      name: 'Üçgen Izgara Nasıl Temizlenir?',
      components: {
        default: () => import('../views/articles/NasilTemizlenir.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/aparatlar',
      name: 'Üçgen Izgara Aparatları',
      components: {
        default: () => import('../views/articles/Aparatlar.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/granit-kapli-ucgen-izgara',
      name: 'Granit Kaplı Üçgen Izgara',
      components: {
        default: () => import('../views/articles/GranitKapliUcgenIzgara.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/sik-sorulan-sorular',
      name: 'Sık Sorulan Sorular',
      components: {
        default: () => import('../views/articles/SSS.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/iletisim',
      name: 'Contact',
      components: {
        default: () => import('../views/About.vue'),
        AsideStart: () => import('../components/AsideStart.vue'),
        AsideEnd: () => import('../components/AsideEnd.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
    {
      path: '/hakkimizda',
      name: 'Hakkımızda',
      components: {
        default: () => import('../views/Hakkimizda.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue'),
      },
    },
  ],
  history: createWebHistory(),
})

export default router
