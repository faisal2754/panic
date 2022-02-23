/*
  Warnings:

  - You are about to drop the column `provider_type_id` on the `service_providers` table. All the data in the column will be lost.
  - Added the required column `provider_type` to the `service_providers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service_providers" DROP COLUMN "provider_type_id",
ADD COLUMN     "provider_type" "ProviderType" NOT NULL;
