import { Link } from "react-router-dom";

import type { Article } from "../../types/article";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden flex flex-col h-full">

      <img
        src={article.cover_image_url}
        alt={article.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-2xl font-bold line-clamp-2">
          {article.title}
        </h2>

        <p
          className="
            text-gray-600
            mt-3
            line-clamp-3
            flex-1
          "
        >
          {article.description}
        </p>

        <div className="flex justify-between mt-5 text-sm text-gray-500">

          <span>
            👤 {article.user?.username}
          </span>

          <span>
            💬 {article.comments?.length ?? 0} komentar
          </span>

        </div>

        <Link
          to={`/article/${article.documentId}`}
          className="
            mt-6
            bg-blue-600
            text-white
            py-2
            rounded-lg
            text-center
            hover:bg-blue-700
          "
        >
          Read More
        </Link>

      </div>

    </div>
  );
}