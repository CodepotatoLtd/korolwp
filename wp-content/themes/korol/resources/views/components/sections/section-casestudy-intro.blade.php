<section class="section-casestudy-intro text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

  <div class="container">

    <div class="row justify-content-center">

      <div class="col-2">

        <?php
        $image = get_sub_field('icon');
        if( $image ): ?>

        <div class="image p-b-mobile-element p-b-desktop-element" data-aos="fade-in"  data-aos-duration="750">

          <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />

        </div>

        <?php endif; ?>

      </div>

    </div>

      <div class="row justify-content-center">

        <div class="col-12">

          <div class="medium text-center p-b-mobile-element p-b-desktop-element" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="200">

          <h1><?php echo get_sub_field('title')?></h1>

          </div>

        </div>


      <div class="col-xxl-9">

        <div class="medium" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="200">

          <?php echo get_sub_field('text')?>

          <?php $film = get_sub_field('film');?>

          <?php if ($film){ ?>

          <a class="film-link" target="_blank" href="<?php echo $film;?>">

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 36.6 36.6"  xml:space="preserve">
              <g id="Group_63" transform="translate(0 0)">
                <g>
                  <g id="Group_6" transform="translate(0 0)">
                    <path id="Path_6" class="mark-fill" d="M18.3,0C8.2,0,0,8.2,0,18.3s8.2,18.3,18.3,18.3s18.3-8.2,18.3-18.3v0C36.6,8.2,28.4,0,18.3,0
				 M2.7,18.3c0-8.6,7-15.6,15.6-15.6c4.4,0,8.5,1.8,11.5,5c-1.4-0.8-3-1.1-4.6-1.1C23.5,6.5,21.8,7,20.5,8c-2.8,2-3.9,5.3-6,10.6
				c-3.2,8.3-4.9,10.4-7.3,10.6C4.3,26.3,2.7,22.4,2.7,18.3 M18.3,33.9c-3.9,0-7.7-1.5-10.6-4.2h0.2c2.7,0,4.5,0.3,5.6,0.3
				c1.2,0.1,2.4-0.4,3.2-1.4c1.2-1.4,2.4-4.2,4.1-9.5C22.6,13.5,24.7,8,28.2,8c0.8,0,1.5,0.1,2.2,0.5c5.4,6.7,4.4,16.5-2.3,21.9
				C25.4,32.7,21.9,33.9,18.3,33.9"/>
                  </g>
                </g>
              </g>
</svg> <span><?php echo get_sub_field('film_text');?></span>

          </a>


          <?php }?>

        </div>

      </div>

    </div>

  </div>

</section>
