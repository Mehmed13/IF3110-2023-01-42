<?php

class Material
{
    private $table = 'material';
    private $db;

    public function __construct()
    {
        require_once __DIR__ . '/../core/Database.php';
        $this->db = new Database();
    }
}