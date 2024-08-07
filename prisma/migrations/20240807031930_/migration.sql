/*
  Warnings:

  - You are about to drop the `users_roles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[roleId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users_roles` DROP FOREIGN KEY `users_roles_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `users_roles` DROP FOREIGN KEY `users_roles_user_id_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `roleId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `users_roles`;

-- CreateIndex
CREATE UNIQUE INDEX `users_roleId_key` ON `users`(`roleId`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
