/*
  Warnings:

  - Made the column `city` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `city` VARCHAR(191) NOT NULL,
    MODIFY `state` VARCHAR(191) NOT NULL;
