<?php

class Material
{
    private $table = 'Material';
    private $db;

    public function __construct()
    {
        require_once __DIR__ . '/../core/Database.php';
        $this->db = new Database();
    }

    public function getAllMaterial(){
        $this->db->query("SELECT * FROM " . $this->table);
        try {
            $this->db->execute();
            return $this->db->getAllResult();
        } catch (PDOException $e) {
            return  false;
        }
    }
    public function getPage($pageNumber, $rows_per_page){
        $res = $this->getAllMaterial();
        if ($res){
            // Get slice of data
            $pageData = array_slice($res, ($pageNumber-1)*$rows_per_page, $rows_per_page);
            return $pageData;

        } else {
            return $res;
        }
    }

    public function getNumberOfMaterial(){
        $this->db->query("SELECT COUNT(ID_Material) AS numberOfMaterial FROM " . $this->table);
        try {
            $this->db->execute();
            return $this->db->getResult();
        } catch (PDOException $e) {
            return  false;
        }
    }

    public function getMaterialByKodeMapelandModuleNumber($kode_mapel, $no_modul){
        $this->db->query("SELECT * FROM " . $this->table . " WHERE kode_mapel = :kodeMapel AND no_modul = :noModul");
        $this->db->bindParam(':kodeMapel', $kode_mapel);
        $this->db->bindParam(':noModul', $no_modul);
        try {
            $this->db->execute();
            return $this->db->getAllResult();
        } catch (PDOException $e) {
            return  false;
        }
    }

    public function addMaterial($kode_mapel, $no_modul, $judul, $video, $teks){
        $this->db->startTransaction();
        $this->db->query("INSERT INTO " . $this->table . " VALUES (:kode_mapel, :no_modul, :judul, :video, :teks)" );
    
        $this->db->bindParam(':kode_mapel', $kode_mapel);
        $this->db->bindParam(':no_modul', $no_modul);
        $this->db->bindParam(':judul', $judul);
        $this->db->bindParam(':video', $video);
        $this->db->bindParam(':teks', $teks);

        try {
            
            $this->db->execute();
            $this->db->commit();
            return true;
        } catch (PDOException $e) {
            return  false;
        }
    }


    public function deleteMaterial($ID_Material){
        $this->db->startTransaction();
        $this->db->query("DELETE FROM " . $this->table . " WHERE ID_Material = :ID_Material" );

        $this->db->bindParam(':ID_Material', $ID_Material);
        try {
            
            $this->db->execute();
            $this->db->commit();
            return true;
        } catch (PDOException $e) {
            return  false;
        }
    }
}