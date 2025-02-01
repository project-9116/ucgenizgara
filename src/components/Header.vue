<template>
    <header>
        <div class="left">
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
                    <img src="../assets/img/logo.png" height="100%" alt="">
                    <h3>ÜÇGEN IZGARA</h3>
                </RouterLink>
            </div>
        </div>
        <div class="center">
            <Menu></Menu>
        </div>
        <div class="right">
            <button>YAKINDA</button>
        </div>
    </header>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
</script>