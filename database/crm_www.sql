-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Machine: 127.0.0.1
-- Gegenereerd op: 11 sep 2015 om 14:46
-- Serverversie: 5.6.17
-- PHP-versie: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `crm_www`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `actions`
--

CREATE TABLE IF NOT EXISTS `actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customers_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(250) NOT NULL,
  `type` varchar(250) DEFAULT NULL,
  `reminder` enum('Y','N') NOT NULL DEFAULT 'N',
  `date_reminder` date DEFAULT '0000-00-00',
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Gegevens worden geëxporteerd voor tabel `actions`
--

INSERT INTO `actions` (`id`, `customers_id`, `name`, `type`, `reminder`, `date_reminder`, `date_create`, `date_edit`, `archive`) VALUES
(1, 1, 'Klant heeft gebeld in de voormiddag', 'Telefoon', 'Y', '2015-09-10', '2015-09-04 14:00:00', '2015-09-04 14:00:00', 'N'),
(2, 1, 'E-mail gestuurd met offerte', 'E-mail', 'N', '0000-00-00', '2015-09-09 17:10:00', '2015-09-09 17:10:00', 'N'),
(3, 2, 'Klant is langsgeweest op bureau in2red', 'Afspraak', 'N', '0000-00-00', '2015-09-09 18:12:00', '2015-09-09 18:12:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `attachments`
--

CREATE TABLE IF NOT EXISTS `attachments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions_id` int(11) NOT NULL DEFAULT '0',
  `subactions_id` int(11) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Gegevens worden geëxporteerd voor tabel `attachments`
--

INSERT INTO `attachments` (`id`, `actions_id`, `subactions_id`, `name`, `date_create`, `date_edit`, `archive`) VALUES
(1, 1, NULL, 'picture.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(2, 1, NULL, 'document.pdf', '1899-11-30 00:00:00', '0000-00-00 00:00:00', 'N'),
(3, 1, 1, 'download.csv', '2015-09-09 11:32:00', '2015-09-09 11:32:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customers_id` int(11) NOT NULL DEFAULT '0',
  `firstname` varchar(250) DEFAULT NULL,
  `lastname` varchar(250) NOT NULL,
  `title` varchar(250) DEFAULT NULL,
  `phone` varchar(250) DEFAULT NULL,
  `mobile` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `date_create` datetime NOT NULL,
  `date_edit` datetime NOT NULL,
  `archive` enum('Y','N') DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Gegevens worden geëxporteerd voor tabel `contacts`
--

INSERT INTO `contacts` (`id`, `customers_id`, `firstname`, `lastname`, `title`, `phone`, `mobile`, `email`, `date_create`, `date_edit`, `archive`) VALUES
(1, 1, 'Sam', 'Spriet', 'Zaakvoerder', '057/20.85.67', '0472/96.60.10', 'sam.spriet@telenet.be', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(2, 2, 'Tom', 'Vandenberghe', 'Founder', NULL, NULL, 'tom@in2red.be', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(3, 2, 'Katrien', 'Woets', 'Project manager', NULL, NULL, 'katrien@in2red.be', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(9, 40, 'Frederic', 'van Daele', 'VP Investor Relations', '+32 2 412 77 61', NULL, NULL, '2015-09-08 16:52:48', '2015-09-08 16:52:48', 'N'),
(10, 40, 'Chris', 'Farrell', 'SVP Strategy, M&A & Investor Relations', '+32 2 412 21 51', NULL, NULL, '2015-09-08 16:52:48', '2015-09-08 16:52:48', 'N'),
(8, 14, 'Jos', 'Popolikov', 'Piraat', NULL, NULL, 'argghh@gmail.com', '2015-09-04 13:16:15', '2015-09-04 13:16:15', 'N'),
(11, 40, 'Aurélie', 'Bultynck', 'Director, Investor Relations', '+32 2 412 21 51', NULL, NULL, '2015-09-08 16:52:48', '2015-09-08 16:52:48', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customertypes_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(250) NOT NULL,
  `phone` varchar(250) DEFAULT NULL,
  `email` varchar(250) NOT NULL,
  `billing_street` varchar(250) NOT NULL,
  `billing_zipcode` varchar(250) NOT NULL,
  `billing_city` varchar(250) NOT NULL,
  `billing_county` varchar(250) DEFAULT NULL,
  `billing_country` varchar(250) NOT NULL,
  `office_street` varchar(250) DEFAULT NULL,
  `office_zipcode` varchar(250) DEFAULT NULL,
  `office_city` varchar(250) DEFAULT NULL,
  `office_county` varchar(250) DEFAULT NULL,
  `office_country` varchar(250) DEFAULT NULL,
  `vat` varchar(250) DEFAULT NULL,
  `date_active` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `active` enum('Y','N') NOT NULL DEFAULT 'Y',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

--
-- Gegevens worden geëxporteerd voor tabel `customers`
--

INSERT INTO `customers` (`id`, `customertypes_id`, `name`, `phone`, `email`, `billing_street`, `billing_zipcode`, `billing_city`, `billing_county`, `billing_country`, `office_street`, `office_zipcode`, `office_city`, `office_county`, `office_country`, `vat`, `date_active`, `date_create`, `date_edit`, `active`, `archive`) VALUES
(1, 1, 'Studio Black Star', '057/20.85.67', 'sam.spriet@telenet.be', 'Dunantlaan 35', '8900', 'Ieper', 'West-Vlaanderen', 'België', '', '', '', '', '', 'BE 0808.561.514', '2015-09-09 18:46:05', '2015-09-09 18:46:05', '2015-09-09 18:46:05', 'Y', 'N'),
(2, 1, 'in2red', '057/36.09.12', 'info@in2red.be', 'Tiendelaan 37', '8900', 'Ieper', 'West-Vlaanderen', 'België', 'Haighlaan 5', '8900', 'Ieper', 'West-Vlaanderen', 'België', 'BE 0820 562 986', '2015-09-08 09:56:58', '2015-09-08 09:56:58', '2015-09-11 10:19:39', 'Y', 'N'),
(3, 1, 'Pepijn Lenoor', '0468/16.69.00', 'pepijn.theatertechniek@gmail.com', 'Hoppeveld 21', '8970', 'Poperinge', 'West-Vlaanderen', 'België', '', '', '', '', '', '', '2015-09-07 13:46:32', '2015-09-07 13:46:32', '2015-09-07 13:46:32', 'Y', 'N'),
(23, 2, 'BVBA Nick Spriet', '057208567', 'nick.spriet@student.howest.be', 'Dunantlaan 35', '8900', 'Ieper', 'West-Vlaanderen', 'België', 'Blekersstraat 20/003', '8500', 'Kortrijk', 'West-Vlaanderen', 'België', 'BE 5446546543', '2015-09-03 16:11:39', '2015-09-03 16:11:39', '2015-09-03 16:11:39', 'Y', 'N'),
(14, 3, 'Nouveau', '', '', 'nieuweberg 17', '5656', 'Kortemark', '', 'Nederland', '', '', '', '', '', '', '2015-09-09 08:37:45', '2015-09-09 08:37:45', '2015-09-09 08:37:45', 'Y', 'N'),
(15, 2, 'NEW', '', '', 'newstreet 01', '0123', 'nieuwelinge', 'Antwerpen', 'België', '', '', '', '', '', '', '2015-09-03 13:00:53', '2015-09-03 13:00:53', '2015-09-11 10:07:45', 'N', 'N'),
(16, 1, 'Nieuwe klant toegevoegd', '', '', 'Straatloos 001', '4145', 'Gemeenteloos', '', 'Frankrijk', 'Teststraat 06', '1234', 'Testgemeente', '', 'Frankrijk', '', '2015-09-11 09:09:16', '2015-09-11 09:09:16', '2015-09-11 14:16:07', 'Y', 'N'),
(40, 2, 'Delhaize', '+32 2 412 22 11', 'investor@delhaizegroup.com', 'Square Marie Curie 40', '1070', 'Brussel', '', 'België', 'Haighlaan 31', '8900', 'Ieper', 'West-Vlaanderen', 'België', '', '2015-09-10 22:24:45', '2015-09-10 22:24:45', '2015-09-11 13:41:41', 'Y', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `customers_tags`
--

CREATE TABLE IF NOT EXISTS `customers_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customers_id` int(11) NOT NULL DEFAULT '0',
  `tags_id` int(11) NOT NULL DEFAULT '0',
  `date_create` datetime NOT NULL,
  `date_edit` datetime NOT NULL,
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Gegevens worden geëxporteerd voor tabel `customers_tags`
--

INSERT INTO `customers_tags` (`id`, `customers_id`, `tags_id`, `date_create`, `date_edit`, `archive`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(2, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(3, 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `customertypes`
--

CREATE TABLE IF NOT EXISTS `customertypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Gegevens worden geëxporteerd voor tabel `customertypes`
--

INSERT INTO `customertypes` (`id`, `name`, `date_create`, `date_edit`, `archive`) VALUES
(1, 'Klant', '2015-09-04 09:49:00', '2015-09-04 09:49:00', 'N'),
(2, 'Prospect', '2015-09-04 09:49:00', '2015-09-04 09:49:00', 'N'),
(3, 'Leverancier', '2015-09-04 09:49:00', '2015-09-04 09:49:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `offerlines`
--

CREATE TABLE IF NOT EXISTS `offerlines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offers_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(250) NOT NULL,
  `price` decimal(10,0) NOT NULL DEFAULT '0',
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `offers`
--

CREATE TABLE IF NOT EXISTS `offers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customers_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(250) NOT NULL,
  `vat` enum('Y','N') NOT NULL DEFAULT 'N',
  `approved` enum('Y','N') NOT NULL DEFAULT 'N',
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Gegevens worden geëxporteerd voor tabel `offers`
--

INSERT INTO `offers` (`id`, `customers_id`, `name`, `vat`, `approved`, `date_create`, `date_edit`, `archive`) VALUES
(1, 2, 'Drukwerk', 'Y', 'N', '2015-08-26 23:51:00', '2015-08-26 23:51:00', 'N'),
(2, 1, 'Update website', 'Y', 'N', '2015-08-26 23:56:00', '2015-08-26 23:56:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `subactions`
--

CREATE TABLE IF NOT EXISTS `subactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(250) NOT NULL,
  `type` varchar(250) DEFAULT NULL,
  `reminder` enum('Y','N') NOT NULL DEFAULT 'N',
  `date_reminder` date DEFAULT '0000-00-00',
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Gegevens worden geëxporteerd voor tabel `subactions`
--

INSERT INTO `subactions` (`id`, `actions_id`, `name`, `type`, `reminder`, `date_reminder`, `date_create`, `date_edit`, `archive`) VALUES
(1, 1, 'Sam nam telefoon niet op, later nog eens terubellen', 'Telefoon', 'Y', '2015-09-12', '2015-09-09 14:00:00', '2015-09-09 14:00:00', 'N'),
(2, 1, 'Sam heeft teruggebeld in de namiddag', 'Telefoon', 'N', '0000-00-00', '2015-09-09 21:00:00', '2015-09-09 21:00:00', 'N'),
(3, 2, 'Nog geen respons ontvangen op e-mail', 'E-mail', 'N', '0000-00-00', '2015-09-09 21:10:00', '2015-09-09 21:10:00', 'N'),
(23, 1, 'd', 'd', 'N', NULL, '2015-09-11 13:58:29', '2015-09-11 13:58:29', 'N'),
(21, 1, 'nieuw', 'nieuw', 'N', NULL, '2015-09-11 13:49:00', '2015-09-11 13:49:00', 'N'),
(22, 1, 'dfsfds', 'sd', 'Y', NULL, '2015-09-11 13:58:16', '2015-09-11 13:58:16', 'N'),
(20, 1, 'ff', 'r', 'N', NULL, '2015-09-11 12:26:42', '2015-09-11 12:26:42', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tagtypes_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(250) NOT NULL,
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Gegevens worden geëxporteerd voor tabel `tags`
--

INSERT INTO `tags` (`id`, `tagtypes_id`, `name`, `date_create`, `date_edit`, `archive`) VALUES
(1, 1, 'Website', '2015-08-26 00:00:00', '2015-08-26 00:00:00', 'N'),
(2, 1, 'Webshop', '2015-08-26 00:00:00', '2015-08-26 00:00:00', 'N'),
(3, 1, 'Internet applicatie', '2015-09-04 08:55:00', '2015-09-04 08:55:00', 'N'),
(4, 2, 'Kennis', '2015-09-04 08:55:00', '2015-09-04 08:55:00', 'N'),
(5, 2, 'Telefoon', '2015-09-04 08:55:00', '2015-09-04 08:55:00', 'N'),
(6, 2, 'E-mail', '2015-09-04 08:55:00', '2015-09-04 08:55:00', 'N'),
(7, 2, 'Beurs', '2015-09-04 08:55:00', '2015-09-04 08:55:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tagtypes`
--

CREATE TABLE IF NOT EXISTS `tagtypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `date_create` datetime NOT NULL,
  `date_edit` datetime NOT NULL,
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Gegevens worden geëxporteerd voor tabel `tagtypes`
--

INSERT INTO `tagtypes` (`id`, `name`, `date_create`, `date_edit`, `archive`) VALUES
(1, 'Web', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N'),
(2, 'Communicatie', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `date_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_edit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `active` enum('Y','N') NOT NULL DEFAULT 'Y',
  `archive` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `date_create`, `date_edit`, `active`, `archive`) VALUES
(1, 'admin@in2red.be', 'test', '2015-09-03 20:22:00', '2015-09-03 20:22:00', 'Y', 'N');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
