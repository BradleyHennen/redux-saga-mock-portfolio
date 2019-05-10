CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048) NOT NULL,
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048) NOT NULL,
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

-- Add tags for drop down selector
INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');