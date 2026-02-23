/*
  Warnings:

  - The primary key for the `detailedSales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `detailedSales` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `detailedSales` table. All the data in the column will be lost.
  - Added the required column `product_name` to the `detailedSales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_price` to the `detailedSales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "detailedSales" DROP CONSTRAINT "detailedSales_pkey",
DROP COLUMN "Id",
DROP COLUMN "price",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "product_name" TEXT NOT NULL,
ADD COLUMN     "product_price" INTEGER NOT NULL,
ADD CONSTRAINT "detailedSales_pkey" PRIMARY KEY ("id");
