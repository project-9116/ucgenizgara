<template>
    <main class="scrollbar">
        <article>
            <div class="video-background">
                <video autoplay muted loop class="video-background">
                    <source src="/videos/3128759-sd_960_540_25fps.mp4" type="video/mp4">
                    <!-- <source src="your-video.webm" type="video/webm"> -->
                    <!-- Eğer video oynatılamazsa bir yedek metin gösterin -->
                    Tarayıcınız video desteklemiyor.
                </video>
                <div class="overlay"></div>
            </div>
            <h1>ÜSTÜN LEZZET YARATIR</h1>
            <p>ÜÇGEN IZGARA’da pişen etlerin protein yapıları bozulmaz, besin değerleri kaybolmaz, suyu ve yağı içinde kalır. Kurumadan, yumuşacık ve benzersiz bir lezzetle pişer.</p>

<p>Geleneksel mangal alışkanlığımızda, tavuk göğsü, dana eti, yağsız balıklar (tereyağında kızartılan alabalık, yağda kızartılan palamut, yahnisi yapılan kefal ve tatlı su balıkları) mangal meraklıları tarafından pek tercih edilmez. Çünkü, ateşle direkt temas nedeniyle tavuk göğsü ve dana eti piştikçe sertleşir ve tadı bozulur, yağsız balıklar ise yavan olur.</p>

<p>Oysa ÜÇGEN IZGARA’da bu sorunlar yaşanmaz ve tüm bu ürünler kısa sürede, yumuşacık pişer, inanılmaz bir lezzet kazanır.</p>

<p>Yağlı olduğu için aşırı duman ve koku yapan hamsi ve sucuğu mangalda pişirmek maharet ister. Bu ürünleri ocakta pişirmek ise hiç tercih edilmez. ÜÇGEN IZGARA ile hamsi ve sucuğu, hem mangalda hem de mutfağınızda, set üstü ocağınızda mangal tadında pişirebilirsiniz.</p>

<p>Geleneksel ızgaralarda pişen etler için, is ve kömür partiküllerinden kaynaklanan acımsı tadı gidermek, yumuşak olmalarını sağlamak ve lezzeti arttırmak amacıyla onlarca değişik sos ve marine etme yöntemi önerilir. Oysa ÜÇGEN IZGARA’da sos kullanmaya gerek yoktur ve etin gerçek lezzetine ulaşılır.</p>

        </article>
    </main>
</template>

<style>
 .video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Video boyutunu ekrana göre ayarlamak için */
            z-index: -2; /* Videonun arka planda kalmasını sağlamak için */
            opacity: 0.2;
        }
.overlay{
    position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
background-image: radial-gradient(circle, #de375d, #d83459, #d33256, #cd2f52, #c82c4f, #c1284a, #b92445, #b22040, #a71a39, #9b1432, #900e2b, #850724);
            mix-blend-mode:overlay;
            z-index: -1;
}
</style>