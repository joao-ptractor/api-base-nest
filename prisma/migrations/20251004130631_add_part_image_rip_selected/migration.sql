-- AlterTable
ALTER TABLE "PartImages" ADD COLUMN     "name" TEXT,
ADD COLUMN     "ripSelected" BOOLEAN NOT NULL DEFAULT false;
