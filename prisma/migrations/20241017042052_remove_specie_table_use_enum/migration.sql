/*
  Warnings:

  - You are about to drop the `species` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `specie` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `animals` DROP FOREIGN KEY `animals_specieId_fkey`;

-- AlterTable
ALTER TABLE `animals` ADD COLUMN `specie` ENUM('GATO', 'CACHORRO') NOT NULL;

-- DropTable
DROP TABLE `species`;
