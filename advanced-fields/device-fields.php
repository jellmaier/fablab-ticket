<?php 

include 'custom-metabox.php';

class DeviceFields extends CustomMetaBox {

    public $title = 'template-about-us';
    public $template = 'template-about-us';
    public $templatedir ='page-templates/';
    public $boxname = 'Zusätziche Informationen';

    public function init_array(){
      $this->fields_array = array(
        array(
            'label' => "test",
            'id'    => $this->title.'_test',
            'type'  => 'text'
        )
      );
    }
}

?>