-- CreateTable
CREATE TABLE "panics" (
    "panic_id" SERIAL NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "required_provider_type" "ProviderType" NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "panics_pkey" PRIMARY KEY ("panic_id")
);

-- AddForeignKey
ALTER TABLE "panics" ADD CONSTRAINT "panics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
