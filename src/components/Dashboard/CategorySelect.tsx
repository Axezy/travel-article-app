import { useSearch } from "../../context/SearchContext";

export default function CategorySelect() {
  const { category, setCategory } = useSearch();

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option value="">All Categories</option>
      <option value="Pantai">Pantai</option>
      <option value="Gunung">Gunung</option>
      <option value="Budaya">Budaya</option>
      <option value="Kuliner">Kuliner</option>
    </select>
  );
}