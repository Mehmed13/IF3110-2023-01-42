<?php

class Soal
{
    private $table = 'Soal';
    private $db;

    public function __construct()
    {
        require_once __DIR__ . '/../core/Database.php';
        $this->db = new Database();
    }

    public function getSoalByIDMaterial($ID_Material){
        $this->db->query("SELECT * FROM " . $this->table . " WHERE ID_Material = :ID_Material");
        $this->db->bindParam(':ID_Material', $ID_Material);
        try {
            $this->db->execute();
            return $this->db->getAllResult();
        } catch (PDOException $e) {
            return  false;
        }
    }
}
