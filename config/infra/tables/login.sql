CREATE SCHEMA `champions` ;
CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT, 
  `USERNAME` varchar(50) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
    PRIMARY KEY(`ID`)
) DEFAULT CHARSET=utf8;

--admin de teste
INSERT INTO `champions`.`accounts` 
	(`USERNAME`, `PASSWORD`, `EMAIL`) 
VALUES 
	('admin', 'admin', 'admin@admin.com');
--usuario de teste
INSERT INTO `champions`.`accounts` 
	(`USERNAME`, `PASSWORD`, `EMAIL`) 
VALUES 
	('user', 'user', 'user@user.com');
