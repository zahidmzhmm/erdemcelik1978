-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2021 at 07:07 AM
-- Server version: 10.5.13-MariaDB-cll-lve
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `atiqur_erdemcelik1978`
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
(1, 4, 3, 1);

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

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `c_name`, `name`, `phone`, `address`, `whatsapp`, `email`, `notes`, `status`, `start`, `end`) VALUES
(3, 'Com name2', 'Admin Panel T2', '0123456789', 'sdgsdgsdg', '1212', 'admin@admin.com', 'sdsdgsdg', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_files`
--

CREATE TABLE `tbl_files` (
  `id` int(11) NOT NULL,
  `path` varchar(100) NOT NULL,
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_files`
--

INSERT INTO `tbl_files` (`id`, `path`, `task_id`) VALUES
(45, '193878fbf2.png', 3),
(46, '2174867f44.PNG', 3),
(47, '9159558a04.PNG', 3);

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
(1, 'Admin Panel', 'admin@admin.com', 'admin12123', '73cbfdf4239ab7c73ef7b4ca413eb423f32775aa', '012345679', '012345679', 'admin'),
(2, 'Staff 03', 'staff@staff.com', 'staff@12345S', 'a264d5aa48bd73eccb43869519853ef07b97d028', '0123456789', '0123456789', 'staff'),
(3, 'Erdem Celik', 'info@prestigebv.nl', '', '86a6ac6d12b569d0c5ba9d7ca5bfd603c97594d2', '0704020901', '0621444444', 'admin'),
(4, 'Sohan', 'sohanurrahmants@gmail.com', 'sohan123', '147c10287cde6d17cf1d6436e76563053b61b16b', '01795421691', '01795421691', 'staff');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tbl_files`
--
ALTER TABLE `tbl_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
