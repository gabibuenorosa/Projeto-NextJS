"use client";

import { useState } from "react";
import { createCategoria } from "./action";

export default function CreateForm() {
  const [nome, setNome] = useState("");
  const [legenda, setLegenda] = useState("");
  const [foto, setFoto] = useState("");
  const [error, setError] = useState("");

  function validarURL(url: string) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (foto && !validarURL(foto)) {
      setError("A URL da imagem é inválida.");
      return;
    }

    await createCategoria({ nome, legenda, foto });

    setNome("");
    setLegenda("");
    setFoto("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white border border-black rounded-lg flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold">Criar nova categoria</h2>

      {/* Nome */}
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className="w-full p-2 bg-white border border-black rounded"
      />

      {/* Legenda */}
      <input
        type="text"
        placeholder="Legenda"
        value={legenda}
        onChange={(e) => setLegenda(e.target.value)}
        className="w-full p-2 bg-white border border-black rounded"
      />

      {/* Foto (url) */}
      <input
        type="text"
        placeholder="URL da imagem"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
        className="w-full p-2 bg-white border border-black rounded"
      />

      {/* Erro da URL */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
      >
        Criar
      </button>
    </form>
  );
}
