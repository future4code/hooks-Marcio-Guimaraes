``CREATE TABLE Labe_BankS (``
``id VARCHAR(10),``
``nome VARCHAR(64),``
``email VARCHAR(60) NOT NULL UNIQUE``
``);``

``SELECT id,nome FROM Labe_BankS;``


``DESCRIBE Labe_BankS;``

``INSERT INTO Labe_BankS (id, nome, email) ``
``VALUES (``
``"001", "Luana","lua@lbn.com"``
``),``
``("002", "Vinicius","vini@lbn.com" ),``
``("003", "Laura","lau@lbn.com" );``

``SELECT id,nome FROM Labe_BankS``
``WHERE "003";``

``SELECT id,nome FROM Labe_BankS``
``WHERE nome LIKE "%a%";``

``INSERT INTO Labe_BankS (id, nome, email)``
``VALUES("004", "Yuzo","yuzo@lbn.com" );``

``DELETE FROM Labe_BankS``
``WHERE id = "004";``

``SET SQL_SAFE_UPDATES = 0;``

``DELETE FROM Labe_BankS``
``WHERE id = "004";``

``SELECT * FROM Labe_BankS``








