"use server";

import { prisma } from "@/lib/prisma-client";

export async function createCategoria(data: {
  nome: string;
  legenda?: string;
  foto?: string;
}) {
  await prisma.categoria.create({
    data: {
      nome: data.nome,
      legenda: data.legenda || "",
      foto: data.foto || "",
    },
  });
}

export async function updateCategoria(
  id: string,
  data: { nome: string; legenda?: string; foto?: string }
) {
  await prisma.categoria.update({
    where: { id },
    data: {
      nome: data.nome,
      legenda: data.legenda || "",
      foto: data.foto || "",
    },
  });
}

export async function deleteCategoria(id: string) {
  await prisma.categoria.delete({
    where: { id },
  });
}
