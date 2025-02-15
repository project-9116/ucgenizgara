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
                <!-- <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08519813.png" alt="">
                <img src="../assets/img/products/Ocak_Üstü_Üçgen_Izgara.png" alt="">
                <img style="max-height: 600px;" src="../assets/img/products/Barbekü.png" alt=""> -->
                <img src="../assets/img/products/Üçgen_Izgara.png" alt="" style="width: 100%;">
                <figcaption>OCAK ÜSTÜ ÜÇGEN IZGARA</figcaption>
            </figure>
            <h1 style="font-size: 3em; text-align: center;">Sağlıklı beslenmeniz için tasarladık</h1>
        </article>
    </main>
</template>

<script>
export default {
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
    const slider = this.$el.querySelector('.slider');
    const slides = this.$el.querySelectorAll('.slider img');
    const slideCount = slides.length;
    
    this.goToSlide(this.currentIndex); // Başlangıçta ilk slaytı göster

    // Otomatik geçiş
    setInterval(this.nextSlide, this.interval);

    // Slider'ı dokunma olaylarıyla kontrol et
    slider.addEventListener('touchstart', this.handleTouchStart);
    slider.addEventListener('touchend', this.handleTouchEnd);

    // Optional: Navigation dots
    const navLinks = this.$el.querySelectorAll('.slider-nav a');
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        this.goToSlide(index);
      });
    });
  },
  methods: {
    goToSlide(index) {
      const slider = this.$el.querySelector('.slider');
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
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX; // Başlangıç noktasını al
    },
    handleTouchEnd(event) {
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
};
</script>

<style scoped>

/* Container for the slider */
.slider-wrapper {
    position: relative; /* Position relative to allow positioning of child elements */
    width: 80%; /* Set a fixed width of 80% of the container's width */
    max-width: 800px; /* Maximum width for larger screens */
    margin: 0 auto; /* Center the slider horizontally */
    overflow: hidden; /* Hide any overflowing content */
    padding: 0; /* Remove padding */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

/* Slider container */
.slider {
    display: flex; /* Use flexbox layout to align images */
    width: 100%; /* Slider takes up the full width of the slider-wrapper */
    transition: transform 1s ease; /* Animation for transform changes */
}

/* Styling for each image in the slider */
.slider img {
    flex: 0 0 100%; /* Each image takes up 100% of the slider width */
    width: 100%; /* Set image width to 100% */
    object-fit: cover; /* Images will cover the slider area, maintaining aspect ratio */
}

/* Navigation dots container */
.slider-nav {
    display: flex; /* Align dots horizontally */
    column-gap: 0.5rem; /* Space between dots */
    position: absolute; /* Position absolutely relative to the slider-wrapper */
    bottom: 1rem; /* Distance from the bottom of the slider-wrapper */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center the dots container */
    z-index: 1; /* Ensure navigation dots are above other content */
}

/* Styling for each navigation dot */
.slider-nav a {
    width: 0.5rem; /* Size of each dot */
    height: 0.5rem;
    border-radius: 50%; /* Make dots circular */
    background-color: #fff; /* White color for dots */
    opacity: 0.75; /* Slightly transparent dots */
    transition: opacity ease 250ms; /* Smooth transition for opacity changes */
}

/* Hover effect for navigation dots */
.slider-nav a:hover {
    opacity: 1; /* Fully opaque on hover */
}

/* Responsive design adjustments */
@media (max-width: 900px) {
    .slider-wrapper {
        width: 90%; /* Set width to 90% for medium screens */
    }
}

@media (max-width: 600px) {
    .slider-wrapper {
        width: 100%; /* Set width to 100% for small screens */
    }
    
    .slider {
        aspect-ratio: 4 / 3; /* Change aspect ratio for small screens */
    }

    .slider-nav {
        bottom: 0.5rem; /* Reduce space from the bottom on small screens */
    }

    .slider-nav a {
        width: 0.4rem; /* Smaller dots for small screens */
        height: 0.4rem;
    }
}

</style>