<?php

class JawabanSalah
{
    private $table = 'Jawaban_Salah';
    private $db;

    public function __construct()
    {
        require_once __DIR__ . '/../core/Database.php';
        $this->db = new Database();
    }
    
    public function getJawabanSalahByIDSoal($ID_Soal){
        $this->db->query("SELECT * FROM " . $this->table . " WHERE ID_Soal = :ID_Soal");
        $this->db->bindParam(':ID_Soal', $ID_Soal);
        try {
            $this->db->execute();
            return $this->db->getAllResult();
        } catch (PDOException $e) {
            return  false;
        }
    }
}
