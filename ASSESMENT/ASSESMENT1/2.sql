USE `assignment`;

CREATE TABLE `person` (
    `id` INT(4) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(40) NOT NULL,
    PRIMARY KEY (`id`)
) ;
INSERT INTO `person` VALUES (1,'john@example.com '),(2,' bob@example.com '),
(3,' john@example.com ');