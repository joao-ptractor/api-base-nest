-- AlterTable
ALTER TABLE "Part" ADD COLUMN     "review" TEXT,
ADD COLUMN     "reviewChanged" BOOLEAN NOT NULL DEFAULT false;
