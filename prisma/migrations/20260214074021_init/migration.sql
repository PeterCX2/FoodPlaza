/*
  Warnings:

  - You are about to drop the column `name` on the `sales` table. All the data in the column will be lost.
  - Added the required column `tax` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "name",
ADD COLUMN     "tax" DECIMAL(65,30) NOT NULL;
