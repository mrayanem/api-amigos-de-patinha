/*
  Warnings:

  - You are about to alter the column `livesWellIn` on the `animals` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.

*/
-- DropForeignKey
ALTER TABLE `animals` DROP FOREIGN KEY `animals_userId_fkey`;

-- AlterTable
ALTER TABLE `animals` MODIFY `livesWellIn` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_AnimalToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AnimalToUser_AB_unique`(`A`, `B`),
    INDEX `_AnimalToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnimalToUser` ADD CONSTRAINT `_AnimalToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `animals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimalToUser` ADD CONSTRAINT `_AnimalToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
