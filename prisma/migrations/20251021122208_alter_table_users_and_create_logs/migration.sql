/*
  Warnings:

  - A unique constraint covering the columns `[cardNumber,unit]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('SUPERADMIN', 'ADMIN', 'LEADER', 'USER');

-- CreateEnum
CREATE TYPE "LOGACTIONS" AS ENUM ('LOGIN', 'CREATE', 'DELETE', 'EDIT', 'LIST');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "employeeId" INTEGER NOT NULL,
ADD COLUMN     "firstLogin" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "unit" "UNIT" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserApplication" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "role" "ROLE" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLogs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT,
    "action" "LOGACTIONS" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AuditLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cardNumber_unit_key" ON "User"("cardNumber", "unit");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserApplication" ADD CONSTRAINT "UserApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserApplication" ADD CONSTRAINT "UserApplication_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLogs" ADD CONSTRAINT "AuditLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLogs" ADD CONSTRAINT "AuditLogs_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
