<template>
    <footer>
        <div class="baş scrollbar">
            <div class="kartlar">
                <div class="hızlı-kart" v-for="link in menuLinks" :key="link.url">
                    <RouterLink :to="link.url">
                    <img :src="link.icon" alt="">
                    <span>
                        {{ link.text }}
                    </span>
                    </RouterLink>
                </div>
                <!-- <div class="hızlı-kart">
                    <img src="../assets/icons/stove.png" alt="">
                    <span>Ocaküstü</span>
                </div>
                <div class="hızlı-kart">
                    <img src="../assets/icons/leaf.png" alt="">
                    <span>Sağlıklı</span>
                </div>
                <div class="hızlı-kart">
                    <img src="../assets/icons/chef.png" alt="">
                    <span>Üstün Lezzet</span>
                </div>
                <div class="hızlı-kart">
                    <img src="../assets/icons/smell.png" alt="">
                    <span>Kokusuz</span>
                </div>
                <div class="hızlı-kart">
                    <img src="../assets/icons/free.png" alt="">
                    <span>Dumansız</span>
                </div>
                <div class="hızlı-kart">
                    <img src="../assets/icons/bio.png" alt="">
                    <span>Çevrecil</span>
                </div>
                <div class="hızlı-kart">
                    <img src="../assets/icons/reduction.png" alt="">
                    <span>Ekonomik</span>
                </div> -->
            </div>
            
        </div>
        <div class="ayak">
            <ul class="menu fat">
                <li style="font-size:clamp(22pt, 5vw, 52pt);">
                    <a href="#">SATIN AL</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface MenuLink {
  text: string;
  url: string;
  icon: string;
}

// Menü öğelerinin dizisini tanımlıyoruz
const menuLinks = ref<MenuLink[]>([
  { text: "Ocaküstü Izgara", url: "/granit-kapli-ucgen-izgara", icon:"/src/assets/icons/stove.png" },
  { text: "Sağlıklı Izgara", url: "/sagliklidir", icon: "/src/assets/icons/leaf.png" },
  { text: "Üstün Lezzet Izgarası", url: "/ustun-lezzet-yaratir", icon:"/src/assets/icons/chef.png" },
  { text: "Kokusuz Izgara", url: "/kokusuz-ve-dumansiz", icon:"/src/assets/icons/smell.png" },
  { text: "Dumansız Izgara", url: "/kokusuz-ve-dumansiz", icon:"/src/assets/icons/free.png" },
  { text: "Çevrecil Izgara", url: "/cevreye-duyarlidir", icon:"/src/assets/icons/bio.png" },
  { text: "Ekonomik Izgara", url: "/ekonomiktir", icon:"/src/assets/icons/reduction.png" },
//   { text: "Izgara Kullanımı", url: "/kullanimi", icon:"" },
//   { text: "Izgarada Lezzet Önerilerimiz", url: "/lezzet-onerilerimiz", icon:"" },
//   { text: "Izgara Nasıl Temizlenir?", url: "/nasil-temizlenir", icon:"" },
//   { text: "Izgara Aparatları", url: "/aparatlar", icon:"" },
//   { text: "Susuz", url: "/susuz" },
//   { text: "Mangalda", url: "/mangalda" },
//   { text: "Ocakta", url: "/ocakta" },
]);
</script>
<style>

.baş{
    display: flex;
    overflow: auto;
}

.kartlar{
    display: flex;
    align-self: center;
    align-items: stretch;
    gap: 10px;
    flex: 1;
}
.kartlar .hızlı-kart{
    background-color: #fff;
    border-radius: 8px;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    font-family: "Racing Sans One", serif;
  font-size: 12pt;
  font-weight: normal;
    gap: 8px;
    flex: 1;
}
.kartlar .hızlı-kart img{
    max-width: 60px;
    max-height: 60px;
}
.kartlar a{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;   
    gap:14px;
    color:#000;
    max-width: 100px;
}
.kartlar a:hover{
    display: flex;
    align-items: center;    
    gap:14px;
    color:#c00;
}

</style>