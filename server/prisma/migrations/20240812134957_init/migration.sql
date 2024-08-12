-- CreateTable
CREATE TABLE "customer-payments" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer-payments_pkey" PRIMARY KEY ("id")
);
