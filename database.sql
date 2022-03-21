CREATE TABLE "tasks"(
"id" SERIAL PRIMARY KEY,
"task-name" VARCHAR(500),
"due-date" DATE,
"date-complete" DATE,
"task-status" BOOLEAN,
"task-category" VARCHAR(12));


