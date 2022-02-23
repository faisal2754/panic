-- CreateEnum
CREATE TYPE "PanicStatus" AS ENUM ('UNATTENDED', 'PENDING', 'RESOLVED');

-- AlterTable
ALTER TABLE "panics" ADD COLUMN     "status" "PanicStatus" NOT NULL DEFAULT E'UNATTENDED';
