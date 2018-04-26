START TRANSACTION;
ALTER DATABASE getskytrade CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE `Countries` (
  `Code` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Code`)
);

CREATE TABLE `States` (
  `Code` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Code`)
);

CREATE TABLE `Users` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `PasswordHash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `CountryCode` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `StateCode` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `City` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PostalCode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DistanceUnits` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Currency` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Status` int(11) DEFAULT NULL,
  `RegisteredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TimeOffset` decimal(10,0) NOT NULL,
  `ResetPasswordCode` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UserName` (`UserName`),
  UNIQUE KEY `Email` (`Email`),
  KEY `Users_fk0` (`CountryCode`),
  KEY `Users_fk1` (`StateCode`),
  CONSTRAINT `Users_fk0` FOREIGN KEY (`CountryCode`) REFERENCES `Countries` (`Code`),
  CONSTRAINT `Users_fk1` FOREIGN KEY (`StateCode`) REFERENCES `States` (`Code`)
);

CREATE TABLE `Adverts` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Type` int(11) NOT NULL,
  `Author` bigint(20) NOT NULL,
  `AmountFrom` decimal(13,7) NOT NULL,
  `AmountTo` decimal(13,7) DEFAULT NULL,
  `FixedPrice` decimal(13,7) DEFAULT NULL,
  `PercentageAdjustment` decimal(13,7) DEFAULT NULL,
  `Currency` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `AdditionalInfo` text COLLATE utf8_unicode_ci NOT NULL,
  `TravelDistance` bigint(20) NOT NULL,
  `TravelDistanceUoM` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `CountryCode` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `StateCode` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `City` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `PostalCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(11) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TradeCashInPerson` bit(1) DEFAULT NULL,
  `TradeCashByMail` bit(1) DEFAULT NULL,
  `TradeMoneyOrderByMail` bit(1) DEFAULT NULL,
  `TradeOther` bit(1) DEFAULT NULL,
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0',
  `ExpiredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  KEY `Adverts_fk0` (`Author`),
  KEY `Adverts_fk1` (`CountryCode`),
  KEY `Adverts_fk2` (`StateCode`),
  CONSTRAINT `Adverts_fk0` FOREIGN KEY (`Author`) REFERENCES `Users` (`Id`),
  CONSTRAINT `Adverts_fk1` FOREIGN KEY (`CountryCode`) REFERENCES `Countries` (`Code`),
  CONSTRAINT `Adverts_fk2` FOREIGN KEY (`StateCode`) REFERENCES `States` (`Code`)
);

CREATE TABLE `Messages` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Author` bigint(20) NOT NULL,
  `AdvertId` bigint(20) NOT NULL,
  `Body` text COLLATE utf8_unicode_ci NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Recipient` bigint(20) DEFAULT NULL,
  `IsRead` bit(1) DEFAULT b'0',
  PRIMARY KEY (`Id`),
  KEY `Messages_fk0` (`Author`),
  KEY `Messages_fk1` (`AdvertId`),
  KEY `Messages_fk0_Users` (`Recipient`),
  CONSTRAINT `Messages_fk0` FOREIGN KEY (`Author`) REFERENCES `Users` (`Id`),
  CONSTRAINT `Messages_fk0_Users` FOREIGN KEY (`Recipient`) REFERENCES `Users` (`Id`),
  CONSTRAINT `Messages_fk1` FOREIGN KEY (`AdvertId`) REFERENCES `Adverts` (`Id`)
);

INSERT INTO `getskytrade`.`Countries`
(`Code`, `Name`)
VALUES
("US", "United States of America"),
("GR", "Greece");

INSERT INTO `getskytrade`.`States`
(`Code`, `Name`)
VALUES
("CA", "California");

COMMIT;
