"use client";

import Image from "next/image";
import { Categoria } from "@prisma/client";
import DeleteButton from "./delete-button";
import EditForm from "./edit-from";
import { useState } from "react";

export default function CategoriaCard({ categoria }: { categoria: Categoria }) {
  const [editando, setEditando] = useState(false);

  return (
    <div className="bg-[#1f1f23] border border-[#2a2a2f] rounded-xl p-4 flex items-center gap-4 transition hover:border-[#3a3a40]">
      {categoria.foto && (
        <Image
          src={categoria.foto}
          alt={categoria.nome}
          width={70}
          height={70}
          className="rounded-lg object-cover shadow-md"
        />
      )}

      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg">{categoria.nome}</h3>
        {categoria.legenda && (
          <p className="text-sm text-gray-400">{categoria.legenda}</p>
        )}
      </div>

      <button
        onClick={() => setEditando(true)}
        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
      >
        Editar
      </button>

      <DeleteButton id={categoria.id} />

      {editando && (
        <EditForm categoria={categoria} close={() => setEditando(false)} />
      )}
    </div>
  );
}
