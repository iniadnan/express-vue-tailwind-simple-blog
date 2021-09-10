-- phpMyAdmin SQL Dump
-- version 5.1.1deb3+bionic1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 10, 2021 at 04:40 PM
-- Server version: 5.7.35-0ubuntu0.18.04.1
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_blog_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` varchar(255) NOT NULL,
  `author` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `tags` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `image` varchar(40) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `author`, `title`, `category`, `slug`, `description`, `tags`, `location`, `image`, `created_at`, `updated_at`, `deleted_at`) VALUES
('0e9f1cde-7595-47f9-bacf-ffa824d9f592', 'iniadnan', 'Live at Abbey Road Studios', 'studio', 'live-at-abbey-road-studios', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'studio, music, photo', 'Jakarta', '54ddym43eh3vki8y2mecfq2x825eb2qr.jpg', '2021-08-22 06:46:17', '2021-08-29 13:57:42', NULL),
('6254bb02-fad3-4ab0-92ac-c4ea026c8dae', 'inibobby', 'Where Can I Get Some?', 'city', 'where-can-i-get-some', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', 'city, town', 'Banjarnegara, Central Java', 'eoagaeoiy8xa0j1fhjblbq1ybak3d7h4.jpg', '2021-08-20 06:16:57', '2021-08-29 13:57:42', NULL),
('cf1ae019-e2b2-4156-aca2-5fcde755693c', 'iniadnan', 'Just The Way You Are', 'nature', 'just-the-way-you-are', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.', 'nature, travel', 'Bandung, West Java', 'gmxrcaqbbb0bva5edbyfyrdjc9rlk3jj.jpg', '2021-08-19 13:09:23', '2021-08-29 13:57:42', NULL),
('f830f69c-99cc-4a07-8c9a-a666d52e218d', 'iniadnan', 'The standard chunk of Lorem Ipsum used since the 1500s', 'museum', 'the-standard-chunk-of-lorem-ipsum-used-since-the-1500s', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'museum, city', 'Jakarta', '6v2i9bw8jb9v0hous78yuqn53rbc5rpv.jpg', '2021-09-06 15:25:36', '2021-09-07 15:16:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `picture` varchar(40) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `picture`, `created_at`, `updated_at`, `deleted_at`) VALUES
('24a1398d-b329-4b37-8c18-f64849e853fa', 'inibobby@gmail.com', 'inibobbyz', '$2b$10$P1NqDa.QcoOni3GGtWgAceAwgjldLer31WvvBfZ5rO8Kpekg3n8kC', NULL, '2021-09-01 14:43:03', '2021-09-06 05:50:18', NULL),
('7d0362bf-8b28-4706-9358-fb24f2264e82', 'iniadnan@gmail.com', 'iniadnan', '$2b$10$tdZE4eCUgKq9b1YFgYa7m.HBzCaH7a6L4IHBg.dAupUXjq6v2jycm', 'g8bq294xuqqcgktj4yq5g2vkl05duuoy.png', '2021-09-01 14:40:13', '2021-09-03 07:35:51', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `title` (`title`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `username_2` (`username`),
  ADD KEY `username_3` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
