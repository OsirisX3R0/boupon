-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_account_key_fkey";

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "key" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "account_key" SET DATA TYPE VARCHAR,
ALTER COLUMN "name" SET DATA TYPE VARCHAR;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_account_key_fkey" FOREIGN KEY ("account_key") REFERENCES "accounts"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
