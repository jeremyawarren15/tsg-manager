ALTER TABLE "accounts" RENAME COLUMN "refreshToken" TO "refresh_token";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "accessToken" TO "access_token";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "expiresAt" TO "expires_at";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "tokenType" TO "token_type";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "idToken" TO "id_token";--> statement-breakpoint
ALTER TABLE "authenticators" DROP CONSTRAINT "authenticators_credentialId_unique";--> statement-breakpoint
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "authenticators" ADD CONSTRAINT "authenticators_credentialID_unique" UNIQUE("credential_id");