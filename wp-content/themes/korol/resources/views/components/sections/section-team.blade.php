<section class="section-team p-b-mobile-section p-b-desktop-section">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-11 col-xxl-11 p-t-mobile-intro p-t-desktop-intro">

          <div class="members">

          <div class="row justify-content-center g-10">

            <?php
            $posts = get_sub_field('members');
            if ($posts) : ?>

            <?php foreach ($posts as $post) : // variable must be called $post (IMPORTANT) ?>

            <?php setup_postdata($post); ?>
             <div class="col-lg-6">

               <div class="member medium text-dark sans" data-aos="fade-up"  data-aos-duration="750">

                 <div class="image p-b-mobile-intro p-b-desktop-intro">

                   <?php $img_id = get_post_thumbnail_id($post->ID);
                   $image = wp_get_attachment_image_src($img_id, "team-image");
                   $alt_text = get_post_meta($img_id , '_wp_attachment_image_alt', true); ?>

                   <img class="gray" src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>">

                 </div>
{{--                  <div class="name">--}}
{{--                    <h4><?php the_field('name', $post->ID);?></h4>--}}
{{--                  </div>--}}
{{--                 <p class="h4 light"><?php the_field('position', $post->ID);?></p>--}}


                 <div class="title-block p-t-mobile-element p-t-desktop-element p-b-mobile-element p-b-desktop-element">

                   <div class="info">
                     <div class="name">
                       <h4><?php the_field('name', $post->ID);?></h4>
                     </div>
                     <p class="h4 light"><?php the_field('position', $post->ID);?></p>
                   </div>

                 </div>

                 <div class="show-bio m-t-desktop-element">
                   <svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M240 352V272H160C151.2 272 144 264.8 144 256C144 247.2 151.2 240 160 240H240V160C240 151.2 247.2 144 256 144C264.8 144 272 151.2 272 160V240H352C360.8 240 368 247.2 368 256C368 264.8 360.8 272 352 272H272V352C272 360.8 264.8 368 256 368C247.2 368 240 360.8 240 352zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/></svg>
                   <svg class="minus hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 240C360.8 240 368 247.2 368 256C368 264.8 360.8 272 352 272H160C151.2 272 144 264.8 144 256C144 247.2 151.2 240 160 240H352zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/></svg>
                 </div>

                 <div class="bio hidden p-t-mobile-element p-t-desktop-element">
                  <?php the_field('bio', $post->ID);?>
                 </div>



               </div>

              </div>
                <?php endforeach; ?>

            <?php endif; ?>

          </div>

          </div>

       </div>

    </div>

  </div>

</section>
