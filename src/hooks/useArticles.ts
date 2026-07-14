import { useEffect, useState } from "react";
import { getArticles } from "../services/articleService";
import type { Article, Pagination } from "../types/article";

type UseArticlesProps = {
  page: number;
  pageSize?: number;
  search?: string;
  category?: string;
};

export default function useArticles({
  page,
  pageSize = 9,
  search = "",
  category = "",
}: UseArticlesProps) {
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);

      try {
        const response = await getArticles(
          page,
          pageSize,
          search,
          category
        );
        console.log(response);
        setArticles(response.data);
        setPagination(response.meta.pagination);
      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    }

    fetchArticles();

  }, [page, pageSize, search, category]);

  return {
    articles,
    pagination,
    loading,
  };
}