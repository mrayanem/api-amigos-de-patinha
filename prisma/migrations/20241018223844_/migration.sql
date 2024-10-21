/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `SubAnimalCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `animalCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `roles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `animals` MODIFY `name` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SubAnimalCategories_id_key` ON `SubAnimalCategories`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `animalCategories_id_key` ON `animalCategories`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `roles_id_key` ON `roles`(`id`);
