/*
  Warnings:

  - You are about to drop the column `specieId` on the `animals` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `animals_specieId_key` ON `animals`;

-- AlterTable
ALTER TABLE `animals` DROP COLUMN `specieId`;
