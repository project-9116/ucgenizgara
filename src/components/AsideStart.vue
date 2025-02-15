<template>
    <aside class="start scrollbar">
        <nav>
            <ul class="aside-menu">
                <li v-for="link in menuLinks" :key="link.url">
                    <RouterLink :to="link.url">
                        {{ link.text }}</RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style>

ul.aside-menu{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0;
    margin: 0;
    font-family: "Racing Sans One", serif;
    font-size:20pt;
    font-weight: normal;
    text-transform: capitalize;
}
.aside-menu > li{
    list-style: none;
}
.aside-menu{
    font-family: "Racing Sans One", serif;
    
    
}
.aside-menu li:hover{
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
  { text: "Sağlıklı", url: "/sagliklidir" },
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