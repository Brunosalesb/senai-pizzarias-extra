create database senaiPizzarias

use senaiPizzarias

create table usuarios(
	id int identity primary key
	,email varchar(255) unique not null
	,senha varchar(255) not null
)

create table categorias(
	id int identity primary key,
	nome varchar(3) not null
)

create table pizzarias(
	id int identity primary key
	,nome varchar(255) not null
	,endereco varchar(255) not null
	,telefone varchar(11) unique not null
	,vegano bit not null
	,idCategoria int foreign key references categorias(id)
)