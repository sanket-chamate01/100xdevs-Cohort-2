/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Todos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todos_title_key" ON "Todos"("title");
