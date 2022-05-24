-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: todomueblesdb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Sillones'),(2,'Sofas'),(3,'Camas'),(4,'Escritorios'),(5,'Sillas'),(6,'Bibliotecas'),(7,'Muebles TV'),(8,'Roperos'),(9,'Mesas');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `materiales` varchar(255) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `precio` int(10) NOT NULL,
  `dimensiones` varchar(255) NOT NULL,
  `peso` int(10) NOT NULL,
  `categoriaId` int(10) DEFAULT NULL,
  `productImg` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`categoriaId`),
  CONSTRAINT `products_FK` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Escorpio','Escritorio ajustable con motor electrico para inclinaciones de hasta 160º','Metal y plastico',20,145000,'110x110x80cm',125,4,'escorpio1.jpg'),(2,'Duna','Escritorio de estilo modesto, con estructura de tapas de madera ','Madera RH',20,35000,'85x110x48cm',18,4,'Escritorio Duna (1).jpg'),(3,'Amaretto','Los muebles de oficina tipo Escritorios son estructuras útiles para espacios reducidos, fabricados en materiales resistentes y durables,','Madera',20,45000,'100x95x40cm',15,4,'Escritorio Amaretto (1).jpg'),(4,'Eames','Todos nuestros muebles vienen desarmados y empacados en caja, requieren ensamble o armado no incluido en el precio de venta.','Madera, acero y acrilico',20,75000,'42x50x82cm',12,5,'Silla Eames (1).jpg'),(5,'Cromada','Limpiar la silla regularmente con un trapo seco para mantenerlo libre de polvo o mugre en general, no usar esponjillas, detergentes, solventes, hipocloritos o sustancias que puedan desteñir el material de la silla','Cuero',20,70000,'55x82x44cm',11,5,'Silla Cromada (1).jpg'),(6,'Capricornio','Gran durabilidad, con un respaldo alto para mayor comodidad y soporte. Base cromada y ruedas firmes.','Metal y cuero',20,100000,'62x64x104cm',14,5,'Silla Capricornio (1).jpg'),(7,'Lisa','Madera aglomerada recubierta con Melamina - MDP','Madera',20,5000,'26x62x180',24,6,'Biblioteca Lisa (1).jpg'),(8,'Milano','Producto exclusivo traido de Italia ','Madera',20,65000,'25x60x160cm',19,6,'Biblioteca Milano (1).jpg'),(9,'Eco','Todos nuestros muebles vienen desarmados y empacados en caja, requieren ensamble o armado no incluido en el precio de venta.','Madera y acero',20,80000,'30x62x120cm',17,6,'Biblioteca Eco (1).jpg'),(10,'Arbol','Biblioteca simple con forma de arbol capacidad hasta de 20 libros','Madera',20,35000,'90×58×27cm',14,6,'bibliotecaArbol1.jpg'),(11,'Squad','Aspecto rustico con detalles en la superficie','Madera',20,65000,'181×60x29cm',17,6,'BibliotecaSquad1.jpg'),(12,'Hierro','Fortaleza para sus libros ','Hierro y madera',20,60000,'180x100 x30cm ',20,6,'bibliotecaHierro1.jpg'),(13,'Roble','Mueble de Roble fino para soporte de tv','Roble',20,60000,'47x160x40cm',25,7,'muebleTVRoble1.jpg'),(14,'Walker','Opcion economica para ubicar la tv de forma comoda','Madera y plastico',20,15000,'60x177x38cm',23,7,'muebleTVWalker1.jpg'),(15,'Tower','Ideal para Televisores poco practicos','Madera y acero',20,14000,'160x160x40cm',20,7,'muebleTVTorre1.jpg'),(16,'Plus','Ropero gigante con varios cubiculos','Madera',20,70000,' 180x29x53cm',22,8,'roperoPlus1.jpg'),(17,'Yale','Amplio espacio para guardar ropa','Madera',20,85000,'182x78x53cm',19,8,'RoperoYale1.jpg'),(18,'Vilum','Hermoso disenio para guardar bastas cantidades de ropa','Madera',20,120000,'157x100x30cm',22,8,'roperoVilum1.jpg'),(19,'Redonda','Es redonda, es de madera y es una mesa, que mas queres ?','Madera y acero',20,16000,'40x78x78cm',12,9,'mesaRedonda1.jpg'),(20,'Pavo','Majestuosa ave dandole soporte a tus comidas','Plastico y vidrio',20,140000,'63x50x50cm',15,9,'mesaPavo1.jpg'),(21,'Cobra','Extravagante soporte de interior con morfologia serpentina','Plastico y vidrio',20,145000,'60x47x47cm',15,9,'mesaCobra1.jpg'),(22,'Evette','Ubicalo cerca de una ventana y te sentiras como que estas en un hermoso parque ','Polyester',20,13000,'55x70x70cm',22,1,'sillon A 1.jpg'),(23,'Amazon','Este encantador sillon ofrece un look moderno, inspirado en diseño de a mediados de siglo','Cuero',20,150000,'55x60x57cm',18,1,'Sillon B 1.jpg'),(24,'Cecilia Swivel','Disfrute de la comodidad de este sillon en cualquier habitacion de su hogar','Hierro',20,160000,'60x62x58cm',22,1,'Sillon C 1.jpg'),(25,'Kindle','Piel regenerada, patas de madera maciza','Cuero',20,140000,'240x240x70cm',30,2,'SofaKindle1.jpg'),(26,'Chaise','Provista de asiento alargado para poder estirar las piernas sobre el','Madera, fibra y metal',20,120000,'280x250x150cm',29,2,'SofaChaise1.jpg'),(27,'Chester','Amplio y de material reciclado para asistir  al planeta sin perder comodidad','Madera y pana',20,80000,'150x85x75cm',31,2,'SofaChester1.jpg'),(28,'Car','Yo duermo en un auto deportivo y tu?','Madera y plastico ',20,150000,'100x250x150cm',20,3,'camaCar1.jpg'),(29,'Weed','Cama matrimonial incluye funda de hojas de marihuana','Madera y microfibra',20,160000,'35x150x160cm',22,3,'Cama A 1.jpg'),(30,'Niebla','Diseño moderno Geek con adornos en la cabecera cuyo estilo perdurara en el tiempo','Metal',20,80000,'160x140x130cm',50,4,'Escritorio Niebla (1).jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usercategory`
--

DROP TABLE IF EXISTS `usercategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usercategory` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercategory`
--

LOCK TABLES `usercategory` WRITE;
/*!40000 ALTER TABLE `usercategory` DISABLE KEYS */;
INSERT INTO `usercategory` VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `usercategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userproducts`
--

DROP TABLE IF EXISTS `userproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userproducts_FK` (`productId`),
  KEY `userproducts_FK_1` (`userId`),
  CONSTRAINT `userproducts_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `userproducts_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userproducts`
--

LOCK TABLES `userproducts` WRITE;
/*!40000 ALTER TABLE `userproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `userproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `idType` varchar(100) NOT NULL,
  `idDoc` int(100) DEFAULT NULL,
  `gender` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `phoneNumber` int(100) DEFAULT NULL,
  `userAvatar` text DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`categoryId`),
  CONSTRAINT `users_FK` FOREIGN KEY (`categoryId`) REFERENCES `usercategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jemima','Applin','japplin0@dell.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',930938623,'mujer','2021-05-23',38237295,'default-userAvatar3.png',2),(2,'Andras','McGuinness','amcguinness1@bandcamp.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',15536623,'hombre','2022-01-10',78762500,'default-userAvatar2.png',2),(3,'Gail','Kildale','gkildale2@dailymotion.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',34172212,'mujer','2021-05-23',38481144,'default-userAvatar3.png',2),(4,'Wandis','Goodsal','wgoodsal3@myspace.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',5825290,'mujer','2022-04-02',83198957,'default-userAvatar2.png',2),(5,'Cointon','Dent','cdent4@lulu.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','IT','Pasaporte',7686763,'hombre','2021-06-03',46512651,'default-userAvatar1.png',2),(6,'Rosanne','Fossick','rfossick5@sina.com.cn','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',16286434,'hombre','2021-05-11',18966514,'default-userAvatar3.png',2),(7,'Paolo','Ruzek','pruzek6@foxnews.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',22135656,'hombre','2021-07-29',61168950,'default-userAvatar3.png',2),(8,'Dulsea','Stroud','dstroud7@intel.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',1971344702,'mujer','2021-06-14',1975782587,'default-userAvatar3.png',2),(9,'Ettie','Phlippi','ephlippi8@paypal.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','BR','Cedula',32910833,'mujer','2021-11-05',34822087,'default-userAvatar4.png',2),(10,'Kingston','Laister','klaister9@theatlantic.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',19221327,'hombre','2021-12-12',23789043,'default-userAvatar3.png',2),(11,'Caro','Conner','cconnera@disqus.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','IT','Pasaporte',8503624,'mujer','2021-07-16',83026843,'default-userAvatar1.png',2),(12,'Malachi','Harmson','mharmsonb@youtube.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',14711860,'mujer','2022-04-16',45268486,'default-userAvatar4.png',2),(13,'Bobinette','Roycroft','broycroftc@utexas.edu','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',15858782,'hombre','2022-02-12',61171882,'default-userAvatar7.png',2),(14,'Staci','Pache','spached@businessinsider.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',32137032,'mujer','2021-05-29',12418922,'default-userAvatar7.png',2),(15,'Inness','Alelsandrovich','ialelsandroviche@ehow.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','IT','Pasaporte',26908058,'hombre','2021-09-22',34482746,'default-userAvatar1.png',2),(16,'Charley','Sizeland','csizelandf@topsy.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','IT','Pasaporte',504769871,'mujer','2021-11-12',1953704070,'default-userAvatar1.png',2),(17,'Hasheem','Liddel','hliddelg@cocolog-nifty.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','HN','Pasaporte',33377017,'hombre','2021-11-27',85926894,'default-userAvatar1.png',2),(18,'Chrissie','Knee','ckneeh@businessinsider.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','MX','Pasaporte',22254298,'hombre','2021-08-15',77184940,'default-userAvatar1.png',2),(19,'Cordi','Jacob','cjacobi@jalbum.net','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','BR','Cedula',18276108,'mujer','2021-06-05',36977827,'default-userAvatar4.png',2),(20,'Khalil','Verralls','kverrallsj@flavors.me','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','IT','Pasaporte',4903063,'hombre','2021-11-10',34561261,'default-userAvatar1.png',2),(21,'Rancell','Doyle','rdoylek@rambler.ru','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','HN','Cedula',1186106409,'hombre','2021-08-20',1819303562,'default-userAvatar4.png',2),(22,'Mada','Muckart','mmuckartl@google.ru','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','MX','Pasaporte',10112189,'mujer','2022-01-09',68023917,'default-userAvatar1.png',2),(23,'Juieta','Baggelley','jbaggelleym@mail.ru','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','MX','Cedula',10516433,'mujer','2021-09-18',66000465,'default-userAvatar2.png',2),(24,'Tabbie','Reuss','treussn@cbslocal.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','BR','Cedula',17999276,'hombre','2021-08-27',54438895,'default-userAvatar5.png',2),(25,'Malina','Duigenan','mduigenano@bandcamp.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','NI','Pasaporte',22224125,'mujer','2021-04-30',55202368,'default-userAvatar1.png',2),(26,'Simonette','Candlish','scandlishp@topsy.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',23858699,'mujer','2021-05-31',57578021,'default-userAvatar5.png',2),(27,'Lyn','Loverock','lloverockq@moonfruit.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','BR','Cedula',15115283,'mujer','2021-07-06',45928145,'default-userAvatar4.png',2),(28,'Gnni','Plaxton','gplaxtonr@cloudflare.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','BR','Cedula',23774162,'mujer','2021-06-24',31975783,'default-userAvatar4.png',2),(29,'Ermentrude','Goly','egolys@jimdo.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',4455981,'mujer','2021-07-24',80932690,'default-userAvatar7.png',2),(30,'Darrick','Foster-Smith','dfostersmitht@smugmug.com','$2a$10$wz/elxRwKMmR32k/BZN9mufZrNZG7WCQA3zB15o/iY.nOX1EmuhI.','AR','DNI',20137867,'hombre','2021-08-18',15525421,'default-userAvatar7.png',2),(31,'Renzo','Restair','renzo@asda.com','$2a$10$NAInMrX7WQjIhiv3CCNd4uUXOjsUSbohd0pItNkAm44kJTnwEny0m','AR','DNI',33555555,'hombre','1989-02-02',2147483647,'userAvatar-1652396821227.jpg',2),(32,'ALFMELMAK','MELMAK','MELMAK@asdasd.com','$2a$10$6NSKWLMk9ergK0FtOO0On.2LbiWzs0SraWkUDeN3ccEgfLeDw2Cm.','BH','DNI',33333333,'hombre','1990-02-02',2147483647,'userAvatar-1652397939594.txt',2),(33,'Jarabara','Jarabarajba','jarabsa@asd.com','$2a$10$22PQmfcHGBjEJsQFQP82iOWWKtJFAVTVnc3UGuidXyyY/MFB26JcK','AT','DNI',2147483647,'hombre','1990-02-02',555555555,'userAvatar-1652398445762.docx',2),(35,'Adriano','Casano','adriano@todomuebles.com','$2a$10$ZDSLh2A6NeqvGM1NI1LaxOsgzkgr7krZItwt5y6t2IIYLN6gL32ae','AR','DNI',33850048,'hombre','1990-02-02',1155555555,'perfilac.jpg',1),(36,'Alvaro','Blanquicett','alvaro@todomuebles.com','$2a$10$ZDSLh2A6NeqvGM1NI1LaxOsgzkgr7krZItwt5y6t2IIYLN6gL32ae','AL','DNI',33850000,'hombre','1988-02-01',1555555555,'perfilab.png',1),(37,'Renzo','Restaino','renzo@todomuebles.com','$2a$10$ZDSLh2A6NeqvGM1NI1LaxOsgzkgr7krZItwt5y6t2IIYLN6gL32ae','AR','DNI',33850000,'hombre','1988-06-06',555555555,'perfilrr.png',1),(38,'Steve','Cougart','steve@cougart.com','$2a$10$.r2CvVk50J2ryyfam3PEKOeZTsGVbTnXQz2VcrX2mp.pfeV4kOM8e','AS','Pasaporte',333333333,'hombre','1988-02-02',2147483647,'default-userAvatar.png',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userslog`
--

DROP TABLE IF EXISTS `userslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userslog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(200) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userslog_FK` (`userId`),
  CONSTRAINT `userslog_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userslog`
--

LOCK TABLES `userslog` WRITE;
/*!40000 ALTER TABLE `userslog` DISABLE KEYS */;
/*!40000 ALTER TABLE `userslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'todomueblesdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-24  0:14:49
