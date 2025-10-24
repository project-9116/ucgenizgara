<template>
    <aside class="end scrollbar" style="display: flex; flex-direction: column;">
        <div class="video-container">
            <video autoplay muted loop class="background-video">
                <source src="../assets/vid/1_30fps.mp4" type="video/mp4">
                <!-- <source src="https://videos.pexels.com/video-files/4143020/4143020-hd_1080_1920_30fps.mp4" type="video/mp4"> -->
                Tarayıcınız video desteklemiyor.
            </video>
        </div>
        <!-- <video 
            width="100%" 
            controls 
            autoplay 
            disablePictureInPicture 
            controlsList="nodownload"
            poster="../assets/img/watch_video.jpg" 
            style="border-radius: 8px;">
                <source src="../assets/vid/Üçgen_Izgara_Videosu.mp4"
                    type="video/mp4">
        </video> -->
        <!-- <ul class="menu fat">
            <li><RouterLink to="/incele">İncele</RouterLink></li>
            <li><a href="#">Satıcıyı Seç</a></li>
            <li><a href="#">...</a></li>
            <li style="font-size:52pt; margin-top: 20px;"><a href="#">SATIN AL</a></li>
        </ul> -->
    </aside>
</template>