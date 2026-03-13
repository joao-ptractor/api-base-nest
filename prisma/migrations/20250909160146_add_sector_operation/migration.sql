-- AlterTable
ALTER TABLE "Sector" ADD COLUMN     "operationId" INTEGER;

-- CreateTable
CREATE TABLE "Operation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Operation_value_key" ON "Operation"("value");

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "Operation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
