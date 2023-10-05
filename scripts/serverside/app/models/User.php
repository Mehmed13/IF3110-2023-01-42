<?php

class User
{
    private $table = 'pengguna';
    private $db;

    public function __construct()
    {
        require_once __DIR__ . '/../core/Database.php';
        $this->db = new Database();
    }

    public function getProfile($profileId){
        $this->db->query("SELECT * FROM " . $this->table . " WHERE ID_Pengguna = :profileId");
        $this->db->bindParam(':profileId', $profileId);
        try {
            $this->db->execute();
            return $this->db->getResult();
        } catch (PDOException $e) {
            return  false;
        }   
    }

    public function editProfile($ID_Pengguna, $nama_depan, $nama_belakang, $username, $email, $password, $profile_pict){
        $this->db->query("UPDATE " . $this->table . " SET nama_depan = :nama_depan, nama_belakang = :nama_belakang, username = :username
            email = :email, password = :password, profile_pict = :profile_pict WHERE ID_Pengguna = :ID_Pengguna" );

        $this->db->bindParam(':ID_Pengguna', $ID_Pengguna);
        $this->db->bindParam(':nama_depan', $nama_depan);
        $this->db->bindParam(':nama_belakang', $nama_belakang);
        $this->db->bindParam(':username', $username);
        $this->db->bindParam(':email', $email);
        $this->db->bindParam(':password', $password);
        $this->db->bindParam(':profile_pict', $profile_pict);
        try {
            $this->db->execute();
            return true;
        } catch (PDOException $e) {
            return  false;
        }
    }
}