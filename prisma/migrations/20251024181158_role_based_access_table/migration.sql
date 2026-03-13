/*
  Warnings:

  - You are about to drop the column `role` on the `UserApplication` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,applicationId]` on the table `UserApplication` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `UserApplication` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ACTION" AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE', 'LIST');

-- AlterTable
ALTER TABLE "UserApplication" DROP COLUMN "role",
ADD COLUMN     "roleId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "ROLE";

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "resource" TEXT NOT NULL,
    "action" "ACTION" NOT NULL,
    "allowed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_applicationId_name_key" ON "Role"("applicationId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "RolePermission_roleId_resource_action_key" ON "RolePermission"("roleId", "resource", "action");

-- CreateIndex
CREATE UNIQUE INDEX "UserApplication_userId_applicationId_key" ON "UserApplication"("userId", "applicationId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserApplication" ADD CONSTRAINT "UserApplication_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
