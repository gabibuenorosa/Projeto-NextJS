import { Category } from "./types";
import { useState } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  category?: Category | null;
  onClose: () => void;
  onSave: (data: Category) => void;
  onDelete?: () => void;
}

export default function CategoryModal({ category, onClose, onSave, onDelete }: Props) {
  const [title, setTitle] = useState(category?.title || "");
  const [imageUrl, setImageUrl] = useState(category?.imageUrl || "");
  const [description, setDescription] = useState(category?.description || "");

  const isEditing = !!category;

  const handleSubmit = () => {
    onSave({
      id: category?.id || uuid(),
      title,
      imageUrl,
      description,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md border border-black/20">

        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Editar Categoria" : "Criar Categoria"}
        </h2>

        {/* CAMPO TÍTULO */}
        <label className="text-sm font-medium">Título</label>
        <input
          className="w-full border border-black/20 rounded-md p-2 mb-3"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        {/* CAMPO URL */}
        <label className="text-sm font-medium">URL da imagem</label>
        <input
          className="w-full border border-black/20 rounded-md p-2 mb-3"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />

        {/* CAMPO DESCRIÇÃO */}
        <label className="text-sm font-medium">Descrição</label>
        <textarea
          className="w-full border border-black/20 rounded-md p-2 mb-3"
          rows={4}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        {/* BOTÕES */}
        <div className="flex justify-between mt-4">
          
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            Cancelar
          </button>

          <div className="flex gap-2">
            {isEditing && onDelete && (
              <button
                onClick={onDelete}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-red-100 shadow-xs hover:bg-red-200 hover:text-red-700 h-9 px-4 py-2"
              >
                Excluir
              </button>
            )}

            <button
              onClick={handleSubmit}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Salvar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
