/*
  Warnings:

  - You are about to drop the column `sexo` on the `animals` table. All the data in the column will be lost.
  - You are about to drop the column `telephone` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telephone]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_telefone_key` ON `users`;

-- AlterTable
ALTER TABLE `animals` DROP COLUMN `sexo`,
    ADD COLUMN `sex` VARCHAR(191) NOT NULL DEFAULT 'UNKNOWN';

-- AlterTable
ALTER TABLE `users` DROP COLUMN `telephone`,
    ADD COLUMN `telephone` VARCHAR(191) NOT NULL DEFAULT '00-00000-0000';

-- CreateIndex
CREATE UNIQUE INDEX `users_telephone_key` ON `users`(`telephone`);
