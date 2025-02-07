<template>
    <aside class="start scrollbar">
        <div class="aside-menu">
            <div v-for="link in menuLinks" :key="link.url">
                <RouterLink :to="link.url">
                    <h1>{{ link.text }}</h1></RouterLink>
            </div>
        </div>
    </aside>
</template>

<style>

.aside-menu > div{
    position: static;
}
.aside-menu h1{
    font-family: "Racing Sans One", serif;
    margin-bottom: 0px;
    font-size:22pt;
    font-weight: 400;
    text-transform: capitalize;
}
.aside-menu h1:hover{
    color: yellow;
    transform: scale(1.08, 1.2);
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

interface MenuLink {
  text: string;
  url: string;
}

// Menü öğelerinin dizisini tanımlıyoruz
const menuLinks = ref<MenuLink[]>([
  { text: "Ocak Üstü Izgara", url: "/granit-kapli-ucgen-izgara" },
  { text: "Sağlıklıdır", url: "/sagliklidir" },
  { text: "Üstün Lezzet Yaratır", url: "/ustun-lezzet-yaratir" },
  { text: "Kokusuz & Dumansız", url: "/kokusuz-ve-dumansiz" },
  { text: "Çevreye Duyarlıdır", url: "/cevreye-duyarlidir" },
  { text: "Ekonomiktir", url: "/ekonomiktir" },
  { text: "Kullanımı", url: "/kullanimi" },
  { text: "Lezzet Önerilerimiz", url: "/lezzet-onerilerimiz" },
  { text: "Nasıl Temizlenir?", url: "/nasil-temizlenir" },
  { text: "Aparatlar", url: "/aparatlar" },
//   { text: "Susuz", url: "/susuz" },
//   { text: "Mangalda", url: "/mangalda" },
//   { text: "Ocakta", url: "/ocakta" },
]);









</script>