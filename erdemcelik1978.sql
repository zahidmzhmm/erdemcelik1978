-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2021 at 10:47 AM
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
  `notes` mediumtext NOT NULL,
  `status` int(5) NOT NULL,
  `start` text NOT NULL,
  `end` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_files`
--

CREATE TABLE `tbl_files` (
  `id` int(11) NOT NULL,
  `path` varchar(100) NOT NULL,
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(2, 'Staff 02', 'staff2@staff.com', 'staff12123', '88fc795acf6bdb5034989d6244ea892fe4a48fa8', '0123456789', '0123456789', 'staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `send_alert`
--
ALTER TABLE `send_alert`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_send_alert_staff` (`staff_id`),
  ADD KEY `fk_send_alert_task` (`task_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_files`
--
ALTER TABLE `tbl_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tbl_files_task` (`task_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_files`
--
ALTER TABLE `tbl_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `send_alert`
--
ALTER TABLE `send_alert`
  ADD CONSTRAINT `fk_send_alert_staff` FOREIGN KEY (`staff_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_send_alert_task` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tbl_files`
--
ALTER TABLE `tbl_files`
  ADD CONSTRAINT `fk_tbl_files_task` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
