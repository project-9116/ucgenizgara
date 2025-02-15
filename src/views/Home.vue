<template>
    <main class="scrollbar">
      <div class="slider-wrapper">
        <div class="slider">
            <img id="slide-1" src="../assets/img/slider/N11-1.jpg" alt="Photo 1" />
            <img id="slide-2" src="../assets/img/slider/N11-2.jpg" alt="Photo 2" />
          <img id="slide-3" src="../assets/img/slider/N11-3.jpg" alt="Photo 3" />
          <img id="slide-4" src="../assets/img/slider/N11-4.jpg" alt="Photo 4" />
          <img id="slide-5" src="../assets/img/slider/N11-5.jpg" alt="Photo 5" />
          <img id="slide-6" src="../assets/img/slider/N11-6.jpg" alt="Photo 6" />
          <img id="slide-7" src="../assets/img/slider/N11-7.jpg" alt="Photo 7" />
          <img id="slide-8" src="../assets/img/slider/N11-8.jpg" alt="Photo 8" />
          <img id="slide-9" src="../assets/img/slider/N11-9.jpg" alt="Photo 9" />
        </div>
        <div class="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
          <a href="#slide-5"></a>
          <a href="#slide-6"></a>
          <a href="#slide-7"></a>
          <a href="#slide-8"></a>
          <a href="#slide-9"></a>
        </div>
      </div>
  
      <article style="margin: auto; display:none">
        <figure>
          <img src="../assets/img/products/Üçgen_Izgara.png" alt="" style="width: 100%;" />
          <figcaption>OCAK ÜSTÜ ÜÇGEN IZGARA</figcaption>
        </figure>
        <h1 style="font-size: 3em; text-align: center;">Sağlıklı beslenmeniz için tasarladık</h1>
      </article>
    </main>
  </template>
  
  <script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  data() {
    return {
      slides: [ // Bu, slider'daki resimlerin listesini tutar
        'N11-1.jpg',
        'N11-2.jpg',
        'N11-3.jpg',
        'N11-4.jpg',
        'N11-5.jpg',
        'N11-6.jpg',
        'N11-7.jpg',
        'N11-8.jpg',
        'N11-9.jpg',
      ],
      currentIndex: 0, // Başlangıçtaki index
      startX: 0, // Başlangıç koordinatı (swipe için)
      endX: 0, // Bitiş koordinatı (swipe için)
      interval: 3000, // Slayt geçiş süresi
    };
  },
  mounted() {
    const slider = this.$el.querySelector('.slider') as HTMLElement;
    const slides = this.$el.querySelectorAll('.slider img');
    const slideCount = slides.length;

    this.goToSlide(this.currentIndex); // Başlangıçta ilk slaytı göster

    // Otomatik geçiş
    setInterval(() => this.nextSlide(), this.interval);

    // Slider'ı dokunma olaylarıyla kontrol et
    slider.addEventListener('touchstart', this.handleTouchStart);
    slider.addEventListener('touchend', this.handleTouchEnd);

    // Optional: Navigation dots
    const navLinks = this.$el.querySelectorAll('.slider-nav a');
    navLinks.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (event: Event) => {
        event.preventDefault();
        this.goToSlide(index);
      });
    });
  },
  methods: {
    goToSlide(index: number) {
      const slider = this.$el.querySelector('.slider') as HTMLElement;
      const slides = this.$el.querySelectorAll('.slider img');
      const offset = slides[0].clientWidth * index;
      slider.style.transform = `translateX(-${offset}px)`; // Slaytı göster
      this.currentIndex = index; // Mevcut index'i güncelle
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.goToSlide(this.currentIndex);
    },
    previousSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.goToSlide(this.currentIndex);
    },
    handleTouchStart(event: TouchEvent) {
      this.startX = event.touches[0].clientX; // Başlangıç noktasını al
    },
    handleTouchEnd(event: TouchEvent) {
      this.endX = event.changedTouches[0].clientX; // Bitiş noktasını al
      const diffX = this.endX - this.startX;
      if (Math.abs(diffX) > 50) { // Eğer kaydırma mesafesi yeterliyse
        if (diffX > 0) {
          this.previousSlide(); // Sağ kaydır, önceki slayta git
        } else {
          this.nextSlide(); // Sol kaydır, sonraki slayta git
        }
      }
    },
  },
});
</script>

  
  <style scoped>
  /* Container for the slider */
  .slider-wrapper {
    position: relative;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Slider container */
  .slider {
    display: flex;
    width: 100%;
    transition: transform 1s ease;
  }
  
  /* Styling for each image in the slider */
  .slider img {
    flex: 0 0 100%;
    width: 100%;
    object-fit: cover;
  }
  
  /* Navigation dots container */
  .slider-nav {
    display: flex;
    column-gap: 0.5rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  
  /* Styling for each navigation dot */
  .slider-nav a {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.75;
    transition: opacity ease 250ms;
  }
  
  /* Hover effect for navigation dots */
  .slider-nav a:hover {
    opacity: 1;
  }
  
  /* Responsive design adjustments */
  @media (max-width: 900px) {
    .slider-wrapper {
      width: 90%;
    }
  }
  
  @media (max-width: 600px) {
    .slider-wrapper {
      width: 100%;
    }
  
    .slider {
      aspect-ratio: 4 / 3;
    }
  
    .slider-nav {
      bottom: 0.5rem;
    }
  
    .slider-nav a {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  </style>
  