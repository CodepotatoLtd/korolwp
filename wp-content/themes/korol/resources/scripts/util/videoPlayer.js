import videojs from 'video.js/dist/video.js';
import $ from "jquery";

class VideoPlayer {

    constructor()
    {

        console.log('----------- VideoPlayer')

        let videoCount = 0

        $('.bg-video-wrapper').each(function (  ) {

            //let $id = $('video', this).attr('id');
            let videoID = "video-" + videoCount

            $('video', this).attr("id",videoID);

            let player = videojs(videoID, {
                autoplay: true,
                preload: 'auto',
            });

            function delayPlay()
            {

                //console.log('id ---------- ', videoID, ' play')

                player.play();
            }

            setTimeout(delayPlay, 500)

            player.ready(function () {


                player.play();

            });

            player.on('ended', function () {

                player.play();

            })

            videoCount++

        });


    }
}

export default VideoPlayer
