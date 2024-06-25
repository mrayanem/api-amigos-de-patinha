/*
  Warnings:

  - You are about to drop the `SubAnimalCategoy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `animalCategorys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `SubAnimalCategoy` DROP FOREIGN KEY `SubAnimalCategoy_categoryId_fkey`;

-- DropTable
DROP TABLE `SubAnimalCategoy`;

-- DropTable
DROP TABLE `animalCategorys`;

-- CreateTable
CREATE TABLE `SubAnimalCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `SubAnimalCategories_categoryId_key`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animalCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubAnimalCategories` ADD CONSTRAINT `SubAnimalCategories_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `animalCategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
