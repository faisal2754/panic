/*
  Warnings:

  - You are about to drop the column `location` on the `panics` table. All the data in the column will be lost.
  - Added the required column `locationLat` to the `panics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationLong` to the `panics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "panics" DROP COLUMN "location",
ADD COLUMN     "locationLat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationLong" DOUBLE PRECISION NOT NULL;
