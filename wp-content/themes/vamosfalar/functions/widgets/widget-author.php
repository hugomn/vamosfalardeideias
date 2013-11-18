<?php
/**
 * Author widget class
 *
 * @since 2.8.0
 */
class wpex_author extends WP_Widget {

	function __construct() {
		$widget_ops = array('classname' => 'widget_text widget_author', 'description' => __('Author bio'));
		$control_ops = array('width' => 400, 'height' => 350);
		parent::__construct('author', __('Author'), $widget_ops, $control_ops);
	}

	function widget( $args, $instance ) {
		extract($args);
		$title = apply_filters( 'widget_title', empty( $instance['title'] ) ? '' : $instance['title'], $instance, $this->id_base );
		$text = apply_filters( 'widget_text', empty( $instance['text'] ) ? '' : $instance['text'], $instance );
                $avatar = get_avatar(1, '80');
                $wpex_social_icons_location = apply_filters( 'wpex_social_icons_location', get_template_directory_uri() .'/images/social/' );
               
                
		echo $before_widget; ?>

                <?php
		if ( !empty( $title ) ) { echo $before_title . $title . $after_title; } ?>
                        <div class="widget_author_avatar contributor-entry-avatar">
                            <?php echo $avatar; ?>
                        </div>
			<div class="authorwidget"><?php echo !empty( $instance['filter'] ) ? wpautop( $text ) : $text; ?></div>
                        <ul class="widget_author_social social-container">
                            <li><a href="http://www.facebook.com/helloitshugo" target="_blank" title="<?php _e( 'Facebook' , 'wpex' ); ?>" id="header-social-facebook"><img src="<?php echo $wpex_social_icons_location; ?>/facebook.png" alt="Facebook" /></a></li>
                            <li><a href="http://www.twitter.com/hugomn" target="_blank" title="<?php _e( 'Twitter' , 'wpex' ); ?>" id="header-social-twitter"><img src="<?php echo $wpex_social_icons_location; ?>/twitter.png" alt="Twitter" /></a></li>
                            <li><a href="http://www.instagram.com/hugomn" target="_blank" title="<?php _e( 'Instagram' , 'wpex' ); ?>" id="header-social-instagram"><img src="<?php echo $wpex_social_icons_location; ?>/instagram.png" alt="Instagram" /></a></li>
                            <li><a href="https://plus.google.com/+HugoMagalhaesNogueira" target="_blank" title="<?php _e( 'Google Plus' , 'wpex' ); ?>" id="header-social-googleplus"><img src="<?php echo $wpex_social_icons_location; ?>/googleplus.png" alt="Google Plus" /></a></li>
                            <li><a href="http://www.pinterest.com/hugomn" target="_blank" title="<?php _e( 'Pinterest' , 'wpex' ); ?>" id="header-social-pinterest"><img src="<?php echo $wpex_social_icons_location; ?>/pinterest.png" alt="Pinterest" /></a></li>
                            <li><a href="https://forrst.com/people/hugomn" target="_blank" title="<?php _e( 'Forrst' , 'wpex' ); ?>" id="header-social-forrst"><img src="<?php echo $wpex_social_icons_location; ?>/forrst.png" alt="Forrst" /></a></li>
                        </ul>
		<?php
		echo $after_widget;
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		if ( current_user_can('unfiltered_html') )
			$instance['text'] =  $new_instance['text'];
		else
			$instance['text'] = stripslashes( wp_filter_post_kses( addslashes($new_instance['text']) ) ); // wp_filter_post_kses() expects slashed
		$instance['filter'] = isset($new_instance['filter']);
		return $instance;
	}

	function form( $instance ) {
		$instance = wp_parse_args( (array) $instance, array( 'title' => '', 'text' => '' ) );
		$title = strip_tags($instance['title']);
		$text = esc_textarea($instance['text']);
?>
		<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>

		<textarea class="widefat" rows="16" cols="20" id="<?php echo $this->get_field_id('text'); ?>" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea>

		<p><input id="<?php echo $this->get_field_id('filter'); ?>" name="<?php echo $this->get_field_name('filter'); ?>" type="checkbox" <?php checked(isset($instance['filter']) ? $instance['filter'] : 0); ?> />&nbsp;<label for="<?php echo $this->get_field_id('filter'); ?>"><?php _e('Automatically add paragraphs'); ?></label></p>
<?php
	}
}


// register Author widget
add_action('widgets_init', create_function('', 'return register_widget("wpex_author");'));	
?>