drop database if exists `assignment`;
create database `assignment`;
USE `assignment`;

CREATE TABLE `scores` (
    `id` INT(10) NOT NULL AUTO_INCREMENT,
    `score` DECIMAL(5 , 2 ) NOT NULL,
    PRIMARY KEY (`id`)
);
INSERT INTO `scores` VALUES (1,3.50),(2,3.65),(3,4.00),(4,3.85),(5,4.00),(6,3.65);

select score , DENSE_RANK() OVER(ORDER BY score DESC) AS ranks from scores;