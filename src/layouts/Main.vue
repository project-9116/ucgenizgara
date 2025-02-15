<template>
    <div class="Main-Layout">
      <!-- HeaderMenu Component'i burada kullanılacak -->
      <HeaderMenu />
      
      <div>
        <main>
          <slot></slot> <!-- Burada sayfa içeriği görünecek -->
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderMenu from './HeaderMenu.vue'; // HeaderMenu component'ini import ediyoruz
  
  export default {
    name: 'AdminLayout',
    components: {
      HeaderMenu, // HeaderMenu component'ini burada kaydediyoruz
    },
  };
  </script>
  
  <style scoped>
  .admin-layout {
    display: flex;
    flex-direction: column;
  }
  
  .admin-content {
    padding: 20px;
  }
  </style>
  