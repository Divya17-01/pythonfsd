USE `assignment`;

CREATE TABLE `world` (
    `name` VARCHAR(25) NOT NULL,
    `continent` VARCHAR(25) NOT NULL,
    `area` BIGINT(4),
    `population` BIGINT(4),
    `gdp` BIGINT(4),
    PRIMARY KEY (`name`)
);
INSERT INTO `world` VALUES ('afganistan','asia',652230,25500100,20343000000),
('albania','Europe',28748,2831741,12960000000),
('algeria','africa',2381741,37100000,188681000000),
('andorra','Europe',468,78115,3712000000),
('angola','Africa',1246700,20609294,1009900000000);

SELECT 
    name, population, area
FROM
    world
WHERE
    area >= 3000000
        OR population >= 25000000;