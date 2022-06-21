USE proyectobd;

--- CREACIÓN DE TABLAS 

CREATE TABLE Usuarios
(
id_usuario  int primary key not null,
usuario varchar (30), 
contrasena varchar (30),
id_datos_usuario int,
id_direccion_usuario int,
id_compra int,
foreign key (id_datos_usuario) references Datos_Usuario(id_datos_usuario),
foreign key (id_direccion_usuario) references Direccion_Usuario(id_direccion_usuario),
foreign key (id_compra) references Compra(id_compra)
);

CREATE TABLE Roles 
(
id_rol int primary key not null,
nombre_rol varchar (30), 
descripcion_rol varchar (50)
);


CREATE TABLE Usuario_Rol (
id_usuario_rol int  primary key not null,
id_rol int not null, 
id_usuario int not null,
foreign key (id_rol) references Roles(id_rol),
foreign key (id_usuario) references Usuarios(id_usuario)
);


CREATE TABLE Datos_Usuario (
id_datos_usuario int primary key not null, 
nombre_usuario varchar (30),
apellido_paterno varchar (30),
apellido_materno varchar (30),
numero_telefonico varchar (20),
fecha_nacimiento varchar (20),
correo_electronico varchar (20)
);


CREATE TABLE Direccion_Usuario(
id_direccion_usuario int primary key not null,
estado varchar (30),
municipio varchar (40),
colonia varchar (50),
codigo_postal varchar (7),
calle varchar (30)
);


CREATE TABLE Compra(
id_compra int primary key not null,
fecha_compra date, 
cantidad int, 
precio_compra varchar (30),
id_producto int,
id_direccion_usuario int,
id_datos_usuario int,
foreign key (id_producto) references Producto(id_producto),
foreign key (id_direccion_usuario) references Direccion_Usuario(id_direccion_usuario),
foreign key (id_datos_usuario) references Datos_Usuario(id_datos_usuario)
);

CREATE TABLE Producto(
id_producto int primary key not null,
nombre_producto varchar (30),
descripcion_producto text (50),
precio_producto varchar (30),
stock_producto int,
id_categoria int,
foreign key (id_categoria) references Categoria(id_categoria)
);


CREATE TABLE Categoria(
id_categoria int primary key not null,
nombre_categoria varchar (30),
descripcion_categoria text (50),
id_tienda int, 
foreign key (id_tienda) references Tienda(id_tienda)
);


CREATE TABLE Tienda(
id_tienda int primary key not null,
nombre_tienda varchar (30),
direccion_tienda text (60)
)


---INSERCION DE LOS REGISTROS 

---USUARIOS 

INSERT INTO Usuarios (id_usuario, usuario, contrasena) 
VALUES
('1', 'Alan11', 'ajla110496'),
('2', 'Jose25', 'jlpm301289'),
('3', 'Maria26', 'mjgl130498'),
('4', 'Sonia53', 'skmn180685'),
('5', 'Pedro87', 'plgh')
  


---ROLES

INSERT INTO Roles (id_rol, nombre_rol, descripcion_rol) 
VALUES
('01', 'Administrador', 'Administrador de la tienda'),
('02', 'Empleado', 'Empleado de la tienda'),
('03', 'Cliente', 'Cliente registrado de la tienda'),
('04', 'Visitante', 'Cliente visitante de la tienda')
  

---DATOS USUARIO

INSERT INTO  Datos_Usuario (id_datos_usuario, nombre_usuario, apellido_paterno, apellido_materno, numero_telefonico, fecha_nacimiento, correo_electronico) 
VALUES
('001', 'Alan', 'Lopez', 'Alcantara', '55664433','11/04/96', 'alan@gmail.com'),
('002', 'Jose', 'Martinez', 'Rodriguez', '55778899', '30/06/89', 'jose@gmail.com'),
('003', 'Maria', 'Perez', 'Torres', '55443322', '01/07/85', 'maria@gmail.com'),
('004', 'Sonia', 'Flores', 'Guzman', '55440098', '18/07/78', 'sonia@gmail.com'),
('005', 'Pedro', 'Muñoz', 'Corona', '55339900', '07/12/98', 'pedro@gmail.com')
  
  
--- DIRECCION USUARIO

INSERT INTO Direccion_Usuario (id_direccion_usuario, estado, municipio, colonia, codigo_postal, calle)
VALUES
('101', 'Mexico', 'Ecatepec', 'Jardines', '55220', 'Durazno'),
('102', 'CDMX', 'Azcapotzalco', 'Narvarte', '78090', 'Benito Juarez'),
('103', 'Mexico', 'Nezahualcoyotl', 'Xola', '55689', 'Gardenia'),
('104', 'CDMX', 'Coyoacan', 'Viaducto', '66789', 'Amapola'),
('105', 'Mexico', 'Ecatepec', 'Granjas Valle', '55225', 'Allende')



--- COMPRA

INSERT INTO Compra (id_compra, fecha_compra, cantidad, precio_compra)
VALUES
('0001', '2022-04-11', '1', '$300'),
('0002', '2022-05-18','2', '$250'),
('0003', '2022-05-20','3', '$1000'),
('0004', '2022-06-29','4', '$1800'),
('0005', '2022-07-01','5', '$400')

---- PRODUCTO 

INSERT INTO Producto (id_producto,nombre_producto,descripcion_producto, precio_producto, stock_producto)
VALUES 
('801', 'Televisor', 'Televisor de 70 pulgadas', '$1000', '10'),
('802', 'Audifonos Sony', 'Audifonos alambricos Sony', '$300', '20'),
('803', 'Play Station 5', 'Consola de Play Station 500gb', '$1800', '8'),
('804', 'Telefono inalambrico', 'Telefono inalambrico', '$400', '20'),
('805', 'Alarma de humo', 'Alarma de humo', '$250', '14')

--- CATEGORIA

INSERT INTO Categoria (id_categoria, nombre_categoria, descripcion_categoria)
VALUES
('701', 'Gamers', 'Videojuegos y consolas'),
('702', 'Salud y belleza', 'Articulos de cuidado personal'),
('703', 'Hogar', 'Articulos de seguridad'),
('704', 'Telefonia', 'Telefonos y celulares'),
('705', 'Electronicos', 'Accesorios electronicos')


---TIENDA

INSERT INTO Tienda (id_tienda, nombre_tienda, direccion_tienda)
VALUES 
('601', 'Electronics Norte', 'Azcapotzalco 96'), 
('602', 'Electronics Oriente', 'Nezahualcoyotl 60'), 
('603', 'Electronics Sur', 'Metepec 78'), 
('604', 'Electronics Centro', 'Plaza Sendero'), 
('605', 'Electronics Small', 'Forum Buenavista')



--- CONSULTAS BÁSICAS 


SELECT * FROM Usuarios 
SELECT * FROM Tienda
SELECT * FROM Producto
SELECT * FROM Roles
SELECT * FROM Datos_Usuario
SELECT * FROM Direccion_Usuario
SELECT * FROM Compra
SELECT * FROM Categoria
SELECT * FROM Usuario_Rol

SELECT usuario FROM Usuarios 



