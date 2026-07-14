import { useEffect, useState } from "react";

import { getArticleById } from "../services/articleService";
import type { Article } from "../types/article";

export default function useArticle(
  documentId: string
) {
  const [article, setArticle] = useState<Article | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchArticle() {

      try {

        const response =
          await getArticleById(documentId);

        setArticle(response);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    }

    fetchArticle();

  }, [documentId]);

  return {
    article,
    loading,
  };
}