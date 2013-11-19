<?php
/**
 * 404.php is used when your server reaches a 404 error page
 *
 * @package WordPress
 * @subpackage VamosFalar
 */
?>

<?php get_header(); ?>

<div id="post">

    <div id="page-heading">
        <h1><?php _e( 'Erro 404', 'wpex' ); ?></h1>
        <p><?php _e( 'Infelizmente a página que você tentou acessar não existe. Nos desculpe. =(', 'wpex' ); ?></p>
    </div><!-- #page-heading -->

</div><!-- #post -->

<?php get_footer(); ?>