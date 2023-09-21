CREATE TABLE `Card`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `cost` INT NOT NULL,
    `power` INT NOT NULL,
    `cardDefImageID` VARCHAR(255) NOT NULL,
    `Ability` VARCHAR(255) NOT NULL,
    `cardDescprtion` TINYTEXT NOT NULL
);
CREATE TABLE `Users`(
    `id` CHAR(36) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `deckID` INT NOT NULL
);
ALTER TABLE
    `Users` ADD PRIMARY KEY(`id`);
CREATE TABLE `Feature Card`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cardID` BIGINT NOT NULL
);
CREATE TABLE `Decks`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `deckID` BIGINT NOT NULL,
    `deckName` VARCHAR(255) NOT NULL
);
CREATE TABLE `Deck`(
    `id` CHAR(36) NOT NULL,
    `cardID` BIGINT NOT NULL
);
ALTER TABLE
    `Deck` ADD PRIMARY KEY(`id`);
CREATE TABLE `Category`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Feature Card` ADD CONSTRAINT `feature card_cardid_foreign` FOREIGN KEY(`cardID`) REFERENCES `Card`(`id`);
ALTER TABLE
    `Users` ADD CONSTRAINT `users_deckid_foreign` FOREIGN KEY(`deckID`) REFERENCES `Decks`(`id`);
ALTER TABLE
    `Decks` ADD CONSTRAINT `decks_deckid_foreign` FOREIGN KEY(`deckID`) REFERENCES `Deck`(`id`);
ALTER TABLE
    `Deck` ADD CONSTRAINT `deck_cardid_foreign` FOREIGN KEY(`cardID`) REFERENCES `Card`(`id`);