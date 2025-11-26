"use client";

import { useState } from "react";

type Categoria = {
  id: string;
  titulo: string;
  descricao: string;
  imagemUrl?: string;
};

export default function Page() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [modalAberta, setModalAberta] = useState(false);
  const [editando, setEditando] = useState<Categoria | null>(null);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [erroImagem, setErroImagem] = useState("");

  function validarURL(url: string) {
    if (!url) return true; // URL é opcional
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  function abrirModalCriar() {
    setEditando(null);
    setTitulo("");
    setDescricao("");
    setImagemUrl("");
    setErroImagem("");
    setModalAberta(true);
  }

  function abrirModalEditar(c: Categoria) {
    setEditando(c);
    setTitulo(c.titulo);
    setDescricao(c.descricao);
    setImagemUrl(c.imagemUrl || "");
    setErroImagem("");
    setModalAberta(true);
  }

  function salvarCategoria() {
    if (!validarURL(imagemUrl)) {
      setErroImagem("URL inválida. Coloque uma URL completa (https://...)");
      return;
    }

    if (editando) {
      setCategorias((prev) =>
        prev.map((c) =>
          c.id === editando.id ? { ...c, titulo, descricao, imagemUrl } : c
        )
      );
    } else {
      const nova: Categoria = {
        id: crypto.randomUUID(),
        titulo,
        descricao,
        imagemUrl: imagemUrl || undefined,
      };
      setCategorias((prev) => [...prev, nova]);
    }

    setModalAberta(false);
  }

  function excluirCategoria(id: string) {
    setCategorias((prev) => prev.filter((c) => c.id !== id));
    setModalAberta(false);
  }

  const Botao = ({
    children,
    onClick,
    className = "",
  }: {
    children: any;
    onClick?: () => void;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
        text-sm font-medium transition-all h-10 px-5 py-3 outline-none
        disabled:pointer-events-none disabled:opacity-50
        focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
        border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground
        dark:bg-input/30 dark:border-input dark:hover:bg-input/50
        ${className}
      `}
    >
      {children}
    </button>
  );

  return (
    <div className="p-6 w-full">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <Botao onClick={abrirModalCriar}>Criar Categoria</Botao>
      </div>

      {/* GRID DE CATEGORIAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((cat) => (
          <div
            key={cat.id}
            className="
              border border-border rounded-md bg-background shadow-xs 
              overflow-hidden transition hover:shadow-sm
            "
          >
            {cat.imagemUrl && (
              <img
                src={cat.imagemUrl}
                alt={cat.titulo}
                className="w-full h-40 object-cover border-b border-border"
              />
            )}

            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold text-lg">{cat.titulo}</h2>

                <button
                  onClick={() => abrirModalEditar(cat)}
                  className="text-black text-3xl font-bold px-2 leading-none hover:opacity-70"
                >
                  ⋮
                </button>
              </div>

              <p className="text-sm mt-2">{cat.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalAberta && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-background border border-border p-8 rounded-md w-[600px] shadow-lg max-w-full">

            <h2 className="text-xl font-semibold mb-6">
              {editando ? "Editar Categoria" : "Criar Categoria"}
            </h2>

            <div className="flex flex-col gap-4">

              {/* Título */}
              <input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título"
                className="border border-border p-4 rounded bg-input/30 focus:outline-none focus:ring-2 focus:ring-ring text-lg"
              />

              {/* URL da Imagem */}
              <input
                value={imagemUrl}
                onChange={(e) => {
                  setImagemUrl(e.target.value);
                  if (erroImagem) setErroImagem("");
                }}
                placeholder="URL da Imagem (opcional)"
                className={`border p-4 rounded bg-input/30 focus:outline-none focus:ring-2 focus:ring-ring text-lg ${
                  erroImagem ? "border-destructive" : "border-border"
                }`}
              />
              {erroImagem && (
                <p className="text-sm">{erroImagem}</p>
              )}

              {/* Descrição */}
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição"
                className="border border-border p-4 rounded bg-input/30 focus:outline-none focus:ring-2 focus:ring-ring text-lg h-32 resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">

              {editando && (
                <Botao
                  onClick={() => excluirCategoria(editando.id)}
                >
                  Excluir
                </Botao>
              )}

              <Botao onClick={() => setModalAberta(false)}>Cancelar</Botao>
              <Botao onClick={salvarCategoria}>Salvar</Botao>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
