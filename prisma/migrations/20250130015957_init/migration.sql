-- CreateTable
CREATE TABLE "BmiRecord" (
    "id" SERIAL NOT NULL,
    "bmi" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BmiRecord_pkey" PRIMARY KEY ("id")
);
