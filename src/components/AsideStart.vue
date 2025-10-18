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
  gap: 24px;
  padding: 0;
  margin: 0;
  font-family: "Racing Sans One", serif;
  font-size: 18pt;
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
text-shadow: 10px 7px #00000020;
    transform: scale(1.08, 1.3);
}
.aside-menu li:hover a[href], .aside-menu .router-link-active{
    color: yellow;

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
  { text: "Ocaküstü Izgara", url: "/granit-kapli-ucgen-izgara" },
  { text: "Sağlıklı Izgara", url: "/sagliklidir" },
  { text: "Üstün Lezzet Yaratan Izgara", url: "/ustun-lezzet-yaratir" },
  { text: "Kokusuz Izgara", url: "/kokusuz-ve-dumansiz" },
  { text: "Dumansız Izgara", url: "/kokusuz-ve-dumansiz" },
  { text: "Çevrecil Izgara", url: "/cevreye-duyarlidir" },
  { text: "Ekonomik Izgara", url: "/ekonomiktir" },
  { text: "Izgara Kullanımı", url: "/kullanimi" },
  { text: "Izgarada Lezzet Önerilerimiz", url: "/lezzet-onerilerimiz" },
  { text: "Izgara Nasıl Temizlenir?", url: "/nasil-temizlenir" },
  { text: "Izgara Aparatları", url: "/aparatlar" },
//   { text: "Susuz", url: "/susuz" },
//   { text: "Mangalda", url: "/mangalda" },
//   { text: "Ocakta", url: "/ocakta" },
]);









</script>