/*
  Warnings:

  - You are about to alter the column `discount` on the `promos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "promos" ALTER COLUMN "discount" SET DATA TYPE INTEGER;
