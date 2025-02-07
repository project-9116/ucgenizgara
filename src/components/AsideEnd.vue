<template>
    <aside class="end" style="display: flex; flex-direction: column;">
        <div class="video-container">
            <video autoplay loop class="background-video">
                <source src="../assets/vid/1_30fps.mp4" type="video/mp4">
                <!-- <source src="https://videos.pexels.com/video-files/4143020/4143020-hd_1080_1920_30fps.mp4" type="video/mp4"> -->
                Tarayıcınız video desteklemiyor.
            </video>
        </div>
        <video width="100%" controls autoplay muted disablePictureInPicture controlsList="nodownload"
                poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236" style="border-radius: 4px;">
                <source src="../assets/vid/Üçgen_Izgara_Videosu.mp4"
                    type="video/mp4">
            </video>
        <ul class="menu fat">
            <li><RouterLink to="/incele">İncele</RouterLink></li>
            <li><a href="#">Satıcıyı Seç</a></li>
            <li><a href="#">...</a></li>
            <li style="font-size:52pt; margin-top: 20px;"><a href="#">SATIN AL</a></li>
        </ul>
    </aside>
</template>