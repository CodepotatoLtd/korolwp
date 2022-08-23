<section  id="header-image" class="header-image large h-fullscreen-mobile h-fullscreen-desktop">

  <?php
  $image = get_sub_field('image');

  if ($image) {?>
  <div class="image">

    <img src="<?php echo esc_url($image['sizes']['acf-large-hero']); ?>" alt="<?php echo $image['alt']; ?>" />

  </div>

  <?php  } ?>

</section>
<div id="content"></div>
