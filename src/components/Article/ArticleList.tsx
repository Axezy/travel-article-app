import type { Article } from "../../types/article";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({
  articles,
}: ArticleListProps) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.documentId}
          article={article}
        />
      ))}
    </>
  );
}