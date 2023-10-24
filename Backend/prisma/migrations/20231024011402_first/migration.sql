-- CreateTable
CREATE TABLE "Candidato" (
    "documento" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "informacionPersonal" TEXT NOT NULL,
    "partidoId" INTEGER NOT NULL,
    CONSTRAINT "Candidato_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "plataformaPolitica" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Voto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "candidatoId" TEXT NOT NULL,
    "partidoId" INTEGER NOT NULL,
    "fechaVoto" DATETIME NOT NULL,
    CONSTRAINT "Voto_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato" ("documento") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Voto_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
