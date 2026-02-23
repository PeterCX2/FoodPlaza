/*
  Warnings:

  - Added the required column `price` to the `detailedSales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "detailedSales" ADD COLUMN     "price" INTEGER NOT NULL;
