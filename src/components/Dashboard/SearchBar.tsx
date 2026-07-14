import { useSearch } from "../../context/SearchContext";

export default function SearchBar() {
  const {
    search,
    setSearch,
  } = useSearch();

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search articles..."
      className="w-96 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}