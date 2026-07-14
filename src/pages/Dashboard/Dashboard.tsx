import { useEffect, useState } from "react";
import useArticles from "../../hooks/useArticles";
import ArticleCard from "../../components/Article/ArticleCard";
import { useSearch } from "../../context/SearchContext";
import useDebounce from "../../hooks/useDebounce";
import Pagination from "../../components/Pagination/Pagination";
import LoadingCard from "../../components/Loading/LoadingCard";

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const { search, category } = useSearch();

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, category]);

  const {
    articles,
    pagination,
    loading,
  } = useArticles({
    page,
    search: debouncedSearch,
    category,
  });

  if (!loading && articles.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold">
          No articles found
        </h2>

        <p className="text-gray-500 mt-2">
          Try another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          : articles.map((article) => (
              <ArticleCard
                key={article.documentId}
                article={article}
              />
            ))}

      </div>

      {!loading && (
        <Pagination
          page={page}
          pageCount={pagination?.pageCount ?? 1}
          onPageChange={setPage}
        />
      )}

    </div>
  );
}