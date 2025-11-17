CREATE DATABASE projeto_individual;
USE projeto_individual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60),
    email VARCHAR(60),
    senha VARCHAR(60)
);