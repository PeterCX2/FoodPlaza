/*
  Warnings:

  - Changed the type of `discount` on the `promos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `taxNumber` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "promos" DROP COLUMN "discount",
ADD COLUMN     "discount" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "taxNumber" INTEGER NOT NULL;
