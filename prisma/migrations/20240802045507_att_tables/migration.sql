/*
  Warnings:

  - The primary key for the `SubAnimalCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `animalCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `animals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `species` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `SubAnimalCategories` DROP FOREIGN KEY `SubAnimalCategories_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `animals` DROP FOREIGN KEY `animals_specieId_fkey`;

-- DropForeignKey
ALTER TABLE `animals` DROP FOREIGN KEY `animals_userId_fkey`;

-- DropForeignKey
ALTER TABLE `users_roles` DROP FOREIGN KEY `users_roles_user_id_fkey`;

-- AlterTable
ALTER TABLE `SubAnimalCategories` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `categoryId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `animalCategories` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `animals` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `specieId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `species` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users_roles` DROP PRIMARY KEY,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`role_id`, `user_id`);

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_specieId_fkey` FOREIGN KEY (`specieId`) REFERENCES `species`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubAnimalCategories` ADD CONSTRAINT `SubAnimalCategories_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `animalCategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
