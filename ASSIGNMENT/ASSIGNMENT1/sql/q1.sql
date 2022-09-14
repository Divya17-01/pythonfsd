CREATE DATABASE `assignment1`; 
USE `assignment1`;


CREATE TABLE `employee` (
    `id` TINYINT(4) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `salary` INT(11) NOT NULL,
    `manager_id` TINYINT(4),
    PRIMARY KEY (`id`)
);


INSERT INTO `Employee` VALUES (1,'joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,NULL),(4,'Max',90000,NULL);

SELECT 
    employee_name
FROM
    (SELECT 
        e.name AS employee_name,
            e.salary AS employee_salary,
            m.name AS manager_name,
            m.salary AS manager_salary
    FROM
        employee e, employee m
    WHERE
        m.id = e.manager_id) as info
WHERE
    employee_salary > manager_salary;


