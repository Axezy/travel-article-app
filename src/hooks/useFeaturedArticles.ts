import { useEffect, useState } from "react";
import { getArticles } from "../services/articleService";
import type { Article } from "../types/article";

export default function useFeaturedArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await getArticles(1, 3);

        setArticles(response.data);

      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return {
    articles,
    loading,
  };
}