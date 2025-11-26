"use client";

import { useState } from "react";
import { updateCategoria } from "./action";
import { Categoria } from "@prisma/client";

export default function EditForm({
  categoria,
  close,
}: {
  categoria: Categoria;
  close: () => void;
}) {
  const [nome, setNome] = useState(categoria.nome);
  const [legenda, setLegenda] = useState(categoria.legenda || "");
  const [foto, setFoto] = useState(categoria.foto || "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await updateCategoria(categoria.id, { nome, legenda, foto });
    close();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f23] border border-[#2a2a2f] rounded-xl p-5 w-[350px]"
      >
        <h2 className="text-white text-xl mb-4 font-semibold">
          Editar Categoria
        </h2>

        <input
          type="text"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2f] text-white"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          className="w-full mb-3 p-2 rounded bg-[#2a2a2f] text-white"
          value={legenda}
          onChange={(e) => setLegenda(e.target.value)}
        />

        <input
          type="text"
          className="w-full mb-4 p-2 rounded bg-[#2a2a2f] text-white"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={close}
            className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
          >
            Cancelar
          </button>

          <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
