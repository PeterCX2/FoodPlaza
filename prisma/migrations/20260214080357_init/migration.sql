/*
  Warnings:

  - You are about to drop the column `taxNumber` on the `sales` table. All the data in the column will be lost.
  - You are about to alter the column `tax` on the `sales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "taxNumber",
ALTER COLUMN "tax" SET DATA TYPE INTEGER;
