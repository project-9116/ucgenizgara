<script setup lang="ts">

</script>

<template>
  <div class="parent">
    <RouterView name="Header"></RouterView>
    <RouterView></RouterView>

    <RouterView name="Footer"></RouterView>
  </div>
  <main-x>
    <div class="logo">
                <RouterLink to="/"
                            style=" display: flex; 
                                    height: 100%; 
                                    align-items: center; 
                                    flex-direction: row; 
                                    height: 100%; 
                                    text-decoration: none; 
                                    color:aliceblue; 
                                    font-size:11pt; 
                                    font-weight: 600;">
                    <img src="./assets/img/logo.png" height="100%" alt="">
                    <h3>Üçgen Izgara</h3>
                </RouterLink>
            </div>
      Dik ekran bulunamıyor...
  </main-x>    
</template>

<!-- <RouterView name="AsideStart"></RouterView>
    <RouterView name="AsideEnd"></RouterView> -->