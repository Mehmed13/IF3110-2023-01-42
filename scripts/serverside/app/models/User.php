<?php

class User
{
    private $table = 'pengguna';
    private $db;

    public function __construct()
    {
        require_once __DIR__ . '/../core/Database.php';
        $this->db = new Database;
    }

    public function getProfile($profileId)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE ID_Pengguna = :profileId');
        $this->db->bindParam(':profileId', $profileId);
        try {
            $this->db->execute();
            return $this->db->getResult();
        } catch (PDOException $e) {
            return  false;
        }
    }

    public function login($username, $password)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE username = :username');
        $this->db->bindParam(':username', $username);
        $this->db->execute();
        $row = $this->db->getResult();
        if ($row) {
            if ($password == $row['password']) {
                return $row;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
