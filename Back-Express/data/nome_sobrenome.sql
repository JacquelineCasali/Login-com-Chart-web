DROP DATABASE IF EXISTS nome_sobrenome;
-- Cria banco de dados
CREATE DATABASE nome_sobrenome;

-- Seleciona banco de  dados para uso
USE nome_sobrenome;
-- Cria tabela de usuário
CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
cpf VARCHAR(50) NOT NULL,
password VARCHAR(200)  NOT NULL,
cadastro_id INT UNSIGNED
);

INSERT INTO users (cpf,password,cadastro_id)
VALUES
("546.546.546-54",1234,1),
("123.456.456-45","bolotinha",2);

-- roda a tabela
SELECT * FROM users;


DROP TABLE IF EXISTS cadastro;
CREATE TABLE cadastro (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
cpf VARCHAR(50) NOT NULL,
telefone VARCHAR(50),
password VARCHAR(200)  NOT NULL,
confirmPassword VARCHAR(200)  NOT NULL,
createdAt DATETIME,
updatedAt DATETIME

);

INSERT INTO cadastro (name,email,cpf,telefone,password,confirmPassword,createdAt,updatedAt)
VALUES
("Paulo Oliveira","546.546.546-54","45 99978-4585", "robertinho123@email.com","1234","1234","2022-09-12","2022-09-12"),
("Ana Couto","123.456.456-45","71 9999-85454","aninha123@email.com","123","123","2022-09-12","2022-09-12" );

SELECT * FROM cadastro;


DROP TABLE IF EXISTS senha;
CREATE TABLE senha (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
newPassword VARCHAR(200) ,
confirmPassword VARCHAR(200),
created_at DATETIME,
update_at DATETIME,
modified_at DATETIME,
cadastro_id INT UNSIGNED
);

INSERT INTO senha (newPassword,confirmPassword,created_at,modified_at,cadastro_id)
VALUES
("134","134","2022-09-12","2022-09-12",1);

SELECT * FROM senha;
