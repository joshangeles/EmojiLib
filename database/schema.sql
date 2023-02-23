set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."emojis" (
	"emojiId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"url" TEXT NOT NULL,
	"createdAt" serial NOT NULL,
	"userId" int NOT NULL,
	CONSTRAINT "emojis_pk" PRIMARY KEY ("emojiId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"userName" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "emojis" ADD CONSTRAINT "emojis_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
