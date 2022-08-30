<section class="section-projects p-b-mobile-section p-b-desktop-section">

  <div class="container">

      <div class="row justify-content-center">

        <div class="col-xxl-11 p-t-mobile-intro p-t-desktop-intro">

          <div class="row justify-content-center g-10">

            <?php $count = 0;?>
            <?php
            $posts = get_sub_field('projects');
            if ($posts) : ?>

            <?php foreach ($posts as $post) : // variable must be called $post (IMPORTANT) ?>

            <?php setup_postdata($post); ?>
             <div class="col-6">

               @include('components.cards.card-project')

              </div>
                <?php $count ++;?>

                <?php endforeach; ?>

            <?php endif; ?>

          </div>

       </div>

    </div>

  </div>

</section>
