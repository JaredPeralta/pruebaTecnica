/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Partido` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Partido_nombre_key" ON "Partido"("nombre");
