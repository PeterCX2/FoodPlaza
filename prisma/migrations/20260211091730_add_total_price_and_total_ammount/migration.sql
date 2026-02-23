/*
  Warnings:

  - Added the required column `total_price` to the `detailedSales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_amount` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "detailedSales" ADD COLUMN     "total_price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "total_amount" INTEGER NOT NULL;
