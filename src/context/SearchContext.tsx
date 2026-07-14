import {
  createContext,
  useContext,
  useState,
} from "react";

type SearchContextType = {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
};

const SearchContext =
  createContext<SearchContextType | null>(null);

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearch harus digunakan di dalam SearchProvider"
    );
  }

  return context;
}