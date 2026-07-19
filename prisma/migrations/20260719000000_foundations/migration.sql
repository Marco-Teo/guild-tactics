-- CreateEnum
CREATE TYPE "DataClassification" AS ENUM ('PLACEHOLDER', 'COMMUNITY', 'OFFICIAL');

-- CreateTable
CREATE TABLE "DemoNotice" (
    "id" TEXT NOT NULL,
    "internalKey" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classification" "DataClassification" NOT NULL DEFAULT 'PLACEHOLDER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "DemoNotice_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "DemoNotice_internalKey_key" ON "DemoNotice"("internalKey");
