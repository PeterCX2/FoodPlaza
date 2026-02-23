/*
  Warnings:

  - The primary key for the `detailedSales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `detailedSales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "detailedSales" DROP CONSTRAINT "detailedSales_pkey",
DROP COLUMN "id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "detailedSales_pkey" PRIMARY KEY ("Id");
