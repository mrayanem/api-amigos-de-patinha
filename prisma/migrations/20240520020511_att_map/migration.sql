/*
  Warnings:

  - You are about to drop the `SubAnimalCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `animal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `animalCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `specie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `SubAnimalCategory` DROP FOREIGN KEY `SubAnimalCategory_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `animal` DROP FOREIGN KEY `animal_specieId_fkey`;

-- DropForeignKey
ALTER TABLE `animal` DROP FOREIGN KEY `animal_userId_fkey`;

-- DropTable
DROP TABLE `SubAnimalCategory`;

-- DropTable
DROP TABLE `animal`;

-- DropTable
DROP TABLE `animalCategory`;

-- DropTable
DROP TABLE `specie`;

-- CreateTable
CREATE TABLE `species` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `animalSize` VARCHAR(191) NOT NULL,
    `specieId` INTEGER NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `photoAnimal` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `animals_userId_key`(`userId`),
    UNIQUE INDEX `animals_specieId_key`(`specieId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubAnimalCategoy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `SubAnimalCategoy_categoryId_key`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animalCategorys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_specieId_fkey` FOREIGN KEY (`specieId`) REFERENCES `species`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubAnimalCategoy` ADD CONSTRAINT `SubAnimalCategoy_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `animalCategorys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
