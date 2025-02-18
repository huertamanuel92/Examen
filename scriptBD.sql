CREATE DATABASE TiendaExamen
Go

USE TiendaExamen
GO

CREATE TABLE Clientes
(
	Id VARCHAR(40) PRIMARY KEY,
	Nombre VARCHAR(30) NOT NULL,
    Apellidos VARCHAR(30) NOT NULL,
	Direccion VARCHAR(50) NOT NULL,

)

GO

CREATE TABLE Tienda (
	Id VARCHAR(40) PRIMARY KEY,
	Sucursal VARCHAR(30) NOT NULL,
	Direccion VARCHAR(50) NOT NULL,

)

GO


INSERT INTO TIENDA (Id, Sucursal, Direccion)  VALUES (NEWID(), 'Ecatepec', 'Plaza las Americas');
INSERT INTO TIENDA (Id, Sucursal, Direccion)  VALUES (NEWID(), 'Tienda Forum Buenavista', 'CDMX');
SELECT * FROM Tienda


CREATE  TABLE Articulos (
	Id VARCHAR(40) PRIMARY KEY,
	Codigo VARCHAR(30) NOT NULL,
	Nombre VARCHAR(35) NOT NULL,
	Descripcion VARCHAR(70) NOT NULL,
	Precio decimal NOT NULL,
	Imagen VARCHAR(50) NULL,
	Stock int NOT NULL,
)
INSERT INTO Articulos (Id, Codigo, Nombre, Descripcion, Precio, Imagen, Stock) VALUES (NEWID(), 'ART1', 'Televisión 45 pulgadas', 'Televisión 45 pulgadas', 10000.0, '',  5)
INSERT INTO Articulos (Id, Codigo, Nombre, Descripcion, Precio, Imagen, Stock) VALUES (NEWID(), 'ART2', 'Lavadora Hisense', 'Lavadora Hisense WSA1803P Semiautomática 2 Tinas', 4989.00, '',  5)
INSERT INTO Articulos (Id, Codigo, Nombre, Descripcion, Precio, Imagen, Stock) VALUES (NEWID(), 'ART3', 'Estufa Mabe', 'Estufa Mabe EM7620BAIS2 Piso 30 Plata', 5789.00, '',  2)
INSERT INTO Articulos (Id, Codigo, Nombre, Descripcion, Precio, Imagen, Stock) VALUES (NEWID(), 'ART4', 'Samsung Galaxy S24', 'Smartphone Samsung Galaxy S24 FE 8GB RAM 256GB ROM Gris Desbloqueado', 10499.00, '',  2)
select * from Articulos
SELECT * FROM Tienda
GO


create  table ArticuloTienda
(
	Id VARCHAR(40) PRIMARY KEY,
	IdTienda VARCHAR(40) NOT NULL,
	IdArticulo VARCHAR(40) NOT NULL,
	Fecha DateTime NOT NULL,
    FOREIGN KEY (IdTienda) references Tienda(Id) ,
	FOREIGN KEY (IdArticulo) references Articulos(Id) 
)
select * from ArticuloTienda

create table ClienteArticulo
(
	Id VARCHAR(40) PRIMARY KEY,
	IdCliente VARCHAR(40) NOT NULL,
	IdArticulo VARCHAR(40) NOT NULL,
	Cantidad decimal not null,
	Fecha DateTime NOT NULL,
    FOREIGN KEY (IdCliente) references Clientes(Id) ,
	FOREIGN KEY (IdArticulo) references Articulos(Id) 
)

create    Table Usuario
(
  Id VARCHAR(40) PRIMARY KEY,
  Nombre VARCHAR(40) NOT NULL,
  ApellidoPaterno VARCHAR(40) NOT NULL,
  ApellidoMaterno VARCHAR(40) NOT NULL,
  NombreUsuario VARCHAR(30) NOT NULL,
  Pass VARCHAR(100) NOT NULL,
  Email VARCHAR(50) NOT NULL,
  Activo bit NOT NULL,
  FechaAlta DATETIME NOT NULL
)

select * from Usuario


