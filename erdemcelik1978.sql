-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2021 at 04:29 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `erdemcelik1978`
--

-- --------------------------------------------------------

--
-- Table structure for table `send_alert`
--

CREATE TABLE `send_alert` (
  `id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `send_alert`
--

INSERT INTO `send_alert` (`id`, `staff_id`, `task_id`, `role`) VALUES
(1, 2, 1, 1),
(2, 2, 1, 1),
(3, 2, 1, 1),
(4, 2, 3, 1),
(5, 2, 3, 2),
(6, 2, 3, 1),
(7, 5, 3, 1),
(8, 2, 4, 1),
(9, 6, 9, 1),
(10, 5, 3, 1),
(11, 5, 9, 1),
(12, 2, 11, 1),
(13, 5, 12, 3),
(14, 6, 4, 3),
(15, 8, 18, 1),
(16, 8, 18, 1),
(17, 8, 18, 1),
(18, 8, 18, 1),
(19, 8, 18, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `c_name` text NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `address` text NOT NULL,
  `whatsapp` text NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `files` varchar(255) NOT NULL,
  `notes` mediumtext NOT NULL,
  `status` int(5) NOT NULL,
  `start` text NOT NULL,
  `end` text NOT NULL,
  `files1` text NOT NULL,
  `files2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `c_name`, `name`, `phone`, `address`, `whatsapp`, `email`, `files`, `notes`, `status`, `start`, `end`, `files1`, `files2`) VALUES
(3, 'Com name2', 'Admin Panel T2', '0123456789', 'sdgsdgsdg', '', 'admin@admin.com', '', 'sdsdgsdg', 3, '', '', '', ''),
(5, 'FazGroupLTD', 'Zahid Mzhmm', '01746853904', 'Assam Colony, Bou Bazar Sopura', '', 'mjhm118899@gmail.com', '', 'mjhm118899', 1, '', '', '', ''),
(10, 'Zahid Hasan', 'dghdfl;ghdfl;ghdfl;gh', '54844894894', 'klsdfghdfkghdfklgh', '', 'staff@staff.com', '2f56f8a8f3.png', 'fghfghfghfghfgh', 1, 'Wed Nov 17 2021 17:52:22 GMT+0600 (Bangladesh Standard Time)', 'Wed Nov 17 2021 17:52:22 GMT+0600 (Bangladesh Standard Time)', '408008a107.png', ''),
(11, 'FazGroupLTD', 'Zahid Mzhmm', '01746853904', 'Assam Colony, Bou Bazar Sopura', '', 'mjhm118899@gmail.com', 'bdf207bf9c.png', 'ghhjghjgj', 1, 'Wed Nov 17 2021 14:50:54 GMT+0100 (Midden-Europese standaardtijd)', 'Wed Nov 17 2021 14:50:54 GMT+0100 (Midden-Europese standaardtijd)', '', ''),
(12, 'Prestige Design', 'Erdem Celik', '0704020901', 'Lulofsstraat', '', 'info@prestigebv.nl', '91e61a3f48.jpg', 'testststts', 1, 'Wed Nov 17 2021 14:37:13 GMT+0100 (Midden-Europese standaardtijd)', 'Wed Nov 17 2021 14:37:13 GMT+0100 (Midden-Europese standaardtijd)', '', ''),
(13, 'Prestige Design', 'Erdem Celik', '0704020901', 'Lulofsstraat', '', 'info@prestigebv.nl', '', 'ccscscscsc', 3, 'Fri Nov 19 2021 10:52:49 GMT+0100 (Midden-Europese standaardtijd)', 'Thu Nov 18 2021 10:52:49 GMT+0100 (Midden-Europese standaardtijd)', '', ''),
(14, 'mycompany', 'sohan', '32439493493294', 'address', '', 'admin@admin.com', '', 'my notes', 2, 'Tue Nov 02 2021 19:56:00 GMT+0600 (Bangladesh Standard Time)', 'Tue Nov 09 2021 19:56:00 GMT+0600 (Bangladesh Standard Time)', '', ''),
(15, 'fazgroupltd', 'Sohanur Rahman', '09876523456', 'asam koloni bou bazar', '', 'sohanurrahmants@gmail.com', '', 'fdsfdsfdsfd', 2, 'Thu Nov 18 2021 21:08:41 GMT+0600 (Bangladesh Standard Time)', 'Thu Nov 18 2021 21:08:41 GMT+0600 (Bangladesh Standard Time)', '', ''),
(16, 'Com name', 'Admin Panel T', '0123456789', 'sdgsdgsdg', '', 'admin@admin.com', '', 'sdsdgsdg', 3, '', '', '', ''),
(17, 'Com name', 'Admin Panel T', '0123456789', 'sdgsdgsdg', '1212', 'admin@admin.com', '', 'sdsdgsdg', 3, '', '', '', ''),
(18, 'fazgroupltd', 'Sohanur Rahman', '01795421691', 'fdsf', '01795421691', 'sohanurrahmants@gmail.com', '1fd2e88ba9.JPG', 'this is testing ', 3, 'Tue Nov 16 2021 19:19:42 GMT+0600 (Bangladesh Standard Time)', 'Fri Nov 19 2021 00:29:42 GMT+0600 (Bangladesh Standard Time)', '', ''),
(19, 'Com name', 'Admin Panel T', '0123456789', 'sdgsdgsdg', '1212', 'admin@admin.com', 'c44e815e29.png', 'sdsdgsdg', 3, 'Wed Nov 17 2021 17:52:22 GMT+0600 (Bangladesh Standard Time)', 'Wed Nov 17 2021 17:52:22 GMT+0600 (Bangladesh Standard Time)', '', ''),
(20, 'Com name', 'Admin Panel T', '0123456789', 'sdgsdgsdg', '', 'admin@admin.com', '6b1a639cba.png', 'sdsdgsdg', 3, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `whatsapp` varchar(55) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `phone`, `whatsapp`, `role`) VALUES
(1, 'Admin Panel', 'admin@admin.com', 'admin12123', '73cbfdf4239ab7c73ef7b4ca413eb423f32775aa', '0123456789', '0123456789', 'admin'),
(2, 'Staff 01', 'mzhmm3@gmail.com', 'staff12123', '22a28e2c525de0bae6535a14e49474ac244cd0c2', '0123456789', '0123456789', 'staff'),
(5, 'Staff 03', 'staff3@admin.com', 'staff@12345S', '1d7962d9cab033ac4c88899e9eab0a761296e9d8', '0123456789', '0123456789', 'staff'),
(6, 'Staff 02', 'staff2@staff.com', 'staff12123', '88fc795acf6bdb5034989d6244ea892fe4a48fa8', '0123456789', '0123456789', 'staff'),
(8, 'sohan', 'sohanurrahmants@gmail.com', 'sohan9542', 'dd1ad035963d83626a7d90fd162a42c00d61994e', '01795421691', '01795421691', 'staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `send_alert`
--
ALTER TABLE `send_alert`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_uindex` (`email`),
  ADD UNIQUE KEY `users_token_uindex` (`token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `send_alert`
--
ALTER TABLE `send_alert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
