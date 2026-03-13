-- CreateTable
CREATE TABLE "PartImages" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "PartImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartImages" ADD CONSTRAINT "PartImages_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
