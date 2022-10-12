<div id="p<?php echo $count;?>" class="card-project medoum" data-aos="fade-up"  data-aos-duration="750">

  <div class="image">

    <?php $img_id = get_post_thumbnail_id($post->ID);
    $image = wp_get_attachment_image_src($img_id, "featured-image");
    $alt_text = get_post_meta($img_id, '_wp_attachment_image_alt', true); ?>

    <img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>">

    <a class="overlay large text-white" href="<?php the_permalink($post->ID);?>">
      <div class="inner">
        <h3><?php echo get_the_title($post->ID);?></h3>
        <div class="medium sans"><p>View Project</p></div>
      </div>
    </a>

  </div>

  <div class="specification sans text-dark medium ">

    <div class="header p-b-mobile-element p-b-desktop-element p-t-mobile-element p-t-desktop-element">

    <h3 class="h4"><?php echo get_the_title($post->ID);?></h3>

    </div>

{{--    <?php $location = get_field('location', $post->ID);?>--}}
{{--    <?php $size = get_field('size', $post->ID);?>--}}
{{--    <?php $purchased = get_field('purchased', $post->ID);?>--}}
{{--    <?php $status = get_field('status', $post->ID);?>--}}
{{--    <p>--}}
{{--      <?php if ($location) { ?>--}}
{{--      <span class="strong">Location:</span> <?php echo $location;?><br>--}}
{{--      <?php }?>--}}
{{--      <?php if ($size) { ?>--}}
{{--      <span class="strong">Size:</span> <?php echo $size;?><br>--}}
{{--      <?php }?>--}}
{{--      <?php if ($purchased) { ?>--}}
{{--      <span class="strong">Purchased:</span> <?php echo $purchased;?><br>--}}
{{--      <?php }?>--}}
{{--      <?php if ($status) { ?>--}}
{{--      <span class="strong">Status:</span> <?php echo $status;?><br>--}}
{{--      <?php }?>--}}
{{--    </p>--}}
    <p>
    <a class="link strong" href="<?php the_permalink($post->ID);?>">

        <span class="mark">

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 36.6 36.6" style="enable-background:new 0 0 36.6 36.6;" xml:space="preserve">
            <style type="text/css">
              .st0{fill:#00184E;}
            </style>
                  <g id="Group_63" transform="translate(0 0)">
                    <g>
                      <g id="Group_6" transform="translate(0 0)">
                        <path id="Path_6" class="st0" d="M18.3,0C8.2,0,0,8.2,0,18.3s8.2,18.3,18.3,18.3s18.3-8.2,18.3-18.3v0C36.6,8.2,28.4,0,18.3,0
                     M2.7,18.3c0-8.6,7-15.6,15.6-15.6c4.4,0,8.5,1.8,11.5,5c-1.4-0.8-3-1.1-4.6-1.1C23.5,6.5,21.8,7,20.5,8c-2.8,2-3.9,5.3-6,10.6
                    c-3.2,8.3-4.9,10.4-7.3,10.6C4.3,26.3,2.7,22.4,2.7,18.3 M18.3,33.9c-3.9,0-7.7-1.5-10.6-4.2h0.2c2.7,0,4.5,0.3,5.6,0.3
                    c1.2,0.1,2.4-0.4,3.2-1.4c1.2-1.4,2.4-4.2,4.1-9.5C22.6,13.5,24.7,8,28.2,8c0.8,0,1.5,0.1,2.2,0.5c5.4,6.7,4.4,16.5-2.3,21.9
                    C25.4,32.7,21.9,33.9,18.3,33.9"/>
                      </g>
                    </g>
                  </g>
            </svg>

        </span> VIEW

    </a>
    </p>


  </div>

</div>
