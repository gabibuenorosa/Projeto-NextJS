import { Category } from "./types";

interface Props {
  category: Category;
  onEdit: () => void;
}

export default function CategoryCard({ category, onEdit }: Props) {
  return (
    <div className="relative p-4 rounded-md shadow-sm bg-white border border-black/10">
      
      {/* Botão três pontos */}
      <button
        onClick={onEdit}
        className="absolute right-2 top-2 text-black/60 hover:text-black"
      >
        ⋮
      </button>

      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h2 className="font-semibold text-lg">{category.title}</h2>
      <p className="text-sm text-black/70">{category.description}</p>
    </div>
  );
}
