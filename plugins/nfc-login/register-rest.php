<?php

//--------------------------------------------------------
// Rest method to check register
//--------------------------------------------------------


  function rest_register_user_on_terminal($data) {
    if(!isset( $data['username'] ))  
      return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );


    $username = sanitize_text_field($data['username']);
    $password = sanitize_text_field($data['password']);



  }
  public function do_registration( $username, $email, $values ) {








    // Try registration
    if( self::$random_password ) {

      $do_user = self::random_psw_registration( $username, $email );
      $pwd     = $do_user['pwd'];

    } else {

      $pwd     = $values['register']['password'];
      $do_user = wp_create_user( $username, $pwd, $email );

    }

    // Check for errors.
    $do_user = isset( $do_user['do_user'] ) ? $do_user['do_user'] : $do_user;

    if ( is_wp_error( $do_user ) ) {

      foreach ($do_user->errors as $error) {
        self::add_error( $error[0] );
      }
      return;

    } else {

      $user_id = $do_user;

      // Set some meta if available
      if( array_key_exists( 'first_name' , $values['register'] ) )
        update_user_meta( $user_id, 'first_name', $values['register']['first_name'] );
      if( array_key_exists( 'last_name' , $values['register'] ) )
        update_user_meta( $user_id, 'last_name', $values['register']['last_name'] );
      if( array_key_exists( 'user_url' , $values['register'] ) )
        wp_update_user( array( 'ID' => $user_id, 'user_url' => $values['register']['user_url'] ) );
      if( array_key_exists( 'description' , $values['register'] ) )
        update_user_meta( $user_id, 'description', $values['register']['description'] );

      if( self::$random_password ) :
        self::add_confirmation( apply_filters( 'wpum/form/register/success/message', __( 'Registration complete. We have sent you a confirmation email with your password.', 'wpum' ) ) );
      else :
        self::add_confirmation( apply_filters( 'wpum/form/register/success/message', __( 'Registration complete.', 'wpum' ) ) );
      endif;

      // Add ability to extend registration process.
      do_action( "wpum/form/register/success" , $user_id, $values );

      // Send notification if password is manually added by the user.
      wpum_new_user_notification( $do_user, $pwd );

      // Needed to close the registration process properly.
      do_action( "wpum/form/register/done" , $user_id, $values );

    }

  }

  /**
   * Generate random password and register user
   *
   * @since 1.0.3
   * @param  string $username username
   * @param  string $email    email
   * @return mixed
   */
  public static function random_psw_registration( $username, $email ) {

    // Generate something random for a password.
    $pwd = wp_generate_password( 20, false );

    $do_user = wp_create_user( $username, $pwd, $email );

    return array( 'do_user' => $do_user, 'pwd' => $pwd );

  }


?>