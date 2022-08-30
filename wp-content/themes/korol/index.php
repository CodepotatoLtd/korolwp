<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.typekit.net/hgu2xcl.css">
    <?php wp_head(); ?>

    <?php $options = get_fields("options"); ?>

    <?php if ($options["map_api"]){ ?>

      <!-- has map stuff  -->

      <script>

        var data = {};
        data.apiLoaded= false;
        data.map_styles = <?php echo $options["map_styles"];?>;

        function mapAPILoaded(){
          data.apiLoaded = true;

          console.log("****************** api loaded");
        }

      </script>

      <script
        src="https://maps.googleapis.com/maps/api/js?key=<?php echo $options["map_api"];?>&callback=mapAPILoaded">
      </script>

    <?php } else { ?>

      <!-- no map stuff  -->
    <?php }?>
  </head>

  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>

    <div id="app">
      <?php echo view(app('sage.view'), app('sage.data'))->render(); ?>
    </div>

    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
  </body>
</html>
