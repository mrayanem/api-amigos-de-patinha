/*
  Warnings:

  - You are about to drop the `_AnimalToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `animals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_AnimalToUser` DROP FOREIGN KEY `_AnimalToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimalToUser` DROP FOREIGN KEY `_AnimalToUser_B_fkey`;

-- AlterTable
ALTER TABLE `animals` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_AnimalToUser`;

-- CreateIndex
CREATE UNIQUE INDEX `animals_id_key` ON `animals`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_id_key` ON `users`(`id`);

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
