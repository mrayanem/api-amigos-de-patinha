/*
  Warnings:

  - You are about to drop the column `userId` on the `animals` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `animals_userId_key` ON `animals`;

-- AlterTable
ALTER TABLE `animals` DROP COLUMN `userId`;
