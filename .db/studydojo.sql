-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2023 at 04:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studydojo`
--

-- --------------------------------------------------------

--
-- Table structure for table `jawaban_salah`
--

CREATE TABLE `jawaban_salah` (
  `ID_Soal` int(11) NOT NULL,
  `jawaban` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `latihan_soal`
--

CREATE TABLE `latihan_soal` (
  `ID_Material` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mata_pelajaran`
--

CREATE TABLE `mata_pelajaran` (
  `kode_mapel` int(11) NOT NULL,
  `kelas` varchar(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `deskripsi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE `material` (
  `ID_Material` int(11) NOT NULL,
  `kode_mapel` int(11) DEFAULT NULL,
  `no_modul` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materi_bacaan`
--

CREATE TABLE `materi_bacaan` (
  `ID_Material` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `tanggal_upload` date DEFAULT NULL,
  `link` varchar(100) NOT NULL,
  `jumlah_halaman` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materi_video`
--

CREATE TABLE `materi_video` (
  `ID_Material` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `tanggal_upload` date DEFAULT NULL,
  `link` varchar(100) NOT NULL,
  `durasi` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mengakses`
--

CREATE TABLE `mengakses` (
  `ID_Pengguna` int(11) NOT NULL,
  `ID_Material` int(11) NOT NULL,
  `tanggal_akses` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `modul`
--

CREATE TABLE `modul` (
  `kode_mapel` int(11) NOT NULL,
  `no_modul` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `ID_Pengguna` int(11) NOT NULL,
  `nama_depan` varchar(50) DEFAULT NULL,
  `nama_belakang` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `isVerified` tinyint(1) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `profile_pict` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`ID_Pengguna`, `nama_depan`, `nama_belakang`, `username`, `email`, `password`, `isVerified`, `role`, `profile_pict`) VALUES
(1, 'Alex', 'Kwong', 'alexkwong', 'alexkwong@gmail.com', 'alexkiw', 1, 'user', 'alex_profile.jpg'),
(2, 'Fadhil', 'Amri', 'amree', 'amri123@gmail.com', 'fadhil123', 1, 'admin', 'fadhil_profile.jpg'),
(3, 'Farhan', 'Fahrezy', 'fahrezee', 'farhan123@gmail.com', 'fahrezy123', 1, 'admin', 'farhan_profile.jpg'),
(4, 'Manuella', 'Sianipar', 'manuella', 'manuella123@gmail.com', 'man123', 1, 'admin', 'manuella_profile.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `soal`
--

CREATE TABLE `soal` (
  `ID_Soal` int(11) NOT NULL,
  `ID_Material` int(11) DEFAULT NULL,
  `nomor` int(11) NOT NULL,
  `pertanyaan` varchar(255) NOT NULL,
  `jawaban_benar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jawaban_salah`
--
ALTER TABLE `jawaban_salah`
  ADD PRIMARY KEY (`ID_Soal`,`jawaban`);

--
-- Indexes for table `latihan_soal`
--
ALTER TABLE `latihan_soal`
  ADD PRIMARY KEY (`ID_Material`);

--
-- Indexes for table `mata_pelajaran`
--
ALTER TABLE `mata_pelajaran`
  ADD PRIMARY KEY (`kode_mapel`);

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`ID_Material`),
  ADD KEY `kode_mapel` (`kode_mapel`,`no_modul`);

--
-- Indexes for table `materi_bacaan`
--
ALTER TABLE `materi_bacaan`
  ADD PRIMARY KEY (`ID_Material`);

--
-- Indexes for table `materi_video`
--
ALTER TABLE `materi_video`
  ADD PRIMARY KEY (`ID_Material`);

--
-- Indexes for table `mengakses`
--
ALTER TABLE `mengakses`
  ADD PRIMARY KEY (`ID_Pengguna`,`ID_Material`,`tanggal_akses`),
  ADD KEY `ID_Material` (`ID_Material`);

--
-- Indexes for table `modul`
--
ALTER TABLE `modul`
  ADD PRIMARY KEY (`kode_mapel`,`no_modul`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`ID_Pengguna`);

--
-- Indexes for table `soal`
--
ALTER TABLE `soal`
  ADD PRIMARY KEY (`ID_Soal`),
  ADD KEY `ID_Material` (`ID_Material`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mata_pelajaran`
--
ALTER TABLE `mata_pelajaran`
  MODIFY `kode_mapel` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `material`
--
ALTER TABLE `material`
  MODIFY `ID_Material` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `ID_Pengguna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `soal`
--
ALTER TABLE `soal`
  MODIFY `ID_Soal` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jawaban_salah`
--
ALTER TABLE `jawaban_salah`
  ADD CONSTRAINT `jawaban_salah_ibfk_1` FOREIGN KEY (`ID_Soal`) REFERENCES `soal` (`ID_Soal`);

--
-- Constraints for table `latihan_soal`
--
ALTER TABLE `latihan_soal`
  ADD CONSTRAINT `latihan_soal_ibfk_1` FOREIGN KEY (`ID_Material`) REFERENCES `material` (`ID_Material`);

--
-- Constraints for table `material`
--
ALTER TABLE `material`
  ADD CONSTRAINT `material_ibfk_1` FOREIGN KEY (`kode_mapel`,`no_modul`) REFERENCES `modul` (`kode_mapel`, `no_modul`);

--
-- Constraints for table `materi_bacaan`
--
ALTER TABLE `materi_bacaan`
  ADD CONSTRAINT `materi_bacaan_ibfk_1` FOREIGN KEY (`ID_Material`) REFERENCES `material` (`ID_Material`);

--
-- Constraints for table `materi_video`
--
ALTER TABLE `materi_video`
  ADD CONSTRAINT `materi_video_ibfk_1` FOREIGN KEY (`ID_Material`) REFERENCES `material` (`ID_Material`);

--
-- Constraints for table `mengakses`
--
ALTER TABLE `mengakses`
  ADD CONSTRAINT `mengakses_ibfk_1` FOREIGN KEY (`ID_Pengguna`) REFERENCES `pengguna` (`ID_Pengguna`),
  ADD CONSTRAINT `mengakses_ibfk_2` FOREIGN KEY (`ID_Material`) REFERENCES `material` (`ID_Material`);

--
-- Constraints for table `modul`
--
ALTER TABLE `modul`
  ADD CONSTRAINT `modul_ibfk_1` FOREIGN KEY (`kode_mapel`) REFERENCES `mata_pelajaran` (`kode_mapel`);

--
-- Constraints for table `soal`
--
ALTER TABLE `soal`
  ADD CONSTRAINT `soal_ibfk_1` FOREIGN KEY (`ID_Material`) REFERENCES `latihan_soal` (`ID_Material`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
