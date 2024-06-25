/*
  Warnings:

  - Added the required column `cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `cep` INTEGER NOT NULL,
    ADD COLUMN `cpf` INTEGER NOT NULL,
    ADD COLUMN `telephone` INTEGER NOT NULL;
