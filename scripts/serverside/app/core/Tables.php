<?php

class Tables{
    public const PENGGUNA_TABLE = "
        CREATE TABLE Pengguna (
            ID_Pengguna INT AUTO_INCREMENT PRIMARY KEY,
            nama_depan VARCHAR(50),
            nama_belakang VARCHAR(50),
            username VARCHAR(50) UNIQUE,
            email VARCHAR(100) UNIQUE,
            password VARCHAR(100),
            isVerified BOOLEAN,
            role VARCHAR(50),
            profile_pict VARCHAR(100)
        );
    ";

    public const MATAPELAJARAN_TABLE = "
        CREATE TABLE Mata_Pelajaran (
            kode_mapel INT AUTO_INCREMENT PRIMARY KEY,
            kelas VARCHAR(50) NOT NULL,
            nama VARCHAR(100) NOT NULL,
            deskripsi VARCHAR(255)
        );
    ";

    public const MODUL_TABLE = "
        CREATE TABLE Modul (
            kode_mapel INT,
            no_modul INT,
            judul VARCHAR(100) NOT NULL,
            deskripsi VARCHAR(255),
            PRIMARY KEY (kode_mapel, no_modul),
            FOREIGN KEY (kode_mapel) REFERENCES Mata_Pelajaran(kode_mapel)
        );
    ";

    public const MATERIAL_TABLE = "
        CREATE TABLE Material (
            ID_Material INT AUTO_INCREMENT PRIMARY KEY,
            kode_mapel INT,
            no_modul INT,
            judul VARCHAR(50),
            video VARCHAR(100),
            teks TEXT,
            FOREIGN KEY (kode_mapel, no_modul) REFERENCES Modul(kode_mapel, no_modul)
        );
    ";

    public const LATIHANSOAL_TABLE = "
        CREATE TABLE Latihan_Soal (
            ID_Material INT PRIMARY KEY,
            judul VARCHAR(100) NOT NULL,
            deskripsi VARCHAR(255),
            FOREIGN KEY (ID_Material) REFERENCES Material(ID_Material)
        );
    ";

    public const SOAL_TABLE = "
        CREATE TABLE Soal (
            ID_Soal INT AUTO_INCREMENT PRIMARY KEY,
            ID_Material INT,
            nomor INT NOT NULL,
            pertanyaan VARCHAR(255) NOT NULL,
            jawaban_benar VARCHAR(255) NOT NULL,
            FOREIGN KEY (ID_Material) REFERENCES Latihan_Soal(ID_Material)
        );
    ";

    public const JAWABANSALAH_TABLE = "
        CREATE TABLE Jawaban_Salah (
            ID_Soal INT,
            jawaban VARCHAR(255),
            PRIMARY KEY (ID_soal, jawaban),
            FOREIGN KEY (ID_Soal) REFERENCES Soal(ID_Soal)
        );
    ";

    public const MENGAKSES_TABLE = "
        CREATE TABLE Mengakses (
            ID_Pengguna INT,
            ID_Material INT,
            tanggal_akses TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (ID_Pengguna, ID_Material, tanggal_akses),
            FOREIGN KEY (ID_Pengguna) REFERENCES Pengguna(ID_Pengguna),
            FOREIGN KEY (ID_Material) REFERENCES Material(ID_Material)
        );
    ";

    public const EARLY_USER = "
        INSERT INTO Pengguna (nama_depan, nama_belakang, username, email, password, isVerified, role, profile_pict)
        VALUES ('Alex', 'Kwong', 'alexkwong', 'alexkwong@gmail.com', 'alexkiw', true, 'user', 'alex_profile.jpg');

        INSERT INTO Pengguna (nama_depan, nama_belakang, username, email, password, isVerified, role, profile_pict)
        VALUES ('Fadhil', 'Amri', 'amree', 'amri123@gmail.com', 'fadhil123', true, 'admin', 'fadhil_profile.jpg');

        INSERT INTO Pengguna (nama_depan, nama_belakang, username, email, password, isVerified, role, profile_pict)
        VALUES ('Farhan', 'Fahrezy', 'fahrezee', 'farhan123@gmail.com', 'fahrezy123', true, 'admin', 'farhan_profile.jpg');

        INSERT INTO Pengguna (nama_depan, nama_belakang, username, email, password, isVerified, role, profile_pict)
        VALUES ('Manuella', 'Sianipar', 'manuella', 'manuella123@gmail.com', 'man123', true, 'admin', 'manuella_profile.jpg');
    ";

    
}