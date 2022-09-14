USE `assignment1`;


CREATE TABLE `person` (
    `person_id` INT(11) NOT NULL AUTO_INCREMENT,
    `First_name` VARCHAR(50) NOT NULL,
    `Last_name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`person_id`)
);
CREATE TABLE `address` (
	`address_id` INT(11) NOT NULL AUTO_INCREMENT,
    `person_id` INT(11) NOT NULL ,
    `city` VARCHAR(50) NOT NULL,
    `state` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`address_id`)
);
INSERT INTO `person` VALUES (1,'joe','jo'),(2,'Henry','ray'),(3,'Sam','sung'),(4,'Max','Min');
INSERT INTO `person` VALUES(9,'abc','cde');
INSERT INTO `address` values(3,1,'Vinte','NY'),(34267,2,'Myworks','WV'),(096,3,'Yadel','San Francisco'),
(10,5, 'Parkway','San');

SELECT 
    p.First_name, p.Last_name, a.city, a.state
FROM
    person AS p
        LEFT JOIN
    address AS a ON p.person_id = a.person_id;