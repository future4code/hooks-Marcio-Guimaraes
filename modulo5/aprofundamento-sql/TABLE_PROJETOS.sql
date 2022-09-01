USE `database-name`; ##hooks-4313446-marcio-guimaraes`

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projetos (
id VARCHAR(30) PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL,
title VARCHAR(30) NOT NULL,
date DATE

 );
 
  SELECT * FROM Projetos;
  
 
 INSERT INTO Projetos (id,name,title,date)
 VALUES
 ("001","LabeSky","LSY","2023/10/05"),
 ("002","Labefy","LFY","2024/01/06"),
 ("003","AstroZoom","AZM","2022/12/20");
 

 
 DROP TABLE Projetos
 
 
 
 
 
 
 
