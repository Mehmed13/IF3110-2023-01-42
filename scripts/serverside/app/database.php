<?php
require_once __DIR__ . '\base.php';

class Database
{

    private $conn;
    private $stmt;

    public function __construct()
    {

        try {
            $this->conn = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_DATABASE, DB_USERNAME, DB_PASSWORD);
            // Set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    public function query($query)
    {
        $this->stmt = $this->conn->query($query);
    }
    public function prepare($query)
    {
        $this->stmt = $this->conn->prepare($query);
    }

    public function bindParam($param, $value)
    {
        $this->stmt->bindParam($param, $value);
    }

    public function execute()
    {
        try {
            return $this->stmt->execute();
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function getAllResult()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getResult()
    {
        try {
            $this->execute();
            return $this->stmt->fetch(PDO::FETCH_ASSOC);
        } catch (\Throwable $th) {
            return false;
        }
    }
}
