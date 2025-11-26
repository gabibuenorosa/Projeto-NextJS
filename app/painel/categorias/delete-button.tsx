"use client";

import { deleteCategoria } from "./action";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => deleteCategoria(id)}
      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
    >
      Excluir
    </button>
  );
}
