<?php

require_once( __DIR__ . '/DAO.php');

class MakerDAO extends DAO {
  public function insertOrder($data){
    $errors = $this->validate($data);
    if(empty($errors)){
      $sql = "INSERT INTO `orders` (`sirname`,`name`,`adres`, `tool`, `veiligheid`, `grondstof`, `price`) VALUES(:sirname, :name, :adres, :tool, :veiligheid, :grondstof, :price)";
      $stmt = $this->pdo->prepare($sql);
      $stmt->bindValue(':sirname',$data['sirname']);
      $stmt->bindValue(':name',$data['name']);
      $stmt->bindValue(':adres',$data['adres']);
      $stmt->bindValue(':tool',$data['tool']);
      $stmt->bindValue(':veiligheid',$data['veiligheid']);
      $stmt->bindValue(':grondstof',$data['grondstof']);
      $stmt->bindValue(':price',$data['price']);
      if($stmt->execute()){
        return $this->selectOrderById($this->pdo->lastInsertId());
      }
    }
    return false;
  }

  public function selectOrderById($id){
    $sql = "SELECT * FROM `orders` WHERE `id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id',$id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function validate($data){
    $errors = [];
    if (empty($data['sirname'])) {
      $errors['sirname'] = 'Gelieve een voornaam in te geven';
    }
    if (empty($data['name'])) {
      $errors['name'] = 'Gelieve een naam in te geven';
    }
    if (empty($data['adres'])) {
      $errors['adres'] = 'Gelieve een adres in te geven';
    }
    if($data['tool'] === "0" && $data['veiligheid'] === "0" && $data['grondstof'] === "0" ) {
      $errors['kits'] = 'Gelieve minstens 1 kit te bestellen';
    }
    return $errors;
  }
}

