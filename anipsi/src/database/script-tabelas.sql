CREATE DATABASE projeto_individual;
USE projeto_individual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60),
    email VARCHAR(60),
    senha VARCHAR(60)
);

CREATE TABLE teste(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60)
);

CREATE TABLE resultado_quizz(
	id INT AUTO_INCREMENT,
    resiliencia INT,
    confianca INT,
    estrategia INT,
    controle_emocional INT,
    impulsividade INT,
    fkUsuario INT,
    fkTeste INT,
    CONSTRAINT resultadoUser FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
    CONSTRAINT resultadoTeste FOREIGN KEY (fkTeste) REFERENCES teste (id),
    CONSTRAINT pkComposta PRIMARY KEY (id, fkUsuario, fkTeste)
);
SELECT id, resiliencia, confianca, estrategia, controle_emocional, impulsividade FROM resultado_quizz;
INSERT INTO teste(nome) VALUES ('Teste Anime');
