<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../dao/MakerDAO.php';

class MakerController extends Controller {

  function __construct(){
    $this->MakerDAO = new MakerDAO();
  }

  public function index(){

  }

  public function tutorial(){

  }

  public function shop(){
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if ($contentType === "application/json") {

      $content = trim(file_get_contents("php://input"));
      $data = json_decode($content, true);

      $insertedOrder = $this->MakerDAO->insertOrder($data);
      if(!$insertedOrder){
        $errors = $this->MakerDAO->validate($data);
        $errors['error'] = "   ";

        echo json_encode($errors);
      }else{
        echo json_encode($insertedOrder);
      }
      exit();
    }
  }
}
