/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `animal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animal` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `animal_userId_key` ON `animal`(`userId`);

-- AddForeignKey
ALTER TABLE `animal` ADD CONSTRAINT `animal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
