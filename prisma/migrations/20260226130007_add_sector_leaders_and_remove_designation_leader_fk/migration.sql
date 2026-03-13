/*
  Warnings:

  - You are about to drop the column `leaderId` on the `Designation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Designation" DROP CONSTRAINT "Designation_leaderId_fkey";

-- AlterTable
ALTER TABLE "Designation" DROP COLUMN "leaderId",
ADD COLUMN     "leader" TEXT;

-- AlterTable
ALTER TABLE "Sector" ADD COLUMN     "leaderDayId" INTEGER,
ADD COLUMN     "leaderNightId" INTEGER,
ADD COLUMN     "managerId" INTEGER,
ADD COLUMN     "supervisorDayId" INTEGER,
ADD COLUMN     "supervisorNightId" INTEGER;

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_leaderDayId_fkey" FOREIGN KEY ("leaderDayId") REFERENCES "Leader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_leaderNightId_fkey" FOREIGN KEY ("leaderNightId") REFERENCES "Leader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_supervisorDayId_fkey" FOREIGN KEY ("supervisorDayId") REFERENCES "Leader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_supervisorNightId_fkey" FOREIGN KEY ("supervisorNightId") REFERENCES "Leader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Leader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
