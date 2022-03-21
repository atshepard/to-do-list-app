CREATE TABLE "tasks"(
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(500),
"due" DATE,
"complete" DATE,
"state" BOOLEAN);