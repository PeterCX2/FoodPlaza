-- DropForeignKey
ALTER TABLE "detailedSales" DROP CONSTRAINT "detailedSales_sales_id_fkey";

-- AddForeignKey
ALTER TABLE "detailedSales" ADD CONSTRAINT "detailedSales_sales_id_fkey" FOREIGN KEY ("sales_id") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
