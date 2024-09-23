/*
  Warnings:

  - You are about to alter the column `animalSize` on the `animals` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `sex` on the `animals` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `name` on the `species` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `livesWellIn` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sociableWith` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vetCare` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animals` ADD COLUMN `livesWellIn` ENUM('APARTAMENTO', 'CASA') NOT NULL,
    ADD COLUMN `sociableWith` ENUM('OUTROS_ANIMAIS', 'CRIANCAS', 'DESCONHECIDOS') NOT NULL,
    ADD COLUMN `vetCare` ENUM('CASTRADO', 'VACINADO', 'VERMIFUGADO') NOT NULL,
    MODIFY `animalSize` ENUM('PEQUENO', 'MEDIO', 'GRANDE') NOT NULL,
    MODIFY `sex` ENUM('MACHO', 'FEMEA') NOT NULL;

-- AlterTable
ALTER TABLE `species` MODIFY `name` ENUM('GATO', 'CACHORRO') NOT NULL;
